const fetch = require('isomorphic-fetch');
const path = require('path');

async function fetchStuff() {

  const attractions = `https://failteireland.azure-api.net/opendata-api/v1/attractions`;
  const res = await fetch(attractions);
  return await res.json();

}

module.exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const attractions = await fetchStuff();
  attractions.results.forEach((attraction, i) => {
		const slug = filtySlugMaker(attraction.name);
		attraction.slug = slug;
    const attractionMeta = {
      id: createNodeId(`attraction-${i}`),
      parent: null,
      children: [],
      internal: {
        type: 'Attraction',
        mediaType: 'application/json',
        contentDigest: createContentDigest(attraction),
      },
    };
    actions.createNode({
      ...attraction,
      ...attractionMeta,
    });
  });
};

function filtySlugMaker(slugifyThis) {
  const slug = slugifyThis
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/---/g, '-') // lol but effective
    .replace(/----/g, '-')
    .replace(/--/g, '-');

  return slug;
}

module.exports.createPages = async ({ _, actions }) => {
  const { createPage } = actions;
  const projectTemplatePath = path.resolve('./src/templates/activity.js');
  const res = await fetchStuff();

  res.results.forEach((attraction, i) => {

    const slug = filtySlugMaker(attraction.name);

    createPage({
      component: projectTemplatePath,
      path: `/attraction/${slug}`,

      // pick this up in template props.pageContext for query
      context: {
        slug: slug,
        attractions: attraction,
      },
    });
  });
};

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},"9d8Q":function(e,t,r){},A9z5:function(e,t,r){e.exports={nav:"nav-module--nav--2IRYF",appLink:"nav-module--appLink--2tZB9"}},EYWl:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz");function c(e){var t=e.children,r=e.location,n=e.description,c=e.pageTitle,l=e.image,u=Object(i.c)("3000541721").site;return a.a.createElement(o.a,{titleTemplate:"%s - "+u.siteMetadata.title},a.a.createElement("html",{lang:"en"}),a.a.createElement("title",null,c),a.a.createElement("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),a.a.createElement("link",{rel:"alternative icon",href:"/favicon.ico"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("meta",{name:"description",content:u.siteMetadata.description}),r&&a.a.createElement("meta",{property:"ob:url",content:r.href}),a.a.createElement("meta",{property:"og:image",content:l||"/favicon.svg"}),a.a.createElement("meta",{property:"og:title",content:c,key:"ogtitle"}),a.a.createElement("meta",{property:"og:site_name",content:u.siteMetadata.title,key:"ogsitename"}),a.a.createElement("meta",{property:"og:description",content:n,key:"ogdesc"}),t)}},Rlzv:function(e,t,r){},Sv8q:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("hwdJ"),i=r.n(o),c=(r("9d8Q"),r("t+Ps"),r("Rlzv"),r("A9z5")),l=r.n(c),u=r("Wbzz");var s=function(){return a.a.createElement("nav",{className:l.a.nav},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(u.a,{to:"/"},"Home")," "),a.a.createElement("li",null,a.a.createElement(u.a,{to:"/about"},"About")," "),a.a.createElement("li",{className:l.a.appLink},a.a.createElement("a",{title:"Go to app page on Google Play.",target:"_blank",rel:"noreferrer noopener",href:"https://play.google.com/store/apps/details?id=ie.marie.irish_rain_sweeper"},"Get the App")," ")))},f=r("agxc"),p=r.n(f);function d(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return a.a.createElement("a",{href:"/"},a.a.createElement("svg",{width:"50",viewBox:"0 0 13 13",className:t?p.a.rotateSvg+" "+p.a.logo+"'":p.a.logo,onMouseEnter:function(){r(!0)},onMouseLeave:function(){r(!1)}},a.a.createElement("g",{paintOrder:"markers fill stroke"},a.a.createElement("path",{fill:"var(--purple)",d:"m 7.7932164,150.32063 4.6817706,-4.65659 -6.5701882,0.005 c 1.3345093,1.11871 2.1193094,3.14215 1.8884176,4.65196 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"m 5.9047988,145.66867 6.5701882,-0.005 -4.6434107,-4.64051 c 0.3113535,1.76151 -0.515744,3.62997 -1.9267775,4.64514 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 7.8315763,141.02353 4.6434107,4.64051 -0.0014,-6.59014 c -1.047123,1.46796 -2.9096702,2.2307 -4.6420217,1.94963 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"M12.473598 139.0739l.0014 6.59014 4.682923-4.68342c-1.742135.30162-3.621629-.43356-4.684312-1.90672zM12.474987 145.66404l-4.6817706 4.65659c1.7448928-.2883 3.6392896.48975 4.6775526 1.98243z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 12.474987,145.66404 -0.0042,6.63902 c 1.060683,-1.48558 2.970653,-2.2475 4.718345,-1.92901 -1.636922,-1.64596 -3.035202,-3.03168 -4.714127,-4.71001 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"m 19.133964,145.67252 c 0,0 -6.658744,-0.009 -6.658977,-0.008 l 4.714127,4.71001 c -0.323462,-1.79267 0.493576,-3.68929 1.94485,-4.70153 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"M17.15791 140.98062l-4.682923 4.68342 6.658977.008c-1.445212-1.3342-2.250746-2.88929-1.976054-4.6919zM7.7932164 150.32063l4.6817706-4.65659-6.5701882.005c1.3345093 1.11871 2.1193094 3.14215 1.8884176 4.65196z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"m 5.9047988,145.66867 6.5701882,-0.005 -4.6434107,-4.64051 c 0.3113535,1.76151 -0.515744,3.62997 -1.9267775,4.64514 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 7.8315763,141.02353 4.6434107,4.64051 -0.0014,-6.59014 c -1.047123,1.46796 -2.9096702,2.2307 -4.6420217,1.94963 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"M12.473598 139.0739l.0014 6.59014 4.682923-4.68342c-1.742135.30162-3.621629-.43356-4.684312-1.90672zM12.474987 145.66404l-4.6817706 4.65659c1.7448928-.2883 3.6392896.48975 4.6775526 1.98243z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 12.474987,145.66404 -0.0042,6.63902 c 1.060683,-1.48558 2.970653,-2.2475 4.718345,-1.92901 -1.636922,-1.64596 -3.035202,-3.03168 -4.714127,-4.71001 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"m 19.133964,145.67252 c 0,0 -6.658744,-0.009 -6.658977,-0.008 l 4.714127,4.71001 c -0.323462,-1.79267 0.493576,-3.68929 1.94485,-4.70153 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"M17.15791 140.98062l-4.682923 4.68342 6.658977.008c-1.445212-1.3342-2.250746-2.88929-1.976054-4.6919zM7.7932164 150.32063l4.6817706-4.65659-6.5701882.005c1.3345093 1.11871 2.1193094 3.14215 1.8884176 4.65196z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"m 5.9047988,145.66867 6.5701882,-0.005 -4.6434107,-4.64051 c 0.3113535,1.76151 -0.515744,3.62997 -1.9267775,4.64514 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 7.8315763,141.02353 4.6434107,4.64051 -0.0014,-6.59014 c -1.047123,1.46796 -2.9096702,2.2307 -4.6420217,1.94963 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"M12.473598 139.0739l.0014 6.59014 4.682923-4.68342c-1.742135.30162-3.621629-.43356-4.684312-1.90672zM12.474987 145.66404l-4.6817706 4.65659c1.7448928-.2883 3.6392896.48975 4.6775526 1.98243z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 12.474987,145.66404 -0.0042,6.63902 c 1.060683,-1.48558 2.970653,-2.2475 4.718345,-1.92901 -1.636922,-1.64596 -3.035202,-3.03168 -4.714127,-4.71001 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--lightPurple)",d:"m 19.133964,145.67252 c 0,0 -6.658744,-0.009 -6.658977,-0.008 l 4.714127,4.71001 c -0.323462,-1.79267 0.493576,-3.68929 1.94485,-4.70153 z",transform:"translate(-5.9047987,-139.0739)"}),a.a.createElement("path",{fill:"var(--purple)",d:"m 17.15791,140.98062 -4.682923,4.68342 6.658977,0.008 c -1.445212,-1.3342 -2.250746,-2.88929 -1.976054,-4.6919 z",transform:"translate(-5.9047987,-139.0739)"}))))}t.a=function(e){var t=e.children,r=e.skipToId;return a.a.createElement("div",{className:i.a.layout},a.a.createElement("header",null,r&&a.a.createElement("a",{className:i.a.skipLink,href:r},"skip to game"),a.a.createElement(d,null),a.a.createElement(s,null)),a.a.createElement(a.a.Fragment,null,t),a.a.createElement("footer",null,(new Date).getFullYear()))}},agxc:function(e,t,r){e.exports={logo:"logo-module--logo--2LVnj",rotateSvg:"logo-module--rotateSvg--S1_dX",rotate:"logo-module--rotate--ZtYfo"}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},hwdJ:function(e,t,r){e.exports={layout:"layout-module--layout--PTKVl",skipLink:"layout-module--skipLink--2h0IE"}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,o,i,c=r("17x9"),l=r.n(c),u=r("8+s/"),s=r.n(u),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("YVoz"),y=r.n(h),v="bodyAttributes",g="htmlAttributes",b="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",A="href",O="http-equiv",S="innerHTML",C="itemprop",k="name",P="property",j="rel",L="src",M="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",I="defer",N="encodeSpecialCharacters",R="onChangeClientState",_="titleTemplate",q=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),Y=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Z(e,T.TITLE),r=Z(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,z);return t||n||void 0},J=function(e){return Z(e,R)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===j&&"canonical"===e[r].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==S&&c!==w&&c!==C||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][u]&&(a[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,n),le(T.HTML,a),ce(f,p);var d={baseTag:ue(T.BASE,r),linkTags:ue(T.LINK,o),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[x[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case v:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=x[e]||e;if(r===S||r===w){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===S||e===w)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(v,r,n),htmlAttributes:pe(g,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,l,n),style:pe(T.STYLE,u,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:Q([A,M],e),bodyAttributes:G(v,e),defer:Z(e,I),encode:Z(e,N),htmlAttributes:G(g,e),linkTags:X(T.LINK,[j,A],e),metaTags:X(T.META,[k,E,O,P,C],e),noscriptTags:X(T.NOSCRIPT,[S],e),onChangeClientState:J(e),scriptTags:X(T.SCRIPT,[L,S],e),styleTags:X(T.STYLE,[w],e),title:W(e),titleAttributes:G(b,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return D(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return F({},a,((t={})[n.type]=i,t.titleAttributes=F({},o),t));case T.BODY:return F({},a,{bodyAttributes:F({},o)});case T.HTML:return F({},a,{htmlAttributes:F({},o)})}return F({},a,((r={})[n.type]=F({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(U(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},"t+Ps":function(e,t,r){}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-49b97314882c56fe1f88.js.map
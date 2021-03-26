import React from 'react';

export default function Nasties({numNastyNeighbours, classes}){

	const color = {
		color: 	numNastyNeighbours === 0
			? 'var(--white)'
			: numNastyNeighbours === 1
			? 'var(--green)'
			: numNastyNeighbours === 2
			? 'var(--blue)'
			: 'var(--red)'
	}
	return(
		<span className={classes.nasties} style={{...color}}>{numNastyNeighbours}</span>
	)
};

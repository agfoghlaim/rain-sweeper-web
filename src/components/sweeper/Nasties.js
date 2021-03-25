import React from 'react'

import { colors } from '../../consts';

export default function Nasties({numNastyNeighbours}){

	const color = {
		color: 	numNastyNeighbours === 0
			? colors.orange
			: numNastyNeighbours === 1
			? colors.green
			: numNastyNeighbours === 2
			? colors.blue
			: colors.red
	}
	return(
		<span style={{...color, fontWeight: 'bold'}}>{numNastyNeighbours}</span>
	)
};

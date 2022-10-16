import React from "react"

import useStyles from "./style"
import PengepulCard from "./../PengepulCard/PengepulCard"

const List = ( {pengepuls} ) => {

	const classes = useStyles();

	console.log(pengepuls)

	return (
		<div className={classes.list}>
			{
				pengepuls.map((pengepul => (
					// <h4>{pengepul.name}</h4>
					<PengepulCard pengepul={pengepul} />
				)))
			}
		</div>
	)

}

export default List;
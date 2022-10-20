import React from "react"

import useStyles from "./style"
import PengepulCard from "./../PengepulCard/PengepulCard"

const List = ( {pengepuls, setdirectionsResponse, setdetailPengepul} ) => {

	const classes = useStyles();

	return (
		<div className={classes.list}>
			{
				pengepuls.map((pengepul => (
					// <h4>{pengepul.name}</h4>
					<PengepulCard pengepul={pengepul} setdetailPengepul={setdetailPengepul} setdirectionsResponse={setdirectionsResponse} />
				)))
			}
		</div>
	)

}

export default List;
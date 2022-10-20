import { makeStyles } from "@mui/styles";

export default makeStyles(() => (
	{	
		cardContainer: {
			width: "294px",
			margin: "10px 0px",
			background: "#CFFF8D",
			rowGap: "5px",
			textAlign: "left",
			padding: "10px 20px",
			borderRadius: "10px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "start",
			alignItems: "start",
			boxShadow: "1px 1px 10px #585858"
		},
		locationContainer: {
			display: "flex",
			// columnGap: "6px",
			alignItems: "center",
			justifyContent: "start",
		},
		detailsButton: {
			marginTop: "10px",
			display: "flex",
			padding: "5px 10px",
			background: "#1A2623",
			width: "100%",
			borderRadius: "10px",
			color: "#E7FFF8",
			border: "0px",
			alignItems: "center",
			justifyContent: "center",
			columnGap: "7px",
			boxShadow: "1px 1px 4px black"
		}
	}
))
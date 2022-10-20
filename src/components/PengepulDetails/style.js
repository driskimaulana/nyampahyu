import { makeStyles } from "@mui/styles";

export default makeStyles(() => (
	{
		containerDetails: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
			justifyContent: "center",
			top: "55vh",
			position: "relative",
		},
		pengepulImage: {
			height: "30vh",
			borderRadius: "10px",
			marginTop: "20px",
		},
		details: {
			position: "absolute",
			top: "30vh",
			borderRadius: "10px",
			maxWidth: "40vh",
			backgroundColor: "white",
			background: "white",
			padding: "20px",
			boxShadow: "4px 4px 10px #888888",
		},
		timeAndRoute: {
			display: "flex",
			justifyContent: "center",
			columnGap: 	"20px",
			marginTop: "5px",
			padding: "2px 2px",
			alignItems: "center",
		},
		timeAndRouteItem: {
			display: "flex",
			alignItems: "center",
			columnGap: "5px",
		},
		description: {
			marginTop: "10px",
			fontSize: "13px",
		},
		jenisDanHargaTitle: {
			marginTop: "10px",
			marginBottom: "10px",
		},
		jenisHargaContainer: {
			display: "flex",
			flexDirection: "column",
			rowGap: "10px",
			justifyContent: "center",
			alignItems: 'center',
		},
		jenisHargaItem: {
			backgroundColor: "#CFFF8D",
			padding: "10px 25px",
			borderRadius: "10px",
			color: "#1A2623",
			display: "flex",
			alignItems: "center",
			columnGap: "5px",
			boxShadow: "1px 1px 2px #585858",

		},
		jenisHarga: {
			display: "flex",
			flexDirection: "column",
			alignItems: "start",
			justifyContent: "start",
		},
		jenis: {
			fontWeight: "bold",
		},
		harga: {
			fontSize: "10px",
		},
		buttonContainer: {
			marginTop: "10px",
			display: "flex",
			flexDirection: "column",
			rowGap: "10px",
		},
		jualButton: {
			backgroundColor: "#1A2623",
			border: "0px",
			color: "white",
			padding: "10px 20px",
			borderRadius: "10px",
			display: "flex",
			justifyContent: "center",
			columnGap: "10px",
			boxShadow: "1px 1px 10px #585858",
			alignItems: "center",
		},
		backButton: {
			border: "none",
			backgroundColor: "white",
		}
	}
))
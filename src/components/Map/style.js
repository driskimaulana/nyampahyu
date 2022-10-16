import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";


export default makeStyles(() => ({
	mapContainer: {
    top: '7vh',
		height: '60vh', width: '100%',
		position: "fixed",
		zIndex: 2,
  },
	markerContainer: {
    position: 'absolute', 
		transform: 'translate(-50%, -50%)', 
		zIndex: 2, 
		'&:hover': { zIndex: 3 },
		color: "red",
  },
	myMarkerContainer: {
    position: 'absolute', 
		transform: 'translate(-50%, -50%)', 
		zIndex: 1, 
		'&:hover': { zIndex: 2 },
		color: "blue",
  },
	paper: {
		padding: "0 10px",
		zIndex: 1,
		'&:hover': { zIndex: 2 },
	},
	typography: {
		textAlign: "center",
	},
	inputField: {
		position: 'absolute',
	}
}))
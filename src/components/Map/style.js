import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";


export default makeStyles(() => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		// position: "fixed",
		zIndex: 2,
		border: "10px",
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapContainer: {
		display: 'flex',
		flexDirection: 'column',
    top: '7vh',
		// height: '54vh', 
		width: '100%',
		position: "fixed",
		zIndex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		transition: "0.2s",
  },
	map: {
		transition: "0.2s",
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
	},
	formContainer: {
		zIndex: 3,
		// top: '55vh',
		borderRadius: "10px",
		padding: "0px 10px",
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: "white",
		paddingBottom: "10px",
		justifyContent: "center",
		position: 'fixed',
		boxShadow: "1px 1px 10px #1A2623",
	},
	inputContainer: {
		display: 'flex',
		gap: "0px 10px",
		padding: "20px 0",
	},
	inputItem: {
		height: "30px",
		padding: "0 10px",
		border: "1px solid grey",
		borderRadius: "10px",
	},
	inputButton: {
		background: 'linear-gradient(45deg, #1A2623 30%, #1A2623 90%)',
		border : "0px",
		height: "30px",
		width: "100px",
		borderRadius: "10px",
		color: "white",
	},
	formButton: {
		display: "flex",
		justifyContent: "end",
		gap: "10px",
		alignItems: "center",
	},
	myLocation: {
		color: "#1A2623",
	},
	myLocationInput: {
		height: "30px",
		padding: "0 10px",
		border: "1px solid #1A2623",
		borderRadius: "10px",
	},
	expandLessIcon: {
		marginTop: "10px",
		color: "#1A2623",
		alignSelf: "center",
	}
}))
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";


export default makeStyles(() => ({
	appBar: {
		background: 'linear-gradient(45deg, #1A2623 30%, #1A2623 90%)',
		position: 'fixed',
	},
	box : {
		position: 'fixed',
		zIndex: 3,
		width: "100%"
	},
}))
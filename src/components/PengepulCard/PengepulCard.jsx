import React, {useEffect, useState} from "react"
import { Card, CardActionArea, Typography, CardContent, CardMedia } from "@mui/material"

import useStyles from "./style"
import Geocode from "react-geocode"

const PengepulCard = (props) => {

	// geocode api setup
	Geocode.setApiKey("AIzaSyBTsrsuR6dC_NbqWgsZ6avwj3u-ZHCljjc");
	Geocode.setLanguage("id");
	Geocode.setLocationType("ROOFTOP");
	Geocode.enableDebug(true);

	// create state
	const [pengepulDetails, setPengepulDetails] = useState("");

	useEffect(() => {
		Geocode.fromLatLng(props.pengepul.coordinates.lat, props.pengepul.coordinates.lng).then(
		// Geocode.fromAddress(props.pengepul.name).then(
			(response) => {
				console.log(response.results);
				setPengepulDetails(response.results[0].formatted_address);
			},
			(error) => {
				console.log(error);
			}
		)
	}, [])

	const classes = useStyles();

	 return (
    <Card sx={{ maxWidth: 345 }} className={classes.cardContainer}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image={pengepul}
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.pengepul.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pengepulDetails}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PengepulCard
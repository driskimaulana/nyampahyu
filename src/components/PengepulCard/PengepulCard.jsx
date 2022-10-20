import React, {useEffect, useState} from "react"
import { Card, CardActionArea, Typography, CardContent, CardMedia } from "@mui/material"

import useStyles from "./style"
import Geocode from "react-geocode"

import { FmdGood, ReceiptLongSharp } from "@mui/icons-material"

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
				var location = "";
				response.results[0].address_components.forEach(e => {
					if(e.types[0].includes("administrative_area_level_2"))
					{
						location = `${location}, ${e.short_name}`;
					}else if(e.types[0].includes("administrative_area_level_3")){
						location = `${location} ${e.short_name}`;
					}
				});
				// setPengepulDetails(response.results[0].formatted_address);
				setPengepulDetails(location);
			},
			(error) => {
				console.log(error);
			}
		)
	}, [])

	async function calculateRoute() {

		// eslint-disable-next-line no-undef
		const directionService = new google.maps.DirectionsService()
		const result = await directionService.route({
			origin: "-6.862422533562541, 107.58734193088283",
			destination: `${props.pengepul.coordinates.lat}, ${props.pengepul.coordinates.lng}`,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		})

		props.setdetailPengepul({...props.pengepul, distance: result.routes[0].legs[0].distance.text, time: result.routes[0].legs[0].duration.text})

		props.setdirectionsResponse(result);
	}

	const classes = useStyles();

	 return (
		<div className={classes.cardContainer}>
			<h3 style={{fontSize: "18px"}}>{props.pengepul.name}</h3>
			<div className={classes.locationContainer}>
				<FmdGood style={{color: "#A71717", height: '13px'}} />
				<p style={{fontSize: "13px"}}>{pengepulDetails}</p>
			</div>
			<button onClick={calculateRoute} className={classes.detailsButton}><ReceiptLongSharp/> Details</button>
		</div>
    // <Card sx={{ maxWidth: 345 }} className={classes.cardContainer}>
    //   <CardActionArea className={classes.cardContainer} onClick={calculateRoute}>
    //     {/* <CardMedia
    //       component="img"
    //       height="140"
    //       image={pengepul}
    //       alt="green iguana"
    //     /> */}
    //     <CardContent className={classes.cardContainer}>
    //       <Typography gutterBottom variant="h6" component="div">
    //         {props.pengepul.name}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {pengepulDetails}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
}

export default PengepulCard
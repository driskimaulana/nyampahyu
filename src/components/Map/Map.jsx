import React from "react"
import GoogleMapReact from "google-map-react"
import useStyles from "./style"
import { LocationOnOutlined } from "@mui/icons-material"
import { Paper, Typography } from "@mui/material"

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api"

const Map = ({pengepuls}) => {

	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_GOOGLE_MAP_API_KEY
	})

	const classes = useStyles()
	const coordinates = {lat: -6.862422533562541, lng: 107.58734193088283}

	console.log(`map: ${pengepuls}`)

	return (
		<div className={ classes.mapContainer }>
			{/* <GoogleMap center={coordinates} zoom={15} mapContainerStyle={{width: "100%", height: '60vh'}}>
				<Marker position={coordinates}></Marker>

				{
					pengepuls.map((pengepul, i) => (
						<Marker 
							position={pengepul.coordinates} 
							key={i} 
							d/>

					))
				}
			</GoogleMap> */}
			
			<GoogleMapReact	
				bootstrapURLKeys={{key: 'AIzaSyBTsrsuR6dC_NbqWgsZ6avwj3u-ZHCljjc'}}
				center={coordinates}
				defaultZoom={13}
				margin={[50, 50, 50, 50]}
				options={''}
				onChange={(e) => {
					// setCoordinates({lat: e.center.lat, lng: e.center.lng});
					// setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
				}}
				onChildClick={''}
				className={classes.map}
			>

				<div className="inputField">
					<input type="text" />
				</div>

				<div
					className={classes.myMarkerContainer}
					lat={Number(coordinates.lat)}
					lng={Number(coordinates.lng)}
				>
					<LocationOnOutlined />
					

				</div>

				{
					pengepuls.map((pengepul, i) => (
						<div
							className={classes.markerContainer}
							lat={Number(pengepul.coordinates.lat)}
							lng={Number(pengepul.coordinates.lng)}
							key={i}
						>
							<LocationOnOutlined />
							<Paper elevarion={3} className={classes.paper} >
								<Typography variant="subtitle2" className={classes.typography}>
									{pengepul.name}
								</Typography>
							</Paper>
						</div>
					))
				}

			</GoogleMapReact>

		</div>
	)
}


export default Map;
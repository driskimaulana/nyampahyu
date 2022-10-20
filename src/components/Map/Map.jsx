import React, {useState, useRef, useEffect} from "react"
import GoogleMapReact from "google-map-react"
import useStyles from "./style"
import { MyLocationRounded, ExpandMoreRounded, ExpandLessRounded, ClearSharp } from "@mui/icons-material"
import { Paper, Typography } from "@mui/material"

import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from "@react-google-maps/api"

const Map = ({coordinates, pengepuls, directionsResponse, setdirectionsResponse}) => {

	const {isLoaded} = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_GOOGLE_MAP_API_KEY, 
		libraries: [
			'places',
		]
	})


	const [isExpanded, setIsExpanded] = useState(false);
	const [map, setmap] = useState(/**@type google.maps.Map */ (null))
	const originRef = useRef()
	const destinationRef = useRef()

	function handleExpandClick () {
		setIsExpanded((prevIsExpanded) => !prevIsExpanded);
	}

	async function calculateRoute() {
		if(originRef.current.value === '' && destinationRef.current.value === ''){
			return
		}


		// eslint-disable-next-line no-undef
		const directionService = new google.maps.DirectionsService()
		const result = await directionService.route({
			origin: `${coordinates.lat}, ${coordinates.lng}`,
			destination: destinationRef.current.value,
			// eslint-disable-next-line no-undef
			travelMode: google.maps.TravelMode.DRIVING,
		})

		setdirectionsResponse(result);
	}

	const classes = useStyles()
	// const coordinates = {lat: -6.862422533562541, lng: 107.58734193088283}

	// onScroll event
	const [mapHeight, setmapHeight] = useState("52vh")
	const [formTop, setformTop] = useState("55vh")

	useEffect(() => {
		const onScroll = e => {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				setformTop("23vh")
				setmapHeight("20vh")
			}else {
				setformTop("55vh")
				setmapHeight("52vh")
			}
		}

		window.addEventListener("scroll", onScroll)
	
		return () => {
			window.removeEventListener("scroll", onScroll)
		}
	}, [mapHeight])
	
	// function to clear search and route
	function clearButton() {
		setdirectionsResponse(null);
		destinationRef('');
		destinationRef.current.value = '';
	}

	return (
		<>
			<div className={classes.container}>
				<div className={ classes.mapContainer }>

				<GoogleMap 
					center={coordinates} 
					zoom={15} 
					className={classes.map}
					mapContainerStyle={{width: "100%", height: mapHeight}}
					style={{transition: "1s"}}
					onLoad={map => setmap(map)}
					options={{
						zoomControl: false,
						streetViewControl: false,
						mapTypeControl: false,
						fullscreenControl: false,
					}}>
					<Marker position={coordinates}></Marker>

					{
						pengepuls.map((pengepul, i) => (
							<Marker 
								position={pengepul.coordinates} 
								key={i} 
								d/>

						))
					}

					{directionsResponse && <DirectionsRenderer directions={directionsResponse} />}

				</GoogleMap>

				</div>

				{
					!directionsResponse && !isExpanded && 
					<div className={classes.formContainer} style={{top: formTop}}>
						<ExpandMoreRounded className={classes.expandLessIcon} onClick={handleExpandClick} />
					</div>
				}

				{isExpanded && <div className={classes.formContainer} style={{top: formTop}}>
						<div className={classes.inputContainer}>
								<input type="text" disabled value="Your Location" ref={originRef} className={classes.myLocationInput} />
								<Autocomplete>
									<input type="text" placeholder="Destination" ref={destinationRef} className={classes.inputItem} />
								</Autocomplete>
						</div>
						<div className={classes.formButton}>
							<ClearSharp onClick={clearButton} className={classes.myLocation} />
							<MyLocationRounded onClick={() => {map.panTo(coordinates)}} className={classes.myLocation} />
							<input type="submit" className={classes.inputButton} value="Lihat Rute" onClick={calculateRoute} />
						</div>
						<ExpandLessRounded className={classes.expandLessIcon} onClick={handleExpandClick} />
				</div>}

				
				{/* <GoogleMapReact	
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

				</GoogleMapReact> */}

			</div>
			{/* </div> */}
			
		</>
		
	)
}


export default Map;
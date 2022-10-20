import React, { useState, useEffect } from "react"
import NavBar from "./components/AppBar/NavBar"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import pengepulsData from "./data/pengepul"
import PengepulDetails from "./components/PengepulDetails/PengepulDetails"

const App = () => {

	const [pengepuls, setPengepuls] = useState([])
	const [detailPengepul, setdetailPengepul] = useState(null)

	const [directionsResponse, setdirectionsResponse] = useState(/**@type google.maps.Map */ (null));
	const [coordinates, setcoordinates] = useState({})

	// get current use location
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
			setcoordinates({lat: latitude, lng: longitude})
		})
	}, [])
	


	return (
		<>
			<NavBar />
			<Map coordinates={coordinates} pengepuls={pengepulsData.data.pengepuls} directionsResponse={directionsResponse} setdirectionsResponse={setdirectionsResponse} style= {{position: "sticky"}} />

			{detailPengepul && <PengepulDetails pengepul={detailPengepul} setdetailPengepul={setdetailPengepul} setdirectionsResponse={setdirectionsResponse} />}

			{!detailPengepul && <List pengepuls={pengepulsData.data.pengepuls} setdetailPengepul={setdetailPengepul} setdirectionsResponse={setdirectionsResponse} />}
			
			
		</>
	)
}

export default App;
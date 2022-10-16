import React, { useState, useEffect } from "react"
import NavBar from "./components/AppBar/NavBar"
import Map from "./components/Map/Map"
import List from "./components/List/List"
import pengepulsData from "./data/pengepul"

const App = () => {

	const [pengepuls, setPengepuls] = useState([])

	return (
		<>
			<NavBar />
			<Map pengepuls={pengepulsData.data.pengepuls} style= {{position: "sticky"}} />
			<List pengepuls={pengepulsData.data.pengepuls} />
		</>
	)
}

export default App;
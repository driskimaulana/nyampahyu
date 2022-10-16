import axios from "axios";

const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-6.908893132924975,107.53553836789098&radius=500&key=AIzaSyBTsrsuR6dC_NbqWgsZ6avwj3u-ZHCljjc&query=pengepul%20in%20Bandung";


const options = {
	params: {
		query: "pengepul%20in%20Bandung",
		key: "AIzaSyBTsrsuR6dC_NbqWgsZ6avwj3u-ZHCljjc",
	}
}

const getPengepulsData = async () => {
	try {
		// const {result: {result}} = await axios.get(URL);
		const data = await axios.get(URL);
		// console.log(response)
		return data
	} catch (error) {
		console.log('nah')
		console.log(error);
	}
}

export default getPengepulsData;
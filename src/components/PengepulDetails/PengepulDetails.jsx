import React from "react"
import useStyles from "./style"
import PengepulImage from "./../../data/img/pengepul.jpg"
import RouteIcon from "@mui/icons-material/Route"
import TimerIcon from "@mui/icons-material/Timer"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import StoreFrontIcon from "@mui/icons-material/Storefront"
import { Button } from "@mui/material"

const PengepulDetails = ({pengepul, setdetailPengepul, setdirectionsResponse}) => {

	const classes = useStyles();

	function handleKembaliButton() {
		setdetailPengepul(null);
		setdirectionsResponse(null);
	}

	return (
		<div className={classes.containerDetails}>
			<img src={PengepulImage} className={classes.pengepulImage} />
			<div className={classes.details}>
				<h2>{pengepul.name}</h2>
				<div className={classes.timeAndRoute}>
					<div className={classes.timeAndRouteItem}>
						<RouteIcon />
						<p>{pengepul.distance}</p>
					</div>
					<div className={classes.timeAndRouteItem}>
						<TimerIcon />
						<p>{pengepul.time}</p>
					</div>
				</div>
				<p className={classes.description}>
					Menerima segala jenis sampah plastik yang bisa di daur ulang seperti: Botol minum plastik, gelas plastik bekas, kresek bekas, dan sebagainnya.
				</p>
				<h4 className={classes.jenisDanHargaTitle}>Jenis dan Harga Sampah</h4>
				<div className={classes.jenisHargaContainer}>
					<div className={classes.jenisHargaItem}>
						<DeleteForeverIcon />
						<div className={classes.jenisHarga}>
							<p className={classes.jenis} >Plastik</p>
							<p className={classes.harga}>Rp. 5000,00 per KG</p>
						</div>
					</div>
					<div className={classes.jenisHargaItem}>
						<DeleteForeverIcon />
						<div className={classes.jenisHarga}>
							<p className={classes.jenis} >Plastik</p>
							<p className={classes.harga}>Rp. 5000,00 per KG</p>
						</div>
					</div>
					<div className={classes.jenisHargaItem}>
						<DeleteForeverIcon />
						<div className={classes.jenisHarga}>
							<p className={classes.jenis} >Plastik</p>
							<p className={classes.harga}>Rp. 5000,00 per KG</p>
						</div>
					</div>
				</div>
				<div className={classes.buttonContainer}>
					<button className={classes.jualButton} > <StoreFrontIcon /> Jual</button>
					<button className={classes.backButton} onClick={handleKembaliButton}>Kembali</button>
				</div>
			</div>
		</div>
	)
}

export default PengepulDetails;

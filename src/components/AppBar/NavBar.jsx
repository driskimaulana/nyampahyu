import React from "react"

import { AppBar, Box, Toolbar, Typography, IconButton, Button } from "@mui/material";
import { Menu } from "@material-ui/icons";
import useStyles from "./style"

const NavBar = () => {
	const classes = useStyles()

	return (
		<Box sx={{ flexGrow: 1 }} className={classes.box}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NyampahYu
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
					<IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
	);
}

export default NavBar;
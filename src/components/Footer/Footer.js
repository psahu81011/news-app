import React from "react";
import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        marginTop: 50,
    },
    name: {
        fontSize: 20,
        padding: "20px 30px 15px",
        color: "white",
        textAlign: "center",
    },
    iconContainer: {
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 20,
    },
    divider: {
        width: "90%",
    },
    icon: {
        padding: 5,
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Typography component="span" className={classes.name}>
                News App made by{" "}
                <Link
                    href="https://www.linkedin.com/in/prafullsahu/"
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                >
                    Prafull
                </Link>
            </Typography>
            <hr className={classes.divider} />
            <Box className={classes.iconContainer}>
                <Link
                    className={classes.icon}
                    href="#"
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                >
                    <Facebook fontSize="large" />
                </Link>
                <Link
                    className={classes.icon}
                    href="#"
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                >
                    <Instagram fontSize="large" />
                </Link>
                <Link
                    className={classes.icon}
                    href="https://www.linkedin.com/in/prafullsahu/"
                    target="_blank"
                    rel="noopener"
                    color="inherit"
                >
                    <LinkedIn fontSize="large" />
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;

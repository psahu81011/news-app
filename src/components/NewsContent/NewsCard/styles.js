import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        marginTop: 30,
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    image: {
        height: 300,
        borderRadius: 3,
        margin: 10,
    },
    newsContentContainer: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontWeight: 300,
        fontSize: 22,
        lineHeight: "27px",
    },
    authorTime: {
        fontSize: 12,
        fontWeight: 300,
        lineHeight: "22px",
        userSelect: "none",
    },
    short: {
        fontWeight: "bold",
        lineHeight: "22px",
    },
    newsBody: {
        fontSize: 16,
        fontWeight: 300,
        lineHeight: "22px",
    },
    readMore: {
        fontSize: 12,
        fontWeight: 400,
        userSelect: "none",
    },
}));

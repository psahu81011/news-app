import React from "react";
import { Box, Button, Container, makeStyles } from "@material-ui/core";

import NewsCard from "./NewsCard/NewsCard";

const useStyles = makeStyles((theme) => ({
    container: {
        fontWeight: 300,
        maxWidth: theme.breakpoints.values.sm,
        [theme.breakpoints.up("md")]: {
            maxWidth: theme.breakpoints.values.md,
        },
    },
    loadMoreContainer: {
        padding: 30,
        display: "flex",
        justifyContent: "space-around",
    },
    loadMore: {
        backgroundColor: "white",
        width: 130,
        fontWeight: 400,
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
        "&:hover": {
            backgroundColor: "white",
        },
    },
}));

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            {newsArray.map((newsItem, index) => (
                <>
                    <NewsCard newsItem={newsItem} key={index} />
                </>
            ))}

            {loadMore <= newsResults && (
                <>
                    <Box className={classes.loadMoreContainer}>
                        <Button
                            variant="contained"
                            onClick={() => setLoadMore(loadMore + 20)}
                            className={classes.loadMore}
                        >
                            Load More
                        </Button>
                    </Box>
                </>
            )}
        </Container>
    );
};

export default NewsContent;

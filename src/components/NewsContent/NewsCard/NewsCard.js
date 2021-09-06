import React from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const NewsCard = ({ newsItem }) => {
    const classes = useStyles();

    const fullDate = new Date(newsItem.publishedAt);
    const date = fullDate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const am = hour < 12;

    const placeholderImage =
        "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";

    return (
        <Card className={classes.root} elevation={5}>
            <Box style={{ flex: 0.4 }}>
                <CardMedia
                    className={classes.image}
                    image={newsItem.urlToImage ? newsItem.urlToImage : placeholderImage}
                    alt={newsItem.title}
                />
            </Box>
            <Box className={classes.newsContentContainer} style={{ flex: 0.6 }}>
                <CardContent style={{ flex: 1 }}>
                    <Typography className={classes.title} variant="h6" component="h2" gutterBottom>
                        {newsItem.title}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.authorTime} gutterBottom>
                        <Link
                            className={classes.short}
                            href={newsItem.url}
                            target="_blank"
                            rel="noopener"
                            color="inherit"
                            underline="none"
                        >
                            short{" "}
                        </Link>
                        by {newsItem.author ? newsItem.author : "Unknown"} /{" "}
                        {am
                            ? `${date[4].substr(0, 2)}:${date[4].substr(3, 2)} am`
                            : `${hour < 22 ? `0${hour - 12}` : hour - 12}:${date[4].substr(
                                  3,
                                  2
                              )} pm`}{" "}
                        on {`${date[2]} ${date[1]} ${date[3]},${date[0]}`}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" className={classes.newsBody}>
                        {newsItem.description}
                    </Typography>
                </CardContent>
                <CardActions style={{ padding: 16 }}>
                    <Typography className={classes.readMore} color="textSecondary">
                        read more at&nbsp;
                        <Link
                            className={classes.short}
                            href={newsItem.url}
                            target="_blank"
                            rel="noopener"
                            color="inherit"
                            underline="none"
                        >
                            {newsItem.source.name}
                        </Link>
                    </Typography>
                </CardActions>
            </Box>
        </Card>
    );
};

export default NewsCard;

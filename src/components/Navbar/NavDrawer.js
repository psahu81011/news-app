import React, { useState } from "react";
import {
    makeStyles,
    SwipeableDrawer,
    Button,
    Box,
    List,
    Divider,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import categories from "../../data/categories";

const useStyles = makeStyles({
    list: {
        width: 200,
        paddingLeft: 10,
        paddingRight: 5,
    },
    categories: {
        height: 40,
        borderRadius: 3,
    },
});

const NavDrawer = ({ setNewsCategory }) => {
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setDrawerState(state);
    };

    const list = (anchor) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem>Categories</ListItem>
            </List>
            <Divider />
            <List>
                {categories.map((text) => (
                    <ListItem
                        className={classes.categories}
                        button
                        key={text}
                        onClick={() => setNewsCategory(text)}
                    >
                        <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1)} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box>
            <Button onClick={toggleDrawer(true)}>
                <Menu />
            </Button>
            <SwipeableDrawer
                open={drawerState}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list()}
            </SwipeableDrawer>
        </Box>
    );
};

export default NavDrawer;

import { Box, makeStyles } from "@material-ui/core";
import React from "react";

import NavDrawer from "./NavDrawer";
import brandlogo from "../../logo.jpg";

const useStyles = makeStyles((theme) => ({
    icon: {
        flex: 0.48,
        paddingLeft: 20,
    },
    logo: {
        height: "80%",
        cursor: "pointer",
    },
    nav: {
        height: 71,
        boxShadow: "0px 1px 8px #888888",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
    },
}));

const Navbar = ({ setNewsCategory }) => {
    const classes = useStyles();

    return (
        <Box className={classes.nav}>
            <Box className={classes.icon}>
                <NavDrawer setNewsCategory={setNewsCategory} />
            </Box>
            <img
                className={classes.logo}
                src={brandlogo}
                // src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAApVBMVEX///87bPWZyf9irv8hX/Tx9P42afWVx/9liPYtZPUzZ/WAnPjk6f2wwPrM4/9msP/R5v+fzP9ytv8cXPQ/b/VjovxEePePxP9wtf/6+/9srv5usf5pqv1hn/yFv/9/vP9bl/tMg/ikt/piofxdmvtSi/lXkvrb4v2ar/mIovjK1fx6l/i6yPuvv/rt8P6Qp/lTjPnCzvtJfffa6/+82/+o0P+dw/3DIA1SAAAD40lEQVR4nO3be3eaMACHYWkxCrp5AUWqreL9Qlulc9//o40kaFsqxhsykt9zdvZP4Zz4LgnUQaEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoIyZP19UjlvM/VnWw0zPcmXohikWHrVaZj3YVPi2TrRTEd32sx7wzVXb+skBOL1dzXrQt/VqnT4H9nPBes162Le0OHcSRFNhkfXAb6diXJRA04xK1kO/lflls4DNhHnWg7+NpXVxAk2zpLhIupcuBM5ws/4AN7Awr2pgSrAvvh1ZCYZ+hBFdTa23rD/C1d4TpwEh/pF57i5tHsF8v99gU3JkNygKTm3zCMZdxpmiZeJ10diIzp3xc/W8XxrmiUvhhH9emy+GvN8jeIm/J9jik8vsZOKlP8xUJW8HvMFH6aA6+2FZig3BTb5N5g1KDwc57IoRNdDzfZtUFDRwncMNSuyasWsguoD830QNCmigYAPylYINiNkOPCYIwj/hX+wAlRqY3lO312puG43wA5Ycx3l5YQco1IB4/TDB86DVoJ8/DPDS77MDFGpgdptPtMH6pbRL0GQHJDRwJGxg9zu8Qa8UJYgabA/fJz6wH8rVoN3vhg3Gg3WrFCWIGhTqvw/hd4bSNei1RrQBTcCmQVN8tpQNprwBS6BeA7YljqcT2oAnULTBYDoZOXwzaHZ4A7f+6SN+toQNxrRBlKDZ6bADHr5cDJzfsbNla9DrjWiD52gldLqswbffnUt/YmdL1qBDt4PB2qMN2CzodunP1WswZQ14ghprUFCpAfttIWww3iWo1dgB9canbfw7M4kb0IVQe6yJz5avAd0SeYMwgZINWiPeYJdAwQZPbEuceAO+GTwq3CAIG9D9UMkG0ZYYNogSqNfAjrbEYBqtBAUbEH6nTBtECRRssKZfIvEGj4o20DR+WQimuwQqNrCndB60lW6gkbbnBe210g3ofzdqZKJeg/gzGJc1yPczGAXzmgZB9IRi+sNMVfn7M1nE2zc44XtlPolIOf1hpmoYfyhr32ArPNfn5xrDO4wzTbP4hrC/OAoXeTFaR3ruX/WLTQPNHLA7xZpwr6/au2V0j2Gm6sdiMINBq/e3KrCs7N4EzP1SOPiEInuNU8DYX1DyfmWkfkyE80gwDUI2EX/SROSEx5pzoHrVO12SvOy6uTyCJXzJIS9eL40g09u+/mURLKnefZ+R89/wM0nubxC/cytnvvlOrIoENwYx1ZVlnJqBGNZKkgtCTHHohTeAYrruDfP91dFR7mzj/zrO38zkWwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAif4BLetm8uJFzY4AAAAASUVORK5CYII="
                alt=""
            />
        </Box>
    );
};

export default Navbar;

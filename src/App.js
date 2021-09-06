import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NewsContent from "./components/NewsContent/NewsContent";
import Footer from "./components/Footer/Footer";

function App() {
    const [newsCategory, setNewsCategory] = useState("general");
    const [newsArray, setNewsArray] = useState([]);
    const [newsResults, setNewsResults] = useState();
    const [loadMore, setLoadMore] = useState(20);

    const apiKey = process.env.REACT_APP_API_KEY;

    const newsApi = async () => {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${newsCategory}&pageSize=${loadMore}`;
        try {
            const { data } = await axios.get(newsURL);

            setNewsArray(data.articles);
            setNewsResults(data.totalResults);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        newsApi();
    }, [newsCategory, newsResults, loadMore]);

    return (
        <div className="App">
            <Navbar setNewsCategory={setNewsCategory} />
            <NewsContent
                setLoadMore={setLoadMore}
                loadMore={loadMore}
                newsArray={newsArray}
                newsResults={newsResults}
            />
            <Footer />
        </div>
    );
}

export default App;

import React, {useEffect, useState} from "react";
import Header from "../Components/Header/Header";
import "./HomePage.css";
import {Link} from "react-router-dom";
import axios from "axios";

const HomePage = () => {
    const [advantages, setAdvantages] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/get_data/");
                setAdvantages(response.data["advantages_options"]);
                setMenu(response.data["menu_options"]);
            } catch (error) {
                console.error("Ошибка при выполнении запроса:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Header nav_list={menu}/>
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="heading">
                        <h1 className="heading-text">путешествие</h1>
                        <p className="heading-description">на красную планету</p>
                        {window.innerWidth > 768 && (
                            <div className="heading-button-container">
                                <button className="heading-button">Начать путешествие</button>
                            </div>
                        )}
                    </div>
                    <div className="advantages">
                        {advantages.map((item, index) => (
                            <Link key={index} to="/" className="advantages-item">
                                <p className="advantages-text">{item.top_text}</p>
                                <h2 className="advantages-big-text">{item.middle_text}</h2>
                                <p className="advantages-text">{item.bottom_text}</p>
                            </Link>
                        ))}
                    </div>
                </div>
                {window.innerWidth < 425 && (
                    <div className="heading-button-container">
                        <button className="heading-button">Начать путешествие</button>
                    </div>
                )}
            </section>
        </>
    );
};

export default HomePage;

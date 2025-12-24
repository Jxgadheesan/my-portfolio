import React from "react";
import { Element } from "react-scroll";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import "../assets/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <Element name="home" className="section">
                <h1>Jagadheesan</h1>
                <p>Hello!, here a passionate data scientist and  web developer.</p>
            </Element>

            <Element name="projects" className="section">
                <Projects />
            </Element>

            <Element name="about" className="section">
                <About />
            </Element>

            <Element name="contact" className="section">
                <Contact />
            </Element>
        </div>
    );
};

export default Home;

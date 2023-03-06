import * as React from "react";
import Layout from "../components/Layout";
import "../scss/templates/our-mission.scss";

import landing_logo from "../img/landing-logo.png";
import azlogo from "../img/az_logo.png";

import arrow from "../img/down_arrow.png";

import { Link } from "gatsby";

export default class OurMission extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isValidated: false, selectors: [] };
    }

    toggleDropdown = (number) =>{
        let selectors = this.state.selectors;
        console.log("Toggling for number: "+number);
        if (this.state.selectors.some(v => (v == number))){
            console.log("was not null. Removing instead");
            selectors = selectors.filter(item => item !== number);
            this.setState({selectors: selectors});
        }else{
            console.log("was null, adding");
            selectors.push(number);
            console.log(selectors);
            this.setState({selectors: selectors});
        }
    }


    render() {
        return (
            <Layout hasNav={true} hasFooter={true}>
                <section className="masthead">
                    <div className="gradient-background gradient-mission">

                        <img src={landing_logo} alt="AnthemicZ" />
                        <h2>OUR MISSION</h2>
                    </div>
                </section>

                <section className="help-gen">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-half-desktop is-full-mobile left-col">
                            <div className="col-inner">
                                <img src={azlogo} alt="Who we are" />
                                <h2 className="pink">ABOUT US</h2>

                                <p>We are the AnthemicZ. We are a group of singer/songwriters and producers that create music to Gen Z have better relationships and improved mental health.</p>

                                <p>Mollit consequat consectetur consequat ipsum laborum reprehenderit deserunt occaecat labore mollit. Officia ullamco proident amet et aliqua. Enim nostrud culpa officia magna elit nulla. Proident Lorem ex id id est mollit consequat qui aliquip mollit in sit. Nulla sint proident enim aliqua ea veniam ad consequat officia.</p>
                            </div>
                        </div>

                        <div className="column is-half-desktop is-full-mobile right-col">
                            <div className="col-inner">
                                <div className="selector-holder selector-1" onClick={() => this.toggleDropdown(1)}>
                                    Consectetur ut non velit irure exercitation id veniam.
                                    <img className={`${this.state.selectors.some(v => (v == 1)) ? "flipped" : ""}`} src={arrow} alt="Expand" />
                                </div>
                                <div className={`selector-dropdown dropdown-1 ${this.state.selectors.some(v => (v == 1)) ? "active" : "hidden"}`}>
                                    <p>In dolor elit eiusmod amet. Enim eu aliqua sunt ullamco. Sunt amet fugiat commodo id sint magna tempor ea occaecat tempor.</p>
                                </div>

                                <div className="selector-holder selector-1" onClick={() => this.toggleDropdown(2)}>
                                    Consectetur ut non velit irure exercitation id veniam.
                                    <img className={`${this.state.selectors.some(v => (v == 2)) ? "flipped" : ""}`} src={arrow} alt="Expand" />
                                </div>
                                <div className={`selector-dropdown dropdown-1 ${this.state.selectors.some(v => (v == 2)) ? "active" : "hidden"}`}>
                                    <p>In dolor elit eiusmod amet. Enim eu aliqua sunt ullamco. Sunt amet fugiat commodo id sint magna tempor ea occaecat tempor.</p>
                                </div>

                                <div className="selector-holder selector-1" onClick={() => this.toggleDropdown(3)}>
                                    Consectetur ut non velit irure exercitation id veniam.
                                    <img className={`${this.state.selectors.some(v => (v == 3)) ? "flipped" : ""}`} src={arrow} alt="Expand" />
                                </div>
                                <div className={`selector-dropdown dropdown-1 ${this.state.selectors.some(v => (v == 3)) ? "active" : "hidden"}`}>
                                    <p>In dolor elit eiusmod amet. Enim eu aliqua sunt ullamco. Sunt amet fugiat commodo id sint magna tempor ea occaecat tempor.</p>
                                </div>

                                <div className="selector-holder selector-1" onClick={() => this.toggleDropdown(4)}>
                                    Consectetur ut non velit irure exercitation id veniam.
                                    <img className={`${this.state.selectors.some(v => (v == 4)) ? "flipped" : ""}`} src={arrow} alt="Expand" />
                                </div>
                                <div className={`selector-dropdown dropdown-1 ${this.state.selectors.some(v => (v == 4)) ? "active" : "hidden"}`}>
                                    <p>In dolor elit eiusmod amet. Enim eu aliqua sunt ullamco. Sunt amet fugiat commodo id sint magna tempor ea occaecat tempor.</p>
                                </div>

                                <div className="selector-holder selector-1" onClick={() => this.toggleDropdown(5)}>
                                    Consectetur ut non velit irure exercitation id veniam.
                                    <img className={`${this.state.selectors.some(v => (v == 5)) ? "flipped" : ""}`} src={arrow} alt="Expand" />
                                </div>
                                <div className={`selector-dropdown dropdown-1 ${this.state.selectors.some(v => (v == 5)) ? "active" : "hidden"}`}>
                                    <p>In dolor elit eiusmod amet. Enim eu aliqua sunt ullamco. Sunt amet fugiat commodo id sint magna tempor ea occaecat tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        );
    }
}

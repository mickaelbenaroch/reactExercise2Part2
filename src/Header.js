import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: '60px'
    };
    render() {
        return (
            <div style={this.header}>
                <NavLink exact to="/" activeStyle={this.active}>
                Get All Deliveries
                </NavLink>
                <NavLink to="/getdeliverybyid" activeStyle={this.active}>
                Get Delivery by ID
                </NavLink>
                <NavLink to="/getdeliveriesbyrallypointtype" activeStyle={this.active}>
                Get Deliveries By Rally Point Type
                </NavLink>
            </div>
);}}
export default Header;
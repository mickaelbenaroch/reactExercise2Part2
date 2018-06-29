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
                <NavLink exact to="/2017-2018/dcs/dev_28/client_app/" activeStyle={this.active}>
                Get All Deliveries
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_28/client_app/getdeliverybyid" activeStyle={this.active}>
                Get Delivery by ID
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_28/client_app/getdeliveriesbyrallypointtype" activeStyle={this.active}>
                Get Deliveries By Rally Point Type
                </NavLink>
            </div>
);}}
export default Header;
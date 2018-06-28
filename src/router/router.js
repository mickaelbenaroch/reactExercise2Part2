import React from "react";
import { Route } from "react-router-dom";
import DeliveryList from "../Components/DeliveryList";
import ById from "../Components/ById";
import ByRallyPoint from "../Components/ByRallyPoint";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={DeliveryList} />
            <Route  path="/getdeliverybyid" component={ById} />
            <Route  path="/getdeliveriesbyrallypointtype" component={ByRallyPoint} />
        </React.Fragment>
    );}

export default ReactRouter;

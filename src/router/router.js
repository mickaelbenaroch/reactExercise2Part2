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
            <Route exact path="/2017-2018/dcs/dev_28/client_app/" component={DeliveryList} />
            <Route  path="/2017-2018/dcs/dev_28/client_app/getdeliverybyid" component={ById} />
            <Route  path="/2017-2018/dcs/dev_28/client_app/getdeliveriesbyrallypointtype" component={ByRallyPoint} />
        </React.Fragment>
    );}

export default ReactRouter;

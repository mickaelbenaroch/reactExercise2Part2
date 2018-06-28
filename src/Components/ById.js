import React, { Component } from 'react'
import DeliveryList from './DeliveryList'
import Delivery from './Delivery'


class ById extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      visible : false,
      deliveries: []
    };
    this.eachDelivery  = this.eachDelivery.bind(this);
    this.togglevisibility0 = this.togglevisibility0.bind(this);
    this.togglevisibility1 = this.togglevisibility1.bind(this);
    this.togglevisibility2 = this.togglevisibility2.bind(this);
    this.togglevisibility3 = this.togglevisibility3.bind(this);   
  }

togglevisibility0(){
        //make the clicked div visible
        var a = document.getElementById("0");
        a.style.visibility = "visible";

        //hide the others divs
        var b = document.getElementById("1");
        var c = document.getElementById("2");
        var d = document.getElementById("3");
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";
}
togglevisibility1(){
        //make the clicked div visible
        var a = document.getElementById("1");
        a.style.visibility = "visible";

        //hide the others divs
        var b = document.getElementById("0");
        var c = document.getElementById("2");
        var d = document.getElementById("3");
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";
}
togglevisibility2(){
        //make the clicked div visible
        var a = document.getElementById("2");
        a.style.visibility = "visible";

        //hide the others divs
        var b = document.getElementById("0");
        var c = document.getElementById("1");
        var d = document.getElementById("3");
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";
}
togglevisibility3(){
        //make the clicked div visible
        var a = document.getElementById("3");
        a.style.visibility = "visible";

        //hide the others divs
        var b = document.getElementById("0");
        var c = document.getElementById("1");
        var d = document.getElementById("2");
        b.style.visibility = "hidden";
        c.style.visibility = "hidden";
        d.style.visibility = "hidden";
}

 componentDidMount() {
  var ids = ['123456','1235225','2589613','1122558']  
  const url = "https://deliveriesws.herokuapp.com/getDeliveryByID";
  for(var i = 0; i<4; i++){
    let data = {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body:  "delivery[id]="+ids[i]
        }
   fetch(url, data).then((res) => { return res.json();}).then((data) => {
     this.setState(prevState => ({
              deliveries: [
              ...prevState.deliveries,
              {
                  deliveryId: data.delivery.id,
                  weight: data.delivery.properties.weight_in_pounds,
                  state: data.delivery.properties.state_of_matter,
                  sender: data.delivery.sender,
                  ownerid: data.owner.id,
                  ownername: data.owner.name,
                  owneraddress: data.owner.adress,
              }]
        }))
    })
  }  
 }



  eachDelivery (delivery,i) {
    return (          
      <div id={i} className="card" style={{width: 40 + 'rem', position: 'absolute', top: 200 + 'px', visibility: 'hidden'}}>
        <div className="card-body">
          <Delivery key={'delivery'+i} index={i}>
            <h5 className="card-title" style={{color: 'green'}}>Delivery ID: {delivery.deliveryId}</h5>
            <p className="card-text">
            <div className="row">
              <div className="col-lg-6" style={{display: 'inline', color: 'blue'}}>
                Delivery weight (pounds):
              </div> 
              <div className="col-lg-6" style={{display: 'inline', color: 'red'}}>
                {delivery.weight}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" style={{display: 'inline', color: 'blue'}}>
                Delivery state of matter:
              </div> 
              <div className="col-lg-6" style={{display: 'inline', color: 'red'}}>
                {delivery.state}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" style={{display: 'inline', color: 'blue'}}>
                Delivery Sender:
              </div> 
              <div className="col-lg-6" style={{display: 'inline', color: 'red'}}>
                {delivery.sender}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" style={{display: 'inline', color: 'blue'}}>
                Delivery Owner Id:
              </div> 
              <div className="col-lg-6" style={{display: 'inline', color: 'red'}}>
                {delivery.ownerid}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" style={{display: 'inline', color: 'blue'}}>
                Delivery Owner Name:
              </div> 
              <div className="col-lg-6" style={{display: 'inline', color: 'red'}}>
                {delivery.ownername}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6" style={{display: 'inline', color: 'blue'}}>
                Delivery Owner Address:
              </div> 
              <div className="col-lg-6" style={{display: 'inline', color: 'red'}}>
                {delivery.owneraddress}
              </div>
            </div>
            </p>
          </Delivery>
        </div>
      </div>
      )
  }

  renderForm(){
    return (
        <div>
            <div>
             <h3>Click on the desired id to get the appropied delivery by id:</h3><br></br>
             <span onClick={this.togglevisibility0} style={{fontColor: 'grey', fontSize: '25' + 'px', cursor: 'pointer', border: 1 + 'px solid black', background: 'yellow', marginRight: 50 + 'px', padding: 7 + 'px'}}>Id: 123456</span>
             <span onClick={this.togglevisibility1} style={{fontColor: 'grey', fontSize: '25' + 'px', cursor: 'pointer', border: 1 + 'px solid black', background: 'yellow' , marginRight: 50 + 'px', padding: 7 + 'px'}}>Id: 1235225</span>
             <span onClick={this.togglevisibility2} style={{fontColor: 'grey', fontSize: '25' + 'px', cursor: 'pointer', border: 1 + 'px solid black', background: 'yellow' , marginRight: 50 + 'px', padding: 7 + 'px'}}>Id: 2589613</span>
             <span onClick={this.togglevisibility3} style={{fontColor: 'grey', fontSize: '25' + 'px', cursor: 'pointer', border: 1 + 'px solid black', background: 'yellow' , marginRight: 50 + 'px', padding: 7 + 'px'}}>Id: 1122558</span>
            </div>
             <div className="ideaList" style={{marginTop:50 + 'px'}}>
                {this.state.deliveries.map(this.eachDelivery)}
            </div>
        </div>    
        )
  }

  render() {
      return this.renderForm();
      
  }
}
export default ById
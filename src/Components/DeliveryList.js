import React, {Component} from 'react'
import Delivery from './Delivery'


class DeliveryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveries: []
    }
    this.eachDelivery   = this.eachDelivery.bind(this);
    this.add        = this.add.bind(this)
  }

//every delivery is added to the array of delivery
  add(ID,weight,state,sender,ownerid,ownername,oaddress) {
    this.setState(prevState => ({
      deliveries: [
      ...prevState.deliveries,
      {
          deliveryId: ID,
          weight:weight,
          state: state,
          sender: sender,
          ownerid: ownerid,
          ownername: ownername,
          owneraddress: oaddress 
      }]
    }))
  }

//on init get all the deivery from api, get method
 componentDidMount() {
  const url =
  "https://deliveriesws.herokuapp.com/getAllDeliveries";
   fetch(url,     {mode: 'cors'})
   .then((res) => {
   return res.json();
   })
   .then((data) => {
   var self=this;
   data.map((data) => {
   
   self.add(data.delivery.id, 
            data.delivery.properties.weight_in_pounds,
            data.delivery.properties.state_of_matter,
            data.delivery.sender,
            data.owner.id,
            data.owner.name,
            data.owner.adress,
            );
   })
   })
 }


//Display all the available deliveries
  eachDelivery (delivery,i) {
    return (          
      <div className="card" style={{width: 40 + 'rem'}}>
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

  render() {
      return (
        <div className="ideaList" style={{marginTop:50 + 'px'}}>
          {this.state.deliveries.map(this.eachDelivery)}
        </div>
      )
  }
}
export default DeliveryList

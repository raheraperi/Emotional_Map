import React from 'react'
import {connect} from 'react-redux'
import {Map, TileLayer, Marker} from 'react-leaflet'
import { getpins } from '../actions/pins'
import ViewPinInfo from './ViewPinInfo'

import {Route} from 'react-router'
class ViewPinMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showPinInfo:false
    }
    this.pullPin = this.pullPin.bind(this)
  }
  componentDidMount () {
    this.props.dispatch(getpins())
  }

  pullPin (pin) {
    this.setState({
      pin,
      showPinInfo: true
    })
  }

  render () {
    return (
      <div>
        <Map className ="map" center= {[-36.8485, 174.7633]} zoom={12}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {this.props.pinInfo.map(pin => {
              return <Marker key={pin.pin_name} onClick={()=> {this.pullPin(pin)}} position={[pin.pin_lat, pin.pin_long]} />
            })}
        </Map>


        <div>
          {this.state.showPinInfo ? <Route pin={this.state.pin} /> : null}
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  if (state.pinInfo.length > 0) {
    return {pinInfo: state.pinInfo
    }
  } else {
    return {pinInfo: []}
  }
}


export default connect (mapStateToProps) (ViewPinMap)

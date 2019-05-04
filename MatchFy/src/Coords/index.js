import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Coords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount(){ 
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#a459b3'  }}>
        <Text style={{  
           fontWeight: 'bold',
           color: '#FFF', 
            fontSize: 16,
            textAlign: 'center',
            }}> 
            >Latitude: {this.state.latitude}
        </Text>
        <Text style={{  
           fontWeight: 'bold',
           color: '#FFF', 
            fontSize: 16,
            textAlign: 'center',
            }}> 
            >Longitude: {this.state.longitude}
          </Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

Coords.navigationOptions = {
    title: 'Coords',
    header: null
  }

export default Coords;
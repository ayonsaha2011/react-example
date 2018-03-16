import React from 'react';
import axios from 'axios';
import Input from 'react-toolbox/lib/input';

let self;
class PlaceAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {formatted_address: "", street: "", city: "", state: "", country: "", pin_code: "", latitude: "", longitude: "", autocompleteItems: [], errors: {}}
  }
  handleChange (name, value) {
    self.setState({[name]: value});
  }

  componentDidMount(){
    var input = document.getElementById('cityAutocomplete');
    var options = { types: ['(cities)'] };
    self.autocomplete = new google.maps.places.Autocomplete(input, options);
    self.autocomplete.addListener('place_changed', self.handlefillInAddress);
  }
  handlefillInAddress () {
    var place = self.autocomplete.getPlace();
    self.setState({city: place.formatted_address});
    var componentForm = { locality: 'long_name', administrative_area_level_1: 'long_name', country: 'long_name', postal_code: 'long_name' };
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
         if(addressType == "locality")
        {
          self.setState({city: place.address_components[i][componentForm[addressType]]});
        }else if(addressType == "administrative_area_level_1"){
          self.setState({state: place.address_components[i][componentForm[addressType]]});
        }else if(addressType == "country"){
          self.setState({country: place.address_components[i][componentForm[addressType]]});
        }
      }
    }
    var address = self.state.street+" "+place.formatted_address;
    var replaced_addr = address.split(' ').join('+');
    var api ="https://maps.googleapis.com/maps/api/geocode/json?address="+replaced_addr+"&key=AIzaSyDyP34pZ_j9PJ9dkz4LWeh3MMqPm1pAKcQ";
    $.ajax({
      type: 'GET',
      url: api,
      data: "",
      dataType: 'json',
      success: function (data) {
        if($.isPlainObject(data) != false)
          {
            if(data["status"] == "OK")
              {
                console.log(data);
                var latitude = data["results"][0]["geometry"]["location"]["lat"],
                longitude = data["results"][0]["geometry"]["location"]["lng"];
                self.setState({latitude:latitude, longitude:longitude});
                self.handleMap(latitude, longitude);
              }
          }
      },
      error: function (data) {
        console.log(data);
      }
    });

  }
  handleMap(lat, lng) {
    console.log(lat, lng);
    var latlng = new google.maps.LatLng(lat, lng);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        animation: google.maps.Animation.DROP,
        title: 'Set lat/lon values for this property',
        draggable: true
    });
    google.maps.event.addListener(marker, 'dragend', function(a) {
      console.log(a);
        self.setState({latitude:a.latLng.lat().toFixed(7), longitude:a.latLng.lng().toFixed(7)});
    });
  }

  render () {
      const { street, city, state, country, pin_code, latitude, longitude, errors, autocompleteItems  } = this.state;
      return (
        <div>
          <div className="col-sm-12">
            {/*street, city, state, country, pin_code, latitude, longitude*/}
            <Input
              name="street"
              label='Address'
              value={street}
              error={errors.street}
              onChange={this.handleChange.bind(this, 'street')}
              autoComplete={false}
              multiline={true}
            />
          </div>
          <div className="clearBoth"></div>
          <div className="col-sm-6">
            <Input
              type='text'
              placeholder=""
              id="cityAutocomplete"
              label='City'
              value={city}
              onChange={this.handleChange.bind(this, 'city')}
            />
            <Input
              name="state"
              label='State'
              value={state}
              error={errors.state}
              onChange={this.handleChange.bind(this, 'state')}
              autoComplete={false}
              readOnly={true}
            />
            <Input
              name="country"
              label='Country'
              value={country}
              error={errors.country}
              onChange={this.handleChange.bind(this, 'country')}
              autoComplete={false}
              readOnly={true}
            />
            <Input
              name="pin_code"
              label='Pin code'
              value={pin_code}
              error={errors.pin_code}
              onChange={this.handleChange.bind(this, 'pin_code')}
              autoComplete={false}
            />
          </div>
            <div className="col-sm-6">
              <div id="map" style={{height:"300px"}}></div>
              {(latitude && longitude) ? (<p>{"latitude -"+latitude+", longitude-"+longitude}</p>) : ""}
            </div>

        </div>
      )
    }
}

export default PlaceAutocomplete;

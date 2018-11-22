import axios from 'axios';
import {
GET_ERRORS,
GET_VENUES,
LOADING,
} from './types';

const serverUrl='https://api.foursquare.com/v2/venues/search';
// Get Venues
export const getVenues = (address) => dispatch => {
  axios.get(serverUrl, {
    params: {
      client_id: 'GEWY0C2BUEEQZ3ICU3ISPAUSFQSGECO4SQT10IKMRYBDS3LJ',
      client_secret:'TDOI4DGGCV1STEA5OKJXUCKYBDIGFBZ3ID4OVY1LHZ5AK2LS',
      query:'lunch',
      near:address,
      v:'20170801',
      limit:'3'
      
    },
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
    .then(res =>
    dispatch({
      type:GET_VENUES,
      payload:res.data.response.venues,
    })
    )
    .catch(err =>console.log(err)   
    );
};


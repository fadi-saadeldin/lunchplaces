import axios from 'axios';
import {
GET_ERRORS,
GET_VENUES,
LOADING,
SEARCH_CHANGED
} from './types';

// on Change name 
export const searchChanged = (text) => {
  return {
    type: SEARCH_CHANGED,
    payload: text
  };
};

const serverUrl='https://api.foursquare.com/v2/venues/search';
// Get current profile
export const getVenues = (address) => dispatch => {
  // dispatch(setParticipantLoading());
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
// // Edit Device Status
// export const editStatus = ({name,status}) => dispatch => {
//   axios
//     .patch(serverUrl+`/device/${name}?active=${status}`)
//       .then(res => {
//         if(res.status==200){
//           editStatusSuccess(dispatch, name);
//         }
//       }
//     )
//     .catch(err => editStatusFail(dispatch, name)
//     );
// };
// // Edit Status Success 
// const editStatusSuccess = (dispatch, name) => {
//   let success=true
//   dispatch(getDevices(name,success));

// };
// // Edit Status Fail
// const editStatusFail = (dispatch, name) => {
//   let success=false
//   dispatch(getDevices(name,success));
// };



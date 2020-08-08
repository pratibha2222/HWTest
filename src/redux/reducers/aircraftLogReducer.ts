import { PUT_AIRCRAFT_REPORT } from "../actions"

const INITIAL_STATE = {
  aircraftData:{
      id:'IN123',
      maintenaceStatus:'Inprogress'
  }
}

interface actionType {
    type: string
    data: any
}

const aircraftLogReducer = (state = INITIAL_STATE, action: actionType) => {
    switch (action.type) {
       case PUT_AIRCRAFT_REPORT:
        return { ...state, aircraftData: action.data }
        default:
      return state;
    }
}

export default aircraftLogReducer;



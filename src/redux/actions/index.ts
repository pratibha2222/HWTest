export const GET_AIRCRAFT_REPORT = 'GET_AIRCRAFT_REPORT'
export const PUT_AIRCRAFT_REPORT = 'PUT_AIRCRAFT_REPORT'
export const GET_AC_DATA_STATUS = 'GET_AC_DATA_STATUS'

export const getData = () => {
  return {
      type: GET_AIRCRAFT_REPORT,
  }
}

export const putData = (data:any) => {
    return {
        type: PUT_AIRCRAFT_REPORT,
        data
    }
  }

  export const getACDataStatus = (data:any) => {
    return {
        type: GET_AC_DATA_STATUS,
        data
    }
  }
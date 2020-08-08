import { call, put, select, takeLatest } from 'redux-saga/effects'
import { postApi, getApi } from '../../api/api'
import { GET_AIRCRAFT_REPORT, putData, getACDataStatus } from "../actions";

interface Props {
    type: string
    data: any
  }

function* getDataAysnc({ data }: Props) {
     try{

        yield changeStatus(true, 'REQUESTED', '')

        ///////////******** get API call *******///////////
        // const AIRCRAFT_API = yield call(
        //     getApi,
        //     '',    
        //   )
        //   if (AIRCRAFT_API.status === 200) {
        //       yield put(putData(AIRCRAFT_API.data))
        //       yield changeStatus(false, 'SUCCESS', '')
        //   }
    
        const aircraftData = {
            id:'IN345',
            maintenaceStatus:'Completed'
        }

        yield put(putData(aircraftData))
        yield changeStatus(false, 'SUCCESS', '')

        // yield changeStatus(false, 'FAILED', 'api connection failed')

     }
     catch(err){
        console.log('error message', err)
        yield changeStatus(false, 'FAILED', 'api connection failed')
     }
  }
export function* watchGetAR() {
    yield takeLatest(GET_AIRCRAFT_REPORT, getDataAysnc)
  }

export type Statustypes = 'REQUESTED' | 'NOT_REQUESTED' | 'PAUSE' | 'SUCCESS' | 'RESUMED' | 'STOPPED' | 'FAILED';

  function* changeStatus(loading: boolean, status: Statustypes, ErrorMessage?: string) {
    yield put(
        getACDataStatus({
        loading: loading,
        status: status,
        ErrorMessage: ErrorMessage,
      }),
    )
  }
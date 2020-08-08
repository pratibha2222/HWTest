import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions'
import Loader from '../components/Loader'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'


export default function Home() {

  const [aircraftData, setAircraftData] = useState([])
  const dispatch = useDispatch()
  const { id , maintenaceStatus} = useSelector(state => state.aircraftLogData.aircraftData)
  const { loading, status, ErrorMessage } = useSelector(state => state.changeStatusData.loadingStatus)
  const [showerroeView, setErroeView] = useState(false)


    useEffect(() => {
       console.log('ErrorMessage', ErrorMessage)
       if (ErrorMessage === undefined || ErrorMessage === '') {
        setErroeView(false)
       }
       else{
        setErroeView(true)
       }
    }, [ErrorMessage])

    const callAircraftApi = () => {
        dispatch(getData())
    }

  const ErrorView = () => {
     return(
        <>
            <Text>API STATUS:{status}</Text>
            <Text>API ERROR MESSAGE:{ErrorMessage}</Text> 
        </>
     )
  }

  const ReportView = () => {
    return(
        <>
            <Text>Aircraft ID: {id}</Text>
            <Text>Maintenance Status: {maintenaceStatus}</Text>
        </>
    )
  }


    return (
        <>
        <View style={styles.container}>
            <Loader show={loading} />
            <Text style={styles.title}>Aircraft Maintenance Report</Text>
            <TouchableOpacity style={styles.button} onPress={callAircraftApi}>
                <Text style={styles.buttonTitle}>Get Update</Text>
            </TouchableOpacity>
            
            { !showerroeView && <ReportView/>}
            { showerroeView && <ErrorView/>}
            
            
        </View>
        </>   
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
    },

    button:{
        backgroundColor:'blue',
        borderRadius:5,
        height:30,
        width:200,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20
    },

    buttonTitle:{
       color:'white',  
    }

})


import React from 'react'
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

interface Props {
    show: boolean
}
const loader = (props: Props): React.ReactElement => {
    const { show } = props
    return (
        <>
            {show && (
                <View style={styles.container}>
                    <ActivityIndicator color='red' size="large" />
                </View>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 10,
        height,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default loader

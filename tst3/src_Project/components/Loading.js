import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.loading]}>
            <ActivityIndicator color={"black"} />
            <Text style={[styles.loadingTitle]}>加载中……</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        backgroundColor: '#999',
        height: 100,
        width: 150,
        borderRadius: 20,
        padding: 20
    },
    loadingTitle: {
        textAlign: 'center',
        color: 'black',
        marginTop: 20
    }
})

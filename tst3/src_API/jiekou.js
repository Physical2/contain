import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Alert } from 'react-native'

export default class index extends Component {

  getData = () => {
    
    const url =  `http://news-at.zhihu.com/api/3/stories/latest`

    fetch(url,{
        method: 'GET'
    })
    .then(res => res.json())
    .then((res) => {
        console.log(res)
        Alert.alert('成功','请求成功')
    }).catch((err) => {
        Alert.alert('报错',JSON.stringify(err))
    })
  }

  render() {
    return (
      <View style={{styles.container}}>
        <Button title='点击获取数据' onPress={this.getData}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
        alignItems: 'center'
    }
})

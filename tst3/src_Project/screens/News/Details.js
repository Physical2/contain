import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';
import { getExtra } from '../../utils/api';


export default class DetailScreen extends Component {
  constructor(){
    super()

    this.state = {
      extra:{}
    }
  }
  componentDidMount = () => {
    this.extraData()
  }
  extraData = () => {
    getExtra(this.props.route.params.id)
    .then((res)=>{
      this.setState({
        extra:res
      })
    }).catch(err => {
      alert(JSON.stringify(err))
    })
  }

  render() {
    return (
      <>
      
      <WebView
        source={{uri:this.props.route.params.url}}
      />
      <View style={[styles.bottom]}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
          <Text style={[styles.inside]}> back </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Disc_1',{  extra:this.state.extra,id:this.props.route.params.id})}>
          <Text style={[styles.inside]}> 短评 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Disc_2',{  extra:this.state.extra,id:this.props.route.params.id})}>
          <Text style={[styles.inside]}> 长评 </Text>
        </TouchableOpacity>
      </View>
      
      </>
    )
  }
}



const styles = StyleSheet.create({
  bottom: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height:50,
  },
  inside: {
    width: Dimensions.get('window').width/5,
  }
})

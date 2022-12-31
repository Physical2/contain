import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Alert, SafeAreaView, Image, Dimensions } from 'react-native'
import { getShort } from '../../utils/api' 

export default class Disc_1 extends Component {
    constructor(){
        super()
    
        this.state = {
          list: []
        }
      }
      componentDidMount = () => {
        this.getShorts()
      }
      
      getShorts = () => {
        getShort(this.props.route.params.id).then(res => {
          this.setState({
            list: res.comments
          })
        }).catch(err => {
          Alert.alert(JSON.stringify(err))
        })
      }

       renderItem = ({ item }) => {
        return (
            <SafeAreaView style={[styles.container]}>
                <View style={[styles.displa]}>
                
                <View style={[styles.display]}>
                    <View>
                        <Image
                            style={[styles.images]}
                            source={{ uri: item.avatar }}
                        />
                    </View>
                    <View>
                        <Text style={[styles.name]}>  {item.author} </Text>
                        <Text style={[styles.txt]}> {item.content} </Text>
                        
                    </View>
                </View>
                <Text style={[styles.tim]}> 时间：{item.time} </Text>
                </View>
            </SafeAreaView>
        )
    }


  render() {
    return (
        <>
        {
          <FlatList 
            data={this.state.list}
             renderItem={this.renderItem}
            // keyExtractor={}
            //分割线（下）
            ItemSeparatorComponent={() => {
              return <View 
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                marginVertical: 5
              }}></View>
            }}
          />

        }
      </>
        
        
    )
  }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
    },

    name: {
        flexDirection: 'row',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },

    txt: {
        width: Dimensions.get('window').width * 5/6,
        justifyContent: 'flex-end',
        fontSize: 15,
        color: 'black',
    },

    images: {
        height: 50,
        width: 50,
    },
    display: {
        flexDirection: 'row'
    },
    displa: {
        flexDirection: 'column'
    },
    tim: {
        alignContent: 'flex-end'
        
    }

    // separate: {
    //     borderBottomWidth: 1,
    //     borderBottomColor: 'grey',
    //     width: 400
    // }
})

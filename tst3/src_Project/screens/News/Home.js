import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert, Image, Dimensions } from 'react-native'
import  {getNewsList, getNewsBefore}  from '../../utils/api';
import  Loading  from "../../components/Loading.js";
import { SafeAreaView } from 'react-native-safe-area-context';

export default class NewsScreen extends Component {
  constructor(){
    super()

    this.state = {
        opacity: 1,
        latest: {},
        list:[],
        oldestDate: 0,
        date: new Date(),
        isGet: false,
        isFresh: false,
        // isEnd: false,      
    }
  }

  componentDidMount = () => {
    this.getList()
  }  

  //获取当前日期(未解决报错)
//   getNewDate = () => {
//     const date = new Date();

//     const year = date.getFullYear().toString();
//     const month = (date.getMonth() + 1).toString();
//     const day = date.getDate().toString();
//     const Dat = [year, month, day];

//     return Dat;
// };
//   Dat = getNewDate()
   
  getList = () => {
    getNewsList().then(res => {
      this.setState({
        latest: res,
        list: res.stories,
        isGet: true,
      })
    }).then(() => {
      getNewsBefore(this.state.latest.date-1).then(res => {
        let temp = this.state.list.push(...res.stories)
        this.setState={
          list: temp,
          oldestDate: res.date,
        }
      })
    }).catch(err => {
      alert('Network request failed', JSON.stringify(err))
    })
  }

    

  getPast = () => {
    getNewsBefore(this.state.oldestDate-1)
    .then(({stories})=>{
      let temp = this.state.list.push(...stories)
      this.setState={
        list: temp,
      }
    })
  }


  newsItem = ({index,item}) => {
    return this.newsImages({index,item})
  }

  newsImages = ({index,item}) => {
    return(
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('NewsDetail',{url: item.url,id: item.id})}
      >
        <View style = {[styles.newsItemContainer]}>

          <View style={[styles.newsItemText]}>       
            <Text 
              style={[styles.newsItemTitle]}
              numberOfLines={2}
            >
              {item.title}
            </Text>
            <View style = {[styles.newsItemFooter]}>
              <Text 
                style = {[styles.newsItemMeta]}
                numberOfLines={1}
              >
                {item.hint}
              </Text>
            </View>
          </View>
          <Image 
            source= {{uri: item.images[0]}}
            style={[styles.newsItemImage]}
          />
        </View>
      </TouchableOpacity>
    )
  }

  //刷新
  refreshData=()=>{
    this.setState({
      isFresh: true,
    })
    .then(()=>{
      this.refreshData()
    })
    .then(()=>{
      this.setState({
        isFresh: false,
      })
    })
  }

  

  render() {
    // var api = 'https://news-at.zhihu.com/api/3/stories/latest';

    // fetch(api).then((response) => response.json()).then((result) => {
    //     this.setState({
    //         list: result.stories
    //     })
    // })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    return (
      <>
       
           {/* <View style={{ height: 50, flexDirection: 'row', alignItems: 'flex-end' }}>
            <View>
              <Text style={[styles.dateDay]}> {Dat[2]} </Text>
              <Text style={[styles.dateMonth]}> {Dat[1]}月 </Text>
            </View>
            <View>
              <Text style={[styles.header]}> 知乎日报 </Text>
            </View>
          </View> 
          <View style={[styles.separate]}></View>         */}
        {
          this.state.list.length 
          ?
          <SafeAreaView> 
          <FlatList 
            data={this.state.list}
            renderItem={this.newsItem}
            refreshing={this.state.isFresh}
            onRefresh={this.refreshData}
            onEndReachedThreshold={0.1}
            onEndReached={this.getPast}                        
            // keyExtractor={}
            //分割线（下）
            ItemSeparatorComponent={() => {
              return <View 
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
                marginVertical: 5
              }}></View>
            }}
          />
          </SafeAreaView>
          :
          <Loading />   //加载效果
        } 
      </>
    )
  }
}




const styles = StyleSheet.create({
  newsItemContainer: {
    display:'flex',
    flexDirection:'row',
    width:Dimensions.get('window').width,
    justifyContent:'space-between',
    marginVertical:10,
    alignItems:'center',
  },
  newsItemText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 2/3 - 20
  },
  newsItemTitle: {
    paddingHorizontal: 10,
    fontSize: 18,
    width: Dimensions.get('window').width * 2/3,
  },
  newsItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  newsItemMeta:{
    fontSize: 13
  },
  newsItemImage: {
    width: Dimensions.get('window').width/3,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10
  },
  dateDay: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  dateMonth: {
    fontSize: 15,
    color: 'black',
  },
  separate: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: 400
}
})

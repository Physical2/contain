import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen  from './src_Project/screens/News/Details.js';
import  NewsScreen  from './src_Project/screens/News/Home.js';
import  Disc_1  from './src_Project/screens/Disc/Disc_1.js';
import  Disc_2  from './src_Project/screens/Disc/Disc_2.js';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen 
            name="News" 
            component={NewsScreen}
            options={{
                title:"日期|知乎日报",
                headerStyle:{
                    backgroundColor: '#fff'
                }
            }}
        />    
        <Stack.Screen 
            name="NewsDetail" 
            component={DetailScreen}
            options={{
                title:"新闻详情",
                headerStyle:{
                    backgroundColor: '#fff'
                }
            }}
        />    
         <Stack.Screen 
            name="Disc_1" 
            component={Disc_1}
            options={{
                title:"短评",
                headerStyle:{
                    backgroundColor: '#fff'
                }
            }}
        />    
        <Stack.Screen 
            name="Disc_2" 
            component={Disc_2}
            options={{
                title:"长评",
                headerStyle:{
                    backgroundColor: '#fff'
                }
            }}
        />    
      </Stack.Navigator>
     </NavigationContainer>
    )
  }
}




// import React, { Component } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import { Text, StyleSheet, View, TouchableOpacity,Button } from 'react-native'

// const Stack = createStackNavigator()

// //首页
// function HomeScreen({prop}) {
//   return (
//     <View style = {[styles.container]}>
      
        
//           <Text style = {[styles.text]}> Home Screen </Text>
//           <Button onPress={}>

//           </Button>
        
      
//     </View>

//   )
  
// }
// //新闻页
// function NewsScreen({prop}) {
//   return (
//     <View style = {[styles.container]}>
       
        
//           <Text style = {[styles.text]}> News Screen </Text>
        
      
//     </View>

//   )
  
// }



// export default class App extends Component {
  
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator >  
//           <Stack.Screen //作用于当前界面
//             name = "日期|知乎日报"
//             component={HomeScreen}
//           />
//           <Stack.Screen //作用于当前界面
//             name = "新闻内容"
//             component={NewsScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }

// fetch

// //样式
// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text:{
//     fontSize: 40
//   }
// })




// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

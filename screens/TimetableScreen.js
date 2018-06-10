import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, 
    Button, TouchableOpacity, Image, Platform, ListView} from 'react-native';

import nav_style from '../components/nav_style';
//import DayScreen from './DayScreen';
import {Icon} from 'react-native-elements';
import * as firebase from 'firebase';
import ApiKeys from '../ApiKeys'
import styles from '../components/styles';

const DayScreen = require('./DayScreen');

class Timetable extends Component { 

    constructor() {
        super();
        this.state = {
            weekDays: {}
        };
    }

//     constructor(props) {
//         super(props);
//         this.state = {
//             weekDays: {},
//             dataSource:new ListView.DataSource({
//             rowHasChanged: (row1, row2) =>  row1 !== row2,
//             })
//         };
//         this.itemRef = this.getRef.child('items');
//     }

//     getRef() {
//         return firebase.database().ref();
//     }

//     listenForItems(itemsRef){
//         itemsRef.on('value', (snap) => {

//             // get children as an array
//             var items = [];
//             snap.forEach((child) => {
//                 let events = child.val();
//                 let weekDay = child.key;
//                 let newEvent = {};
//               items.push({
//                 french: child.val().french,
//                 english: child.val().english,
//                 _key: child.key
//               });
//             });
    
//     this.setState({
//         dataSource: this.state.dataSource.cloneWithRows(items)
//       });

//     });
//   }

//   componentDidMount(){
//       this.listenForItems(this.itemsRef);
//   }


    // componentDidMount() {
    //     const rootRef = firebase.database().ref();
    //     const weekDaysRef = rootRef.child('weekDays').orderByChild('id');

    //     weekDaysRef.once('value', snap => {
    //         let newStateWeekDays = [];
    //         snap.forEach(child => {     
    //             let events = child.val();
    //             let weekDay = child.key
    //             let newEvent = {}
    //             Object.keys(events).map((key) => {
    //                 let event = events[key]
    //                 newEvent[key] = event
    //             })

    //             let lastState = this.state.weekDays

    //             lastState[weekDay] = newEvent
    //             let newState = lastState
    //             this.setState({
    //                 weekDays: newState
    //             })
    //         })
    //     })
    // }

  render() {
      const {navigation} = this.props;

      const weekDays = navigation.getParam('weekDays', 'BRAK DANYCH :(');

    return (

    <View>
         <StatusBar barStyle="light-content" />
        <View style={{height:'83%'}}>
        
             <View>
                    {Object.keys(weekDays).map((dayNameKey) => {
                        return (
                            <TouchableOpacity onPress={() => 
                                this.props.navigation.navigate('DayScreen', {events: weekDays[dayNameKey]})} >
                            <View style={styles.greyMedium_Container} > 
                                    <Text style={styles.textDay}> {dayNameKey} </Text>
                            </View>
                            </TouchableOpacity>
                        )
                    })
                }
                

            </View>  
            </View>  
        

    

     <View>
     <View style={{top: '5%', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center'}}>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Home')}>
                <Icon 
                    name='home' 
                    type='octicon'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}} >Home</Text>
                </TouchableOpacity>
            </View>
            

            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Map')} >
                <Icon 
                    name='marker' 
                    type='foundation'
                    color='#1D3557'
                    size={36}/>
                <Text style={{fontSize: 10, color:'#1D3557', textAlign: 'center'}}>Map</Text>
                </TouchableOpacity>
            </View>
            
            <View style={nav_style.HomeBtn}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>this.props.navigation.navigate('Timetable')}>
                <Icon 
                    name='calendar'
                    type='octicon' 
                    color='#cc0033'
                    size={36}/>
                <Text style={{fontSize: 10, color: '#cc0033', textAlign: 'center'}}>Timetable</Text>
                </TouchableOpacity>
            </View>
        
        </View>
 </View>
 </View>
 )
}
_renderItem(item) {
    const {navigate} = this.props.navigation;
    return(
        <ListItem item={item} onPress={() =>
            navigate('DayScreen')}  />
    );
}

}




const textStyle = StyleSheet.create({
 titleText: {
   marginTop: 10,
   fontSize: 18,
   fontWeight: 'bold',
   color: '#4a4a4a',
   textAlign: 'center',
   justifyContent: 'center',
   flex: 1,
   alignItems: 'center'
   
 },
});

const buttonStyle = StyleSheet.create({
 containerStyle: {
    backgroundColor: '#ECECEC',
    height: 45,
   width: '90%',
   //borderWidth: 1,
   //borderRadius: 2,
   borderBottomWidth: 0,
   borderRadius: 5, 
   shadowColor: '#000',
   shadowOffset: { height: 3 },
   shadowOpacity: 0.1, //from 0 to 1
   shadowRadius: 3,
   alignItems: 'center',
   elevation: 5,
   marginLeft: 5,
   marginRight: 5,
   marginTop: 10,
   marginBottom: 10,
   alignSelf: 'center',
 }
}) 

export default Timetable;
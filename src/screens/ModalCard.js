import React from 'react'
import {View,Text, TouchableHighlight} from 'react-native';


export default class ModalCard extends React.Component{
    render(){
        return(
            <View style={{
                paddingHorizontal:32,
                alignSelf:"center",
                marginTop:290,
                backgroundColor:"#FFF",
                height:386,
                elevation:1,
                width:270,
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    alignItems:"center"
                }}>
                    <Text style={{
                        fontFamily:"RobotoBold",
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        Home
                    </Text>

                    <Text style={{
                        fontSize:20,
                        color:"#a2a2db",
                        paddingHorizontal:12
                    }}>
                        - - - - - - 
                    </Text>
                    <Text style={{
                        fontFamily:"RobotoBold",
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        Laundry
                    </Text>
                </View>
               

               <View style={{
                   flexDirection:"row",
                   marginTop: 2,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:11
                   }}>
                       San Diego
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       paddingLeft:108,
                       fontSize:12
                   }}>
                      San Diego
                   </Text>
               </View>

               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       fontSize:16,
                       color:"#522289"
                   }}>
                       09:00 AM
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#522289",
                       paddingLeft:70,
                       fontSize:16
                   }}>
                       21:00 PM
                   </Text>

               </View>
               <Text style={{
                   fontFamily:"RobotoRegular",
                   color:"#a2a2db",
                   fontSize:12
               }}>
                   9 December, 2021
               </Text>


               <View style={{
                   flexDirection:"row",
                   marginTop:15,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12
                   }}>
                       Name
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12,
                       paddingLeft:126
                   }}>
                       Payment
                   </Text>
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
               }}>
                   <Text 
                     style={{
                       fontFamily:"RobotoRegular",
                        color:"#522289",
                        fontSize:16}}>
                       Ali
                   </Text>

                   <Text 
                     style={{
                       fontFamily:"RobotoRegular",
                        color:"#522289",
                        paddingLeft:146,
                        fontSize:16}}>
                       Card
                   </Text>
               </View>

               <Text style={{
                   fontSize:17,
                   marginTop:-5,marginVertical:16,
                   color:"#a2a2db"
               }}>
                - - - - - - - - - - - - - - - - -  
               </Text>
               <View style={{
                   flexDirection:"row",
                   marginTop:-20,
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12
                   }}>
                       Invoice
                   </Text>
                   <Text style={{
                       fontFamily:"RobotoRegular",
                       color:"#a2a2db",
                       fontSize:12,
                       paddingLeft:140
                   }}>
                       Price
                   </Text>
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <Text style={{
                       fontSize:16,
                       fontFamily:"RobotoRegular",
                       color:"#522289"
                   }}>
                       3 Shirt{"\n"}
                       2 Pants{"\n"}
                       2 Dress
                   </Text>
                   <Text style={{
                       fontSize:16,
                       fontFamily:"RobotoBold",
                       color:"#4b3ca7",
                       paddingLeft:80,
                   }}>
                       $300 mxn{"\n"}
                       $100 mxn{"\n"}
                       $400 mxn
                   </Text>
               </View>

               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:25,
                    backgroundColor:"#44FEA1",
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
                onPress={this.props.onPress}
               >
                   <Text style={{
                       fontFamily:"RobotoBold",
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>
                       Check Out
                   </Text>
               </TouchableHighlight>

               <Text style={{
                   color:"#a2a2db",
                   alignSelf:"center",
                   paddingLeft:20,
                   fontSize:12,
                   marginVertical:16,
                   fontFamily:"RobotoRegular"
               }}>
                   Click on checkout to generate the ticket
               </Text>
            </View>
        )
    }
}
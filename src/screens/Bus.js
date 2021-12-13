import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/Back3.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 50,
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Icon name="menu" size={30} color="#a2a2db" style={{ width: 80 }} />
          <Icon
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{ marginLeft: 230 }}
          />
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              fontSize: 40,
              color: "#522289",
              fontFamily: "MontBold",
            }}
          >
            Search!
          </Text>

          <Text
            style={{
              fontSize: 19,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
              fontFamily: "MontReg",
              color: "#4b0374",
            }}
          >
            Look for the best option
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#5350b9",
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}
          >
            <Image
              source={require("../images/search.png")}
              style={{ height: 17, width: 14 }}
            />
            <TextInput
              placeholder=""
              style={{ paddingHorizontal: 20, fontSize: 16, color: "blue",fontFamily: "MontReg" }}
            />
          </View>

          

          <Text
            style={{
              color: "#4b0374",
              fontFamily: "MontBold",
              marginTop: 350,
              fontSize: 20,
            }}
          >
            CHECK OUT OPTIONS
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <View
              style={{
                backgroundColor: "#534fb9",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/12.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#534fb9",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../images/13.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#5facdb" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#534fb9",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Image
                source={require("../images/14.jpg")}
                style={{ width: 180, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#bb32fe" />
              </View>
            </View>
          </ScrollView>
        </View>
        <View>
         <Image
                source={require("../images/my-icon.png")}
                style={{ width: 200, borderRadius: 10, height: 130, top: 50, left:110 }}
              />
      </View>
      
      </ImageBackground>
    
    );
  }
}

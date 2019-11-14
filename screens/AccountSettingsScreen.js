import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { ScrollView, NavigationEvents } from "react-navigation";
import { connect } from "react-redux";
import { logout } from "../store/actions";
import * as SecureStorage from "expo-secure-store";
import BackButton from "../components/BackButton";
import DoneButton from "../components/DoneButton";

import styles from "../constants/screens/AccountSettingsScreen";

import { AuthSession } from "expo";

class AccountSettingsScreen extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return {
          title: "Account Settings",
          headerStyle: {
            backgroundColor: "#323338"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            textAlign: "center",
            flexGrow: 1,
            alignSelf: "center"
          },
          headerLeft: <BackButton navigation={navigation} />,
          headerRight: (
            <DoneButton
              navigation={navigation}
              pressAction={navigation.getParam("done")}
            />
          )
        };
      };

      componentDidMount() {
        this.props.navigation.setParams({ done: this.done });
      }

      done = () => {
          this.props.navigation.goBack();
      };


      logoutPress = async () => {
        await SecureStorage.deleteItemAsync("sub", {});
        await SecureStorage.deleteItemAsync("email", {});
        await SecureStorage.deleteItemAsync("roles", {});
        await SecureStorage.deleteItemAsync("id", {});
        await SecureStorage.deleteItemAsync("userId", {});
        await SecureStorage.deleteItemAsync("accessToken", {});
        // await AuthSession.dismiss();
        this.props.logout();
        this.props.navigation.navigate("Logout");
        console.log("account settings logout hit")

        const logoutURL = 'https://key-conservation.auth0.com/v2/logout?federated';

        Linking.canOpenURL(logoutURL).then(supported => {
          if (supported) {
            Linking.openURL(logoutURL);
          } else {
            console.log("Don't know how to open URI: " + logoutURL);
          }
        });
      };

      render(){
          return(
           <ScrollView contentContainerStyle={styles.scrollBG}>
      <View style={styles.container}>
        <View style={styles.sections}>
          <View style={styles.iconWrap}>
            <SvgUri
              fill='#3b3b3b'
              width='25'
              height='25'
              source={require("../assets/icons/user.svg")}
            />
            <Text style={styles.title}>Logout Of Your Profile</Text>
                </View>
              <TouchableOpacity
                onPress={this.logoutPress}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
          );
      };



}

const mapStateToProps = state => ({
  currentUserProfile: state.currentUserProfile,
});

export default connect(
  mapStateToProps,
  { logout }
)(AccountSettingsScreen);
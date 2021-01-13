import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { View, Text, TouchableOpacity } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

import styles from "./styles";

class ScanCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { unique: true };
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.state.unique) {
        this.setState({ unique: true });
      }
    }, 1500);
  }
  onRead = data => {
    console.log("Scan Result ", data);
    this.setState({ unique: false });
    try {
      this.setState({ unique: false });
      this.props.navigation.navigate("GrandPoints", {
        data: JSON.parse(data.data)
      });
      this.setState({ unique: false });
      setTimeout(() => this.setState({ unique: false }), 250);
    } catch (error) {
      console.log("error", error);
      this.setState({ unique: false });
      alert("Failed");
    }
    this.setState({ unique: false });
    // setTimeout(() => this.scanner.reactivate(), 2000);
  };

  goBack = () => {
    this.setState({ unique: false });
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={this.goBack}>
          <Text style={styles.backButton}>Cancel</Text>
        </TouchableOpacity>
        <QRCodeScanner
          key={this.state.unique}
          ref={node => {
            this.scanner = node;
          }}
          onRead={this.onRead}
          reactivate={true}
          reactivateTimeout={1500}
        />
      </View>
    );
  }
}

export default ScanCustomer;

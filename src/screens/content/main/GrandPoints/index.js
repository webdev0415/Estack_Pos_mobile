import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import GrandPoints from "./GrandPoints";
import validator from "../../../../validators/points-validator";
import * as actions from "../../../../redux/actions";
import { Toast, Provider, Modal } from "@ant-design/react-native";

class GrandPointsScreen extends Component {
  state = {
    isGranded: false,
    purchase: "",
    user: null,
    visible: false
  };

  componentDidMount() {
    const user = this.props.navigation.getParam("data");
    this.props.onGetCustomer({ _id: user._id });
    this.setState({ user });
  }

  loadFont = async () => {
    await Font.loadAsync(
      "antoutline",
      // eslint-disable-next-line
      require("@ant-design/icons-react-native/fonts/antoutline.ttf")
    );

    await Font.loadAsync(
      "antfill",
      // eslint-disable-next-line
      require("@ant-design/icons-react-native/fonts/antfill.ttf")
    );
  };

  goBack = () => this.props.navigation.replace("Main");

  //grand = () => this.setState({ isGranded: true })
  grand = () => {
    this.setState({ isGranded: true, visible: true });

    //Toast.info("Points Granted Successfully.", 1, undefined, false);

    setTimeout(() => this.setState({ visible: false }), 1500);
  };

  grandPoints = () =>
    this.props.onGrandPoints({
      _id: this.state.user._id,
      purchase: this.state.purchase,
      grand: this.grand
    });

  onChangePurchase = purchase => {
    const positionOfDot = purchase.indexOf(".");

    if (positionOfDot > 0 && purchase.indexOf(".", positionOfDot + 1) < 0) {
      if (positionOfDot < 0) this.setState({ purchase });

      if (
        !purchase[positionOfDot + 3] &&
        (purchase[positionOfDot] ||
          purchase[positionOfDot + 1] ||
          purchase[positionOfDot + 2])
      )
        this.setState({ purchase });
    } else if (
      positionOfDot !== 0 &&
      purchase.indexOf(".", positionOfDot + 1) < 0 &&
      purchase[0] !== "0"
    )
      this.setState({ purchase });
  };

  render() {
    const { purchase, isGranded, user } = this.state;
    const { customer, business } = this.props;
    const isDisabled = purchase.length === 0 || isGranded;
    const footerButtons = [
      { text: "Ok", onPress: () => this.setState({ visible: false }) }
    ];
    if (!user || !customer) {
      return null;
    }
    return (
      <Provider>
        <GrandPoints
          user={user}
          customer={customer}
          business={business}
          grandPoints={this.grandPoints}
          goBack={this.goBack}
          isGranded={isGranded}
          purchase={purchase}
          isDisabled={isDisabled}
          onChangePurchase={this.onChangePurchase}
        />
        <Modal
          title=""
          transparent
          maskClosable
          visible={this.state.visible}
          footer={footerButtons}
        >
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ textAlign: "center" }}>
              Points Granted Successfully
            </Text>
          </View>
        </Modal>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  customer: state.customer.customer,
  business: state.user.business
});

const mapDispatchToProps = dispatch => ({
  onGrandPoints: payload => dispatch(actions.grandPointsAction(payload)),
  onGetCustomer: payload => dispatch(actions.getCustomerAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GrandPointsScreen);

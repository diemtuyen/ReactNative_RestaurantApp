import React, { Component } from 'react';
import { View, Picker } from "react-native";
export default class DropDown extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedValue: 1
    };
  }
  onValueChange2(value) {
    this.setState({
      selectedValue: value
    });
  }
  render() {    
    return (
      <View style={{
        flex: 1
      }}>
      <Picker
        selectedValue={this.state.selectedValue}
        // style={{ height: 50, width: 150 }}
        onValueChange={this.onValueChange2.bind(this)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
    </View>
    );
  }
}
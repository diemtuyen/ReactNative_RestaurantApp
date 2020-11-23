/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Image, TouchableOpacity, View, Text, Picker } from 'react-native';
import PropTypes from 'prop-types';
import Assets from '../../src/constants/assets';
import PrimaryText from '../base_components/PrimaryText';
import SecondaryText from '../base_components/SecondaryText';
import LoadingFood from '../base_components/LoadingFood';
import ViewRow from '../base_components/ViewRow';
import Colors from '../../src/constants/colors';
import FlatButton from '../base_components/FlatButton';
import DropDown from '../base_components/DropDown';

class FoodItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1
    };
  }

  onValueChange2(value) {
    this.setState({
      amount: value
    });
  }

  render() {
    const { food, onPress } = this.props;
    const { food: info } = food;
    if (!info) {
      return <LoadingFood />;
    }
    return (
      <TouchableOpacity
        activeOpacity={0.6}
      >
        <View
          key={food._id}
          style={{
            elevation: 3,
            minHeight: 100,
            backgroundColor: '#fff',
            margin: 10,
            borderRadius: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}
        >
          <Image
            source={Assets.Images.placeholderFood}
            style={{
              width: '100%',
              height: 100,
            }}
            resizeMode="contain"
          />
          <ViewRow
            jc="space-between"
            ai="flex-start"
            style={{
              paddingHorizontal: 15,
              paddingVertical: 0 
            }}
          >
            <View
              style={{
                flex: 3,
                flexDirection: 'column',
              }}
            >
              <Text size={24} style={{ marginBottom: 10 }}>
                {info.name}
              </Text>
              <Text size={24} style={{ marginBottom: 10 }}>Số lượng</Text>
              <Text>
                {info.type}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text size={24} color={Colors.moneyColor}>
                {food.price}
              </Text>
              <View style={{flex: 1}}>
                <Picker
                  selectedValue={this.state.amount}
                  mode={'dropdown'}
                  style={{ height: 50, width: 150 }}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                </Picker>
            </View>
            </View>
          </ViewRow>          
          <FlatButton
            key="add2Cart"
            title="Đặt món"
            onPress={onPress(this.state.amount)}
          />
        </View>
      </TouchableOpacity>
    );
  }
}


FoodItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
};


export default FoodItem;

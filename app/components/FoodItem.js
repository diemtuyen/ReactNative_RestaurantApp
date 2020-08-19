/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Assets from '../../src/constants/assets';
import PrimaryText from '../base_components/PrimaryText';
import SecondaryText from '../base_components/SecondaryText';
import LoadingFood from '../base_components/LoadingFood';
import ViewRow from '../base_components/ViewRow';
import Colors from '../../src/constants/colors';
import FlatButton from '../base_components/FlatButton';

class FoodItem extends React.Component {
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
            minHeight: 150,
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
              <PrimaryText size={18} align="left" style={{ marginBottom: 5 }}>
                {info.name}
              </PrimaryText>
              <SecondaryText>
                {info.type}
              </SecondaryText>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <PrimaryText size={20} color={Colors.moneyColor}>
                {food.price} &#8363;
              </PrimaryText>
            </View>
          </ViewRow>
          <FlatButton
            key="add2Cart"
            title="Add to Cart"
            onPress={onPress}
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

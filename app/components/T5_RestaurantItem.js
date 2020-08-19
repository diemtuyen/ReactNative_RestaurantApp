/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Assets from '../../src/constants/assets';
import SecondaryText from '../base_components/SecondaryText';

const RestaurantItem = ({ restaurant, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
  >
    <View
      key={restaurant._id}
      style={{
        width: '100%',
        minHeight: 120,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: '#eee',
      }}
    >
      <Image
        source={Assets.Images.placeholderRestaurant}
        style={{
          width: '100%',
          height: 100,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 5,
        }}
      >
        <SecondaryText size={16} align="center" style={{ marginBottom: 5 }}>
          {`Bàn số ${restaurant._id}`}
        </SecondaryText>
      </View>
    </View>
  </TouchableOpacity>
);

RestaurantItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
};


export default RestaurantItem;

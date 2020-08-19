/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import Assets from '../../src/constants/assets';
import PrimaryText from '../base_components/PrimaryText';

const MenuItem = ({ menu, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
  >
    <View
      key={menu._id}
      style={{
        width: '50%',
        minHeight: 120,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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
          flexDirection: 'column',
          padding: 15,
        }}
      >
        <PrimaryText size={18} align="center" style={{ marginBottom: 5 }}>
          {menu.name}
        </PrimaryText>
      </View>
    </View>
  </TouchableOpacity>
);

MenuItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  menu: PropTypes.object.isRequired,
};


export default MenuItem;

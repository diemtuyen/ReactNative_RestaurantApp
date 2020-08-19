/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, View } from 'react-native';

import startCase from 'lodash/startCase';
import { Actions } from 'react-native-router-flux';
import RestaurantItem from './T5_RestaurantItem';
import Assets from '../../src/constants/assets';
import ViewRow from '../base_components/ViewRow';
import PrimaryText from '../base_components/PrimaryText';
import RippleIcon from '../base_components/RippleIcon';
import BR from '../base_components/BR';

class RestaurantList extends Component {
  renderHeader = () => (
    <ViewRow
      jc="space-between"
      ai="center"
      style={{
        padding: 5,
      }}
    >
      <PrimaryText
        size={20}
        align="left"
        style={{
          flex: 1,
        }}
      >
        Danh sách bàn
      </PrimaryText>      
    </ViewRow>);

  renderEmptySection = () => {
    if (!this.props.restaurantList || this.props.restaurantList.length === 0) {
      return (
        <View>
          {this.renderHeader()}
          <View
            style={{
              backgroundColor: '#fdfdfd',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              flexDirection: 'column',
            }}
          > 
            <PrimaryText>
              No item ...
            </PrimaryText>
          </View>
        </View>
      );
    }
    return null;
  };

  renderRestaurantSection = () => {
    return (
      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row'
        }}
      >
      {(this.props.restaurantList && this.props.restaurantList.length > 0)
        ?
          <FlatList
            data={this.props.restaurantList}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            ListHeaderComponent={this.renderHeader}
            renderItem={this.renderRestaurantList}
            keyExtractor={item => item._id}
          />
        : this.renderEmptySection()}
        </View>    
    )
  };


  renderRestaurantList = ({ item: restaurant }) => {
    if (restaurant) {
      return (
        <RestaurantItem
          restaurant={restaurant}
          onPress={() => Actions.restaurantScreen({
            title: startCase(`Bàn ${restaurant._id}`),
            backTitle: 'Back',
            rightTitle: 'Sign Out',
            onRight: () => this.handleSignOut(),
            restaurant,
          })}
        />
      );
    }
    return null;
  };

  render() {
    return (
      this.renderRestaurantSection()
    );
  }
}

RestaurantList.defaultProps = { 
};


RestaurantList.propTypes = {
  restaurantList: PropTypes.array.isRequired,
};

export default RestaurantList;

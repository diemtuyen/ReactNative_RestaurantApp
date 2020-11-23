/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FlatList, ScrollView } from 'react-native';

import AppBase from '../base_components/AppBase';
import { fetchRestaurant } from '../../src/actions/index';
import FoodItem from '../components/FoodItem';
import { updateCartItems } from '../../src/actions/cart';
import SignOutButton from '../components/RightHeaderButtons';

class RestaurantInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <SignOutButton />,
  });

  componentDidMount() {
    this.props.fetchRestaurant();
  }

  renderFoodList = (foods) => (
    <FlatList
      data={foods}
      bounces={false}
      keyExtractor={item => item._id}
      renderItem={this.renderFoodItem}
    />
  );

  renderFoodItem = ({ item }) => {
    if (item) {
      return (
        <FoodItem
          food={item}
          onPress={(amount) => this.props.updateCartItems(item, amount, this.props.table._id)}
        />
      );
    }
    return null;
  };

  render() {
    const { foodList } = this.props;

    return (
      <AppBase
        style={{
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        <ScrollView>
          {this.renderFoodList(foodList)}
        </ScrollView>
      </AppBase>
    );
  }
}

RestaurantInfoScreen.defaultProps = {};

RestaurantInfoScreen.propTypes = {
  fetchRestaurant: PropTypes.func.isRequired,
  updateCartItems: PropTypes.func.isRequired,
};

function initMapStateToProps(state) {
  return {
    restaurantList: state.restaurant.fullList,
    foodList: state.restaurant.foodList
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRestaurant,
    updateCartItems,
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(RestaurantInfoScreen);

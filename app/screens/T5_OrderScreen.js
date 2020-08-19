/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';

import SignOutButton from '../components/RightHeaderButtons';
import AppBase from '../base_components/AppBase';
import PrimaryText from '../base_components/PrimaryText';
// import RestaurantList from '../components/RestaurantList';
import RestaurantList from '../components/T5_RestaurantList';
import { fetchRestaurant, fetchRestaurantByType } from '../../src/actions/index';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <PrimaryText>Restaurant App</PrimaryText>,
    headerRight: <SignOutButton />,
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { restaurantList } = this.props;
    if (!restaurantList || restaurantList.length === 0) {
      this.props.fetchRestaurant();
    }
  }


  render() {
    return (
      <AppBase style={{
        alignItems: 'stretch',
        backgroundColor: '#fff',
      }}
      >        
        <ScrollView>
          <RestaurantList
            restaurantList={this.props.restaurantList}
          />
        </ScrollView>
      </AppBase>
    );
  }
}

HomeScreen.defaultProps = {
  restaurantList: [],
};

HomeScreen.propTypes = {
  fetchRestaurant: PropTypes.func.isRequired,
  fetchRestaurantByType: PropTypes.func.isRequired,
  // fetchCartItems: PropTypes.func.isRequired,
  restaurantList: PropTypes.array,
};

function initMapStateToProps(state) {
  return {
    restaurantList: state.restaurant.fullList,
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRestaurant,
    fetchRestaurantByType,
    // fetchCartItems,
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(HomeScreen);

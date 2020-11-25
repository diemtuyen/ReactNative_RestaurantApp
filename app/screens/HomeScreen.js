/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { ScrollView } from 'react-native';
import SignOutButton from '../components/RightHeaderButtons';
import AppBase from '../base_components/AppBase';
import PrimaryText from '../base_components/PrimaryText';
import TableList from '../components/TableList';
import { fetchCuisineTypes, fetchRestaurant, fetchRestaurantByType } from '../../src/actions/index';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <PrimaryText>Restaurant App</PrimaryText>,
    headerRight: <SignOutButton />,
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { restaurantList, cuisineTypes } = this.props;
    if (!restaurantList || restaurantList.length === 0) {
      this.props.fetchRestaurant();
    }

    if (!cuisineTypes || cuisineTypes.length === 0) {
      this.props.fetchCuisineTypes();
    }
  }

  handleFilter = (type) => {
    if (type !== null) {
      this.props.fetchRestaurantByType(type);
    } else {
      this.props.fetchRestaurant();
    }
  };

  render() {

    const tableList = [
      {_id: 1, name: 'Bàn 1', status: 'free', statusName: 'Order'},
      {_id: 2, name: 'Bàn 2', status: 'serve', statusName: 'Served'},
      {_id: 3, name: 'Bàn 3', status: 'bill', statusName: 'Billing'},
      {_id: 4, name: 'Bàn 4', status: 'free', statusName: 'Order'},
      {_id: 5, name: 'Bàn 5', status: 'free', statusName: 'Order'},
      {_id: 6, name: 'Bàn 6', status: 'free', statusName: 'Order'}
    ]

    return (
      <AppBase style={{
        alignItems: 'stretch',
        backgroundColor: '#fff',
      }}
      >  
        <ScrollView>
          <TableList
            tableList={tableList}
            foodList={this.props.foodList}
          />
        </ScrollView>
      </AppBase>
    );
  }
}

HomeScreen.defaultProps = {
  restaurantList: [],
  cuisineTypes: [],
};

HomeScreen.propTypes = {
  fetchRestaurant: PropTypes.func.isRequired,
  fetchRestaurantByType: PropTypes.func.isRequired,
  fetchCuisineTypes: PropTypes.func.isRequired,
  restaurantList: PropTypes.array,
  cuisineTypes: PropTypes.array,
};

function initMapStateToProps(state) {
  return {
    cuisineTypes: state.food.cuisineTypes,
    restaurantList: state.restaurant.fullList,
    foodList: state.restaurant.foodList
  };
}

function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRestaurant,
    fetchRestaurantByType,
    fetchCuisineTypes,
  }, dispatch);
}

export default connect(initMapStateToProps, initMapDispatchToProps)(HomeScreen);

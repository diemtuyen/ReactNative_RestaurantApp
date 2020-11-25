/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TableItem from './TableItem';
import Assets from '../../src/constants/assets';
import PrimaryText from '../base_components/PrimaryText';
import RippleIcon from '../base_components/RippleIcon';
import BR from '../base_components/BR';

class TableList extends Component {
  handleFilter = (type) => {
    this.props.handleFilter(type);
  };

  renderTableSection = () => (
    <FlatList
      data={this.props.tableList}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      bounces={false}
      renderItem={this.renderTableList}
      keyExtractor={item => item._id}
    />
  );

  renderTableList = ({ item: table }) => {
    if (table) {
      return (
        <TableItem
          table={table}
          onPress={() => Actions.restaurantScreen({
            title: table.name,
            backTitle: 'Back',
            rightTitle: 'Sign Out',
            onRight: () => this.handleSignOut(),
            table,
          })}
        />
      );
    }
    return null;
  };

  render() {
    return (
      this.renderTableSection()
    );
  }
}

TableList.defaultProps = {
  handleFilter: () => {
  },
  onFilterIconPress: () => {
  },
  hideFilter: false,
};


TableList.propTypes = {
  hideFilter: PropTypes.bool,
  tableList: PropTypes.array.isRequired,
  handleFilter: PropTypes.func,
  onFilterIconPress: PropTypes.func,
};

export default TableList;

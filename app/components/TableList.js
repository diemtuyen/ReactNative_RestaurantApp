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

 
  renderEmptySection = () => {
    if (!this.props.tableList || this.props.tableList.length === 0) {
      return (
        <View>
          <View
            style={{
              backgroundColor: '#fdfdfd',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              flexDirection: 'column',
            }}
          >
            <Image
              source={Assets.Images.banana}
              style={{
                width: 150,
                height: 150,
              }}
            />
            <BR />
            <PrimaryText>
              {'We couldn\'t find anything.'}
            </PrimaryText>
            <BR />
            <PrimaryText>
              Please try again...
            </PrimaryText>
          </View>
        </View>
      );
    }
    return null;
  };

  renderTableSection = () => (
    (this.props.tableList && this.props.tableList.length > 0)
      ?
        <FlatList
          data={this.props.tableList}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          renderItem={this.renderTableList}
          keyExtractor={item => item._id}
        />
      : this.renderEmptySection()
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

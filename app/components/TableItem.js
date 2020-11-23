/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import PrimaryText from '../base_components/PrimaryText';
import SecondaryText from '../base_components/SecondaryText';

const TableItem = ({ table, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.6}
  >
    <View
      key={table._id}
      style={{
        flex: 1/2,
        elevation: 3,
        minHeight: 100,
        backgroundColor: `${table.status === 'free' ? '#fff' : table.status === 'serve' ? '#17a2b8' : '#ffc107'}`,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        margin: 15,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
      }}
    > 
      <PrimaryText size={20} align="center" style={{ marginBottom: 0 }}>
        {table.name}
      </PrimaryText>
      <SecondaryText size={20} align="center" >
        {table.statusName}
      </SecondaryText>
    </View>
  </TouchableOpacity>
);

TableItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  table: PropTypes.object.isRequired,
};


export default TableItem;

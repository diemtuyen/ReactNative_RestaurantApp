/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { FlatList, Image, View } from 'react-native';

import startCase from 'lodash/startCase';
import { Actions } from 'react-native-router-flux';
import MenuItem from './MenuItem';
import ViewRow from '../base_components/ViewRow';
import PrimaryText from '../base_components/PrimaryText';

class MenuList extends Component {
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
        Danh sách món ăn
      </PrimaryText>      
    </ViewRow>);

  renderEmptySection = () => {
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
            No item...
          </PrimaryText>
        </View>
      </View>
    );
  };

  renderMenuSection = () => {
    const menuList = [
      {_id:'0', name: 'Bún'},
      {_id:'1', name: 'Hủ tíu'},
      {_id:'2', name: 'Hủ tíu mì'},
      {_id:'3', name: 'Mì'},
      {_id:'4', name: 'Miến'},
      {_id:'5', name: 'Bún khô'},
      {_id:'6', name: 'Hủ tíu khô'},
      {_id:'7', name: 'Mì khô'}]

    return (
      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row'
        }}
      >
      {(menuList && menuList.length > 0)
        ?
          <FlatList
            data={menuList}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            ListHeaderComponent={this.renderHeader}
            renderItem={this.renderMenuList}
            keyExtractor={item => item._id}
          />
        : this.renderEmptySection()}
        </View>    
    )
  };


  renderMenuList = ({ item: menu }) => {
    if (menu) {
      return (
        <MenuItem
          menu={menu}
          // onPress={() => Actions.menuFoodScreen({
          //   title: startCase(menu.name),
          //   backTitle: 'Back',
          //   rightTitle: 'Sign Out',
          //   onRight: () => this.handleSignOut(),
          //   menu,
          // })}
        />
      );
    }
    return null;
  };

  render() {
    return (
      this.renderMenuSection()
    );
  }
}

MenuList.defaultProps = { 
};


MenuList.propTypes = {
  
};

export default MenuList;

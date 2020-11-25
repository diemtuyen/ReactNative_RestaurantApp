import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PrimaryText from '../base_components/PrimaryText';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authLogout } from '../../src/actions/index';
import AppBase from '../base_components/AppBase';

class SideDrawer extends Component {
  render() {
    return (
      <AppBase
        style={{
          paddingTop: 40,
        }}
      >
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>Cài đặt</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>Thống kê</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.authLogout();
          Actions.reset('loginScreen');
        }}>
          <Text style={{ fontSize: 18 }}>Sign out</Text>
        </TouchableOpacity>
      </AppBase>
    );
  }
}


function initMapDispatchToProps(dispatch) {
  return bindActionCreators({
    authLogout,
  }, dispatch);
}

export default connect(null, initMapDispatchToProps)(SideDrawer);

import React, { Component } from 'react';
import { Container, Header, Icon, Tab, Tabs, TabHeading, Text } from 'native-base';
import Orders from './T5_OrderScreen';
import Waitings from './T5_WaitingScreen';
import Billings from './T5_BillingScreen';
export default class T5_HomeScreen extends Component {
  render() {
    return (
      <Container>
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="call" /><Text>Orders</Text></TabHeading>}>
            <Orders />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="alarm" /><Text>Waitings</Text></TabHeading>}>
            <Waitings />
          </Tab>
          <Tab heading={ <TabHeading><Icon name="logo-usd" /><Text>Billings</Text></TabHeading>}>
            <Billings />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
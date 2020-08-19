import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
import { TouchableOpacity, View } from 'react-native';
import ViewRow from '../base_components/ViewRow';
import SecondaryText from '../base_components/SecondaryText';

export default class MultiChecklist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { items, key, title } = this.props
    // return (
    //   <Content>                
    //     {
    //       items.map((item) => {
    //         return (
    //           <ListItem key={item.id}>
    //               <CheckBox checked={false}/>
    //               <Body>
    //               <Text>{item.name}</Text>
    //               </Body>
    //         </ListItem>
    //         );
    //       })
    //     }     

    //   </Content>
    // );
    return (
      <View
        key={key}
        style={{
          elevation: 3,
          backgroundColor: '#fff',
          marginTop: 10,
          borderRadius: 5,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
      >
        <SecondaryText size={16} align="left" style={{ marginBottom: 5 }}>
          {title}
        </SecondaryText>
        <Content>
          {
            items.map((item) => {
              return (
                <ListItem key={item.id}>
                  <CheckBox checked={false} />
                  <Body>
                    <Text>{item.name}</Text>
                  </Body>
                </ListItem>
              );
            })
          }
        </Content>
      </View>
    );
  }
}
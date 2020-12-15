import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { fetchOrders } from '../../src/actions';
import colors from '../../src/constants/colors';
import ViewRow from '../base_components/ViewRow';
import Item from '../components/Checkout/Item';
import PrimaryText from '../base_components/PrimaryText';
import FlatButton from '../base_components/FlatButton';
import { deleteCartItem, updateCartItemQty } from '../../src/actions/cart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: '1%',
    margin: '1%',
    elevation: 2,
    backgroundColor: colors.white,
  },
  textNote: {
    color: colors.primaryColor,
    borderColor: 'grey',
    borderWidth: 1
  },
  divider: {
    margin: '1%',
  },
  heading: {
    color: colors.primaryColor,
    fontSize: 16,
  },
  item: {
    color: colors.blue,
    fontSize: 16,
  },
});

class OrdersList extends React.Component {
  componentWillMount() {
    this.props.fetchOrders();
  }
  mapItems = items => {
    console.log('ldt mapItems ', this.props.ordersList)
    return (
      items.map(item => (
        <View>
          <Text>{`ItemId: ${item.name}`}</Text>
          <Text>{`Price: ${item.price}`}</Text>
          <Text>{`Amount: ${item.quantity}`}</Text>
        </View>
      ))
    )
  }
  
  renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <View style={styles.divider}>
        <Text style={styles.heading}>Order Id</Text>
        <Text>{item._id}</Text>
      </View>
      <View style={styles.divider}>
        <Text style={styles.heading}>Table</Text>
        <Text>{item.table}</Text>
      </View>
      <View style={styles.divider}>
        <Text style={styles.heading}>Total Price:</Text>
        <Text>{item.total}</Text>
      </View>
      <View style={styles.divider}>
        <Text style={styles.item}>Items ordered</Text>
        {item.items.map(this.mapItems)}
      </View>
    </View>
  )

  handleItemValueChange = (item, qty) => {
    if (qty === 0) {
      this.props.deleteCartItem(item._id);
    } else {
      this.props.updateCartItemQty(item._id, qty);
    }
  };

  _renderItem = ({ item }) => {
    console.log('ldt _renderItem ', item)
    return (
      <Item
      key={item._id}
      name={item.food.name}
      price={`${item.price * item.qty}`}
      qty={item.qty}
      onChange={qty => this.handleItemValueChange(item, qty)}
    />
    )    
  };

  renderCartItems = (cartData) => {
    console.log('ldt renderCartItems ', cartData)
    if (cartData.item.length > 0) {
      return (
        <FlatList
          style={{
            elevation: 2,
            borderWidth: 1,
            borderColor: '#fcfcfc',
          }}
          data={cartData}
          renderItem={this._renderItem}
          keyExtractor={item => item._id}
        />
      );
    }

    return (
      <ViewRow>
        <PrimaryText>
          Your Cart is empty.
        </PrimaryText>
      </ViewRow>
    );
  };

  renderDetailOrder = (item) => {
    console.log('ldt renderDetailOrder ', item)
    return (
      <Item
      key={item._id}
      name={item.name}
      // price={`${item.price * item.quantity}`}
      qty={item.quantity}
      onChange={qty => this.handleItemValueChange(item, qty)}
    />
    )    
  };

  renderOrderItem = (order) => {
    console.log('ldt renderOrderItem ', order)
    return (
      <View>
        <PrimaryText>
          Order #{order.item._id} for table {order.item.table} - $ {order.item.total}
        </PrimaryText>
        {order.item.items[0].map(this.renderDetailOrder)}
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
            backgroundColor: 'white'
          }}>
          <FlatButton
            key="cancel"
            title="Hủy"
            // onPress={onPress(this.state.amount)}
          />
          <FlatButton
            key="confirm"
            title="Xác nhận"
            // onPress={onPress(this.state.amount)}
          />
        </View>
      </View>
    )
  };

  render() {
    if (this.props.ordersList === null) {
      return (<Text>Nothing found</Text>);
    }
    console.log('ldt ordersList ', this.props.ordersList)
    return (
      <View>
        <FlatList
          data={this.props.ordersList ? this.props.ordersList.items: []}
          // renderItem={this.renderItem}
          renderItem={this.renderOrderItem}
        />
        {/* {this.renderCartItems(cartData)} */}
      </View>
    );
  }
}

OrdersList.propTypes = {
  ordersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchOrders: PropTypes.func.isRequired,
};

const mapStateToProps = ({ orders }) => ({ ordersList: orders.ordersList });

export default connect(mapStateToProps, { fetchOrders, deleteCartItem,  updateCartItemQty, })(OrdersList);

const initialState = {
  ordersList: [],
  ordersListError: null,
  createdOrder: null,
  createdOrderError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_ORDERS_SUCCESS':
      return {
        ordersList: payload,
        ordersListError: null,
      };
    case 'FETCH_ORDERS_ERROR':
      return {
        // ordersList: null,
        // ordersListError: payload,
        ordersList: {
          items: [
            {_id: 1, table: 1, total: 112, items: [
              [
                {id: 1, name: 'Bún xương', price: 28, quantity: 2}, 
                {id: 2, name: 'Bún tái', price: 28, quantity: 1}]
              ]
            },
            {_id: 2, table: 2, total: 84, items: [
              [
                {id: 1, name: 'Bún thập cẩm', price: 28, quantity: 1}, 
                {id: 2, name: 'Bún tái', price: 28, quantity: 1}]
              ]
            }
          ]
        },
        ordersListError: null,
      };
    case 'CREATE_ORDER_SUCCESS':
      return {
        createdOrder: payload,
        createdOrderError: null,
      };
    case 'CREATE_ORDER_ERROR':
    const orders = payload
      return {
        // createdOrder: null,
        // createdOrder: { username: 'it1', totalCost: 180, _id: 1},
        createdOrder: payload,
        ordersList: orders,
        // createdOrderError: payload,
        createdOrderError: null,
      };
    case 'CANCEL_ORDER':
      return {
        createdOrder: null,
        createdOrderError: null,
      };
    default:
      return state;
  }
};

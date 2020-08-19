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
          orders: [
            {_id: 1, totalCost: 100, items: [
              [
                {id: 10, price: 120}, 
                {id: 15, price: 150}]
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
      return {
        // createdOrder: null,
        createdOrder: { username: 'it1', totalCost: 180, _id: 1},
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

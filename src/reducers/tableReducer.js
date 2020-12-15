const initialState = {
  tableList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {    
    case 'FETCH_TABLE_SUCCESS':
    case 'FETCH_TABLE_TYPE_SUCCESS':
      return {
        ...state,
        tableList: payload
      };    
    case 'FETCH_TABLE_ERROR':
      return {
        ...state,
        tableList: [
          {_id: 1, name: 'Bàn 1', status: 'free', statusName: 'Order'},
          {_id: 2, name: 'Bàn 2', status: 'serve', statusName: 'Served'},
          {_id: 3, name: 'Bàn 3', status: 'bill', statusName: 'Billing'},
          {_id: 4, name: 'Bàn 4', status: 'free', statusName: 'Order'},
          {_id: 5, name: 'Bàn 5', status: 'free', statusName: 'Order'},
          {_id: 6, name: 'Bàn 6', status: 'free', statusName: 'Order'}
        ],
      };
    default:
      return state;
  }
};

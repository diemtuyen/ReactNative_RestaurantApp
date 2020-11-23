const initialState = {
  fullList: [],
  foodList: [],
  restaurantInfo: null,
  error: null,
  cuisineRestaurants: [],
  cuisineRestaurantError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {    
    case 'FETCH_RESTAURANT_SUCCESS':
    case 'FETCH_RESTAURANT_TYPE_SUCCESS':
      return {
        ...state,
        fullList: payload,
        foodList: payload,
        restaurantInfo: null,
        error: null,
      };
    case 'FETCH_CUISINE_RESTAURANT_SUCCESS':
      return {
        ...state,
        cuisineRestaurants: payload,
        error: null,
        cuisineRestaurantError: null,
      };
    case 'FETCH_RESTAURANT_INFO_SUCCESS':
      return {
        ...state,
        error: null,
        restaurantInfo: payload,
      };
    case 'FETCH_CUISINE_RESTAURANT_ERROR':
      return {
        ...state,
        cuisineRestaurantError: payload,
      };
    case 'FETCH_RESTAURANT_ERROR':
    case 'FETCH_RESTAURANT_TYPE_ERROR':
      return {
        ...state,
        foodList: [
          {_id: 1, food: {_id: 1, name: 'Hủ tíu thập cẩm', type: 'Tô lớn'}, price: 28 },
          {_id: 2, food: {_id: 2, name: 'Hủ tíu xương', type: 'Tô lớn'}, price: 28 }, 
          {_id: 3, food: {_id: 3, name: 'Hủ tíu tái', type: 'Tô lớn'}, price: 28 },
          {_id: 4, food: {_id: 4, name: 'Hủ tíu khô thịt nướng', type: 'Tô lớn'}, price: 28 },
          {_id: 5, food: {_id: 5, name: 'Hủ tíu khô tái', type: 'Tô lớn'}, price: 28 },
          {_id: 6, food: {_id: 6, name: 'Hủ tíu khô xương', type: 'Tô lớn'}, price: 28 }
        ],
        fullList: [
          {_id:'0', name: 'Bàn số ...', details: 'Danh sách món ăn',
            foods: [              
              {_id: 1, food: {_id: 1, name: 'Bún thập cẩm', type: 'Tô lớn'}, price: 28 }, 
              {_id: 2, food: {_id: 2, name: 'Bún xương', type: 'Tô lớn'}, price: 28 }, 
              {_id: 3, food: {_id: 3, name: 'Bún tái', type: 'Tô lớn'}, price: 28 },
              {_id: 4, food: {_id: 4, name: 'Bún mọc', type: 'Tô lớn'}, price: 28 },
              {_id: 5, food: {_id: 5, name: 'Bún thịt nướng', type: 'Tô lớn'}, price: 28 }, 
            ]
          },
          {_id:'2', name: 'Hủ tiếu', details: 'Danh sách hủ tíu',
            foods: [
              {_id: 1, food: {_id: 1, name: 'Hủ tíu thập cẩm', type: 'Tô lớn'}, price: 28 },
              {_id: 2, food: {_id: 2, name: 'Hủ tíu xương', type: 'Tô lớn'}, price: 28 }, 
              {_id: 3, food: {_id: 3, name: 'Hủ tíu tái', type: 'Tô lớn'}, price: 28 },
              {_id: 4, food: {_id: 4, name: 'Hủ tíu khô thịt nướng', type: 'Tô lớn'}, price: 28 },
              {_id: 5, food: {_id: 5, name: 'Hủ tíu khô tái', type: 'Tô lớn'}, price: 28 },
              {_id: 6, food: {_id: 6, name: 'Hủ tíu khô xương', type: 'Tô lớn'}, price: 28 }
            ]
          }
        ],
        restaurantInfo: null,
        error: null,
        // error: payload,
      };
    default:
      return state;
  }
};

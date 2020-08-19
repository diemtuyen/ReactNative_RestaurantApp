const initialState = {
  cuisineTypes: [],
  cuisineTypesError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_CUISINE_TYPE_SUCCESS':
      return {
        ...state,
        cuisineTypes: payload,
        cuisineTypesError: null,
      };
    case 'FETCH_CUISINE_TYPE_ERROR':
      return {
        ...state,
        cuisineTypes: ['cuisine1', 'cuisine2', 'cuisine3'],
        cuisineTypesError: null,
        // cuisineTypesError: payload,
      };
    default:
      return state;
  }
};

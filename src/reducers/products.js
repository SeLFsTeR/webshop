const initialState = [
  { id: 1, name: "Fresh Bread", price: 2.2 },
  { id: 2, name: "Apples", price: 1.2 },
  { id: 3, name: "Assorted Nuts", price: 4.5 },
  { id: 4, name: "Cheese", price: 5.5 },
  { id: 5, name: "Roasted Ham", price: 3.2 },
  { id: 6, name: "Berries", price: 1.75 },
  { id: 7, name: "Chocolate", price: 3.25 },
  { id: 8, name: "Steak", price: 6.25 },
  { id: 9, name: "Mushrooms", price: 1.2 },
  { id: 10, name: "Cake", price: 1.5 },
  { id: 11, name: "Carrotcake", price: 1.7 },
  { id: 12, name: "Yoghurt", price: 1.0 }
];

const reducer = (state = [...initialState], action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default reducer;

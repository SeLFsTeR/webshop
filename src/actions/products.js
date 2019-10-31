export const getProducts = () => dispatch => {
  fetch("http://localhost:4000/Products")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "test"
      });
    });
};

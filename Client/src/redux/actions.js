import { GET_PRODUCTS,GET_TYPEPRODUCTS,POST_FILTERPRODCTS,POST_PRODUCTSNAME } from "./action-types.js";
import axios from "axios";

export const getProducts = (idBranch) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post("http://localhost:3001/products", {
        id: idBranch,
      });

      return dispatch({
        type: GET_PRODUCTS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const filterTemperamentAction = (condition,idBranch) =>{
  return async (dispatch) =>{
    try {
      const response = await axios.post(`http://localhost:3001/products/?${condition}`,{
        id: idBranch,
      });
      return dispatch({
        type: POST_FILTERPRODCTS,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: POST_FILTERPRODCTS,
        payload: error.message
      })
    }
  }
} 

export const getTypeProducts  = () =>{
  return async (dispatch) =>{
    try {
      const response = await axios.get('http://localhost:3001/catalogos?tipo_catalogo=3890c641-32e7-49cf-864e-de62c04efb1b');
      return dispatch({
        type: GET_TYPEPRODUCTS,
        payload: response.data
      })
      
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const postProductName = (name,idBranch) =>{
  return async (dispatch) =>{
    try {
      const response = await axios.post(`http://localhost:3001/products/?name=${name}`,{
        id: idBranch,
      });
      return dispatch({
        type: POST_PRODUCTSNAME,
        payload: response.data
      })
    } catch (error) {
      return dispatch({
        type: POST_FILTERPRODCTS,
        payload: error.message
      })
    }
  }
}


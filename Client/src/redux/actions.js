import {
  GET_PRODUCTS,
  POST_NEWPRODUCT,
  GET_TYPEPRODUCTS,
  GET_SUCURSAL,
} from "./action-types.js";
import axios from "axios";

export const getProducts = (idBranch, conditions) => {
  return async function (dispatch) {
    try {
      const queryParams = new URLSearchParams(conditions).toString();
      const url = conditions
        ? `http://localhost:3001/products?${queryParams}`
        : "http://localhost:3001/products";
      const { data } = await axios.post(url, { id: idBranch });

      return dispatch({
        type: GET_PRODUCTS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTypeProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/catalogos?tipo_catalogo=3890c641-32e7-49cf-864e-de62c04efb1b"
      );
      return dispatch({
        type: GET_TYPEPRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getSucursales = (idBranch, conditions) => {
  return async function (dispatch) {
    try {
      const queryParams = new URLSearchParams(conditions).toString();
      const url = conditions
        ? `http://localhost:3001/sucursales?${queryParams}`
        : "http://localhost:3001/sucursales";
      const { data } = await axios.post(url, { id: idBranch });

      return dispatch({
        type: GET_SUCURSAL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postNewProduct = (input) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/products/newproduct",
        input
      );
      return dispatch({
        type: POST_NEWPRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

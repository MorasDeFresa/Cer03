import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import ProdCart from "../ProdCart/ProdCart";

import styles from "./Cart.module.css";
import { removeCart } from "../../redux/actions";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const Cart = () => {
  const dispatch = useDispatch();
  const products = cookies.get("inCart");
  const cartRemove = cookies.get("cartRemove");
  const cookieQuantity = cookies.get("quantity");
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState({
    id: "",
    type: "",
    before: 0,
    detect: false,
  });

  useEffect(() => {}, [quantity?.id]);

  useEffect(() => {
    products.forEach((product) => {
      if (!quantity[product.PRODUCTO.id_producto]) {
        setQuantity({
          ...quantity,
          [product.PRODUCTO.id_producto]: {
            value: Math.floor(product.PRODUCTO.valor_venta),
            quantity: product.stock ? 1 : 0,
          },
          id: product.PRODUCTO.id_producto,
          type: "add",
          before: 0,
          detect: quantity.detect ? false : true,
        });
      }
    });
  }, [products]);

  useEffect(() => {
    console.log(cookieQuantity, quantity);
    for (let key in quantity) {
      if (key === quantity.id) {
        if (quantity[key].quantity && Number.isInteger(quantity.before)) {
          if (quantity.type === "add") {
            setTotalPrice(
              totalPrice +
                quantity[key].value * (quantity[key].quantity - quantity.before)
            );
          } else if (quantity.type === "remove") {
            setTotalPrice(
              totalPrice -
                quantity[key].value * (quantity[key].quantity - quantity.before)
            );
          }
        }
      }
    }
  }, [quantity.detect]);

  const quantityInputHandler = (event) => {
    if (event.target.value && quantity[event.target.name].quantity !== 0) {
      if (quantity[event.target.name].quantity < event.target.value) {
        setQuantity({ ...quantity, type: "add" });
      } else if (quantity[event.target.name].quantity > event.target.value) {
        setQuantity({ ...quantity, type: "remove" });
      }

      setQuantity({
        ...quantity,
        before: quantity[event.target.name].quantity,
        [event.target.name]: {
          value: quantity[event.target.name].value,
          quantity: parseInt(event.target.value),
        },
        id: event.target.name,
        detect: quantity.detect ? false : true,
      });
    }
  };

  const deleteProdCart = (event) => {
    dispatch(removeCart(event.target.name));
  };

  useEffect(() => {
    if (cartRemove.id) {
      setTotalPrice(
        totalPrice -
          quantity[cartRemove.id].value * quantity[cartRemove.id].quantity
      );
      delete quantity[cartRemove.id];
    }
  }, [cartRemove.detect]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Productos a Comprar</h2>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.cards}>
        {products?.map((product) => {
          return (
            <ProdCart
              key={product.PRODUCTO.id_producto}
              product={product}
              quantity={quantity}
              quantityInputHandler={quantityInputHandler}
              deleteProdCart={deleteProdCart}
            />
          );
        })}
      </div>
      <div>
        <p>Precio Total: {totalPrice}</p>
        <button
          className={styles.comprar}
          onClick={() => console.log("Elija el metodo de pago")}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Cart;

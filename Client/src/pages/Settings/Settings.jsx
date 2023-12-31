import { useEffect, useState } from "react";
import axios from "axios";
import Style from "./Settings.module.css";
import FormVendedor from "../../components/FormVendedor/FormVendedor";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Settings = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const { idBranch } = cookies.get("auth");
  const navigate = useNavigate();
  const { review } = useSelector((state) => state);

  const navigateToPapelera = () => {
    navigate("/papelera");
  };
  const navigateToDeleteProductos = () => {
    navigate("/deleteProduct");
  };
  const navigateToFormVendedor = () => {
    navigate("/newSeller");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const navigateToFormSucursal = () => {
    navigate("/newSucursal");
  };

  const navigateToManageStockInventory = () => {
    navigate("/manageInventory");
  };

  const navigateToEditReview = () => {
    navigate("/edit-review");
  };
  // useEffect(() => {}, []);

  return (
    <div className={Style.contenido}>
      <div className={Style.divider}>
        <div className={Style.usableHolder}>
          <h2>Vendedores</h2>
          <button className={Style.Btn} onClick={navigateToFormVendedor}>
            Vendedores
          </button>
        </div>
        <img
          src="https://static.thenounproject.com/png/883982-200.png"
          alt=""
          className={Style.img}
        />
      </div>
      <div className={Style.divider}>
        <div className={Style.usableHolder}>
          <h2>Productos</h2>
          <button className={Style.Btn} onClick={navigateToDeleteProductos}>
            Eliminar
          </button>
          <button className={Style.Btn} onClick={navigateToPapelera}>
            Restaurar
          </button>
          <button
            className={Style.Btn}
            onClick={navigateToManageStockInventory}
          >
            Actualizar Inventario
          </button>
        </div>
        <img
          src="https://img.freepik.com/vector-gratis/conjunto-iconos-planos-decorativos-supermercado_1284-9106.jpg?q=10&h=200"
          alt=""
          className={Style.img}
        />
      </div>
      <div className={Style.divider}>
        <div className={Style.usableHolder}>
          <h2>Sucursales</h2>
          <button className={Style.Btn} onClick={navigateToFormSucursal}>
            Sucursales
          </button>
        </div>
        <img
          src="https://i.blogs.es/b68133/4urb5gipmfhw3ku55p7hkkrpue/200_200.jpg"
          alt=""
          className={Style.img}
        />
      </div>
      <div className={Style.divider}>
        <div className={Style.usableHolder}>
          <h2>Informacion</h2>
          <button className={Style.Btn} onClick={navigateToDashboard}>
            Informacion
          </button>
          {review && (
            <button className={Style.Btn} onClick={navigateToEditReview}>
              Editar Review
            </button>
          )}
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/004/627/986/small/bar-chart-icon-free-vector.jpg"
          alt=""
          className={Style.img}
        />
      </div>
    </div>
  );
};

export default Settings;

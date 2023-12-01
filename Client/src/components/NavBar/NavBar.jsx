/* eslint-disable react/prop-types */
import { NavLink, useMatch, useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlinePointOfSale } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import style from "./SideBar.module.css";
import logoCer03 from "../../components/image/logocer03.jpeg";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/actions";

const SidebarLink = ({ to, icon, text, Onclick }) => {
  const match = useMatch(to);

  return (
    <div className={`${style.linkContainer} ${match ? style.activeLink : ""}`}>
      {Onclick ? (
        <button onClick={Onclick}>
          {icon} {text}
        </button>
      ) : (
        <NavLink to={to} className={style.Links} end>
          <div className={style.linkIcon}>
            <span>
              {icon} {text}
            </span>
          </div>
        </NavLink>
      )}
    </div>
  );
};

const NavBAr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    dispatch(signOut());
  };

  return (
    <div>
      <div className={style.content}>
        <div className={style.logoContent}>
          {/* <TfiAlignJustify /> */}
          <div className={style.imgcontent}>
            <NavLink to="/home" end className={style.logoLink}>
              <img src={logoCer03} alt="Logo" />
            </NavLink>
          </div>
          <h2>Cer03</h2>
        </div>

        <div>
          <SidebarLink
            to="/settings"
            icon={<CiSettings />}
            text="Configuraciones"
          />
          <div className={style.divider}></div>
          <SidebarLink
            to="/home"
            icon={<FaMoneyBillTrendUp />}
            text="Movimientos"
          />
          <SidebarLink
            to="/products"
            icon={<MdProductionQuantityLimits />}
            text="Inventario"
          />
          <SidebarLink
            to="/newProduct"
            icon={<MdOutlineInventory />}
            text="Cargar Producto"
          />
          <div className={style.divider}></div>
          <SidebarLink
            to="/"
            Onclick={handleSignOut}
            icon={<IoIosLogOut />}
            text="Cerrar sesión"
          />
        </div>
        <div className={style.divider}></div>
      </div>
    </div>
  );
};

export default NavBAr;

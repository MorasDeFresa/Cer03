import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments, somethingReview } from "../../redux/actions";
import validations from "./validations";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;
import { useNavigate } from "react-router-dom";

import Style from "./EditReview.module.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const EditReview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { documents, sucursales } = useSelector((state) => state);
  const { idBranch } = cookies.get("auth");

  const [form, setForm] = useState({
    titulo: "",
    puntuacion: "",
    descripcion: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getDocuments());
    (async () => {
      const { data } = await axios.post(`${baseUrl}/review/get`, {
        branch: idBranch,
      });

      setForm({
        titulo: data?.titulo_review,
        puntuacion: data?.score_review,
        descripcion: data?.descripcion_review,
      });
    })();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    // validarCampo(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(somethingReview(idBranch, "edit", form));

      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  const contentSomething = () => {
    if (!form.titulo || !form.puntuacion || !form.descripcion) return true;

    return false;
  };

  const notSubmit = () => {
    if (
      !form.titulo ||
      !form.puntuacion ||
      !form.descripcion ||
      errors.titulo ||
      errors.puntuacion ||
      errors.descripcion
    )
      return true;
  };

  const deleteFields = () => {
    setForm({
      ...form,
      titulo: "",
      puntuacion: "",
      descripcion: "",
    });
  };

  useEffect(() => {
    setErrors(validations(form));
  }, [form]);

  return (
    <form className={Style.formContainer} onSubmit={handleFormSubmit}>
      <h2 className={Style.title}>Edit Review</h2>
      <div className={Style.divider}></div>
      <div className={Style.container}>
        <div className={Style.formSame}>
          <div className={Style.formGroup}>
            <label className={Style.formLabel}>Titulo: </label>
            <input
              type="text"
              className={Style.formInput}
              name="titulo"
              value={form.titulo}
              onChange={handleInputChange}
            />
            {errors.titulo && <p className={Style.errors}>{errors.titulo}</p>}
          </div>

          <div className={Style.formGroup}>
            <label className={Style.formLabel}>Puntuacion: </label>
            <input
              type="number"
              className={Style.puntuacion}
              name="puntuacion"
              value={form.puntuacion}
              onChange={handleInputChange}
              min={1}
              max={5}
            />
            {errors.puntuacion && (
              <p className={Style.errors}>{errors.puntuacion}</p>
            )}
          </div>
        </div>

        <div className={Style.formSame}>
          <div className={Style.formGroup}>
            <p className={Style.formLabel}>Descripcion: </p>
            <textarea
              name="descripcion"
              id="description"
              cols="30"
              rows="10"
              value={form.descripcion}
              onChange={handleInputChange}
              className={Style.formInput}
            ></textarea>
            {errors.descripcion && (
              <p className={Style.errors}>{errors.descripcion}</p>
            )}
          </div>
        </div>

        <div className={Style.buttonHolder}>
          <button className={Style.formSubmit} disabled={notSubmit()}>
            Enviar
          </button>
          <button
            className={Style.deleteButton}
            onClick={deleteFields}
            disabled={contentSomething()}
          >
            Borrar todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditReview;

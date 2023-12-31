const { Router } = require("express");

const {
  getVentasHandler,
  postVentasHandler,
  getVentaDetailHandler,
} = require("../handlers/handlerVentas.js");

routeVentas = Router();

routeVentas.post("/", getVentasHandler);
routeVentas.post("/nueva-venta", postVentasHandler);
routeVentas.get("/:id", getVentaDetailHandler);

module.exports = routeVentas;

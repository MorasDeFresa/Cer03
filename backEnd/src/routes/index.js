const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routeAuth = require("./routeAuth.js");
const routeEmpresa = require("./routeEmpresa.js");
const routeVentas = require("./routeVentas.js");
const routeVendedor = require("./routeVendedor.js");
const productsRouter = require("./productsRouter.js");
const routeSucursales = require("./routeSucursales.js");
const routeCatalogos = require("./routeCatalogo.js");
const routeEmail = require("./routeEmail.js");
const routePaymentGateways = require("./routePaymentGateways.js");
const routeSales = require("./routePaymentSales.js");
const routeReview = require("./routeReview.js");
const routeInfo = require("./routeInfo.js");
const { verifyToken } = require("../middlewares/authJWT.js");
const routeDevelopers = require("./routeDevelopers.js");

const router = Router();

// Configurar los routers
router.use("/auth", routeAuth);
router.use("/empresa", routeEmpresa);
router.use("/vendedor", routeVendedor);
router.use("/ventas", routeVentas);
router.use("/products", productsRouter);
router.use("/sucursales", routeSucursales);
router.use("/catalogos", routeCatalogos);
router.use("/paymentGateways", routePaymentGateways);
router.use("/developers", routeDevelopers);
// router.use("/paymentSales", routeSales);
router.use("/email", routeEmail);
router.use("/review", routeReview);
router.use("/info", routeInfo);

// json chargue bd
// const routeSaveJsonInDB = require("./saveJsonInDBRouter.js");
// router.use("/database", routeSaveJsonInDB);

module.exports = router;

const {
  controllerAllSucursales,
} = require("../controllers/controllerAllSucursales.js");

const getAllSucursales = async (req, res) => {
  try {
    const conditions = req.query;
    const idBranch = req.body;

    const response = await controllerAllSucursales(conditions, idBranch);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllSucursales,
  //   getSucursalesByNameEmpresaHandler,
};

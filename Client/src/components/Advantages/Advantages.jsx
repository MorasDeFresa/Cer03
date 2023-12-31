import React from "react";
import { Rotate } from "react-awesome-reveal";
const Advantages = () => {
  return (
    <React.Fragment>
      <Rotate>
        <div className="flex justify-center items-center p-8 space-x-8">
          {/* Container FREE */}
          <div className="flex-1 p-6 bg-white text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h2 className="text-2xl font-bold mb-4">FREE</h2>
            <p className="text-3xl font-bold mb-4">$0</p>
            <ul className="list-disc ml-2">
              <li className="mb-2">3 SUCURSALES</li>
              <li className="mb-2">2 VENDEDORES x SUCURSAL</li>
              <li className="mb-2">SIN ACCESO A FILTROS</li>
              {/* Agrega más ventajas según sea necesario */}
            </ul>
          </div>

          {/* Container BASIC */}
          <div className="flex-1 p-6 bg-white text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h2 className="text-2xl font-bold mb-4">BASIC</h2>
            <p className="text-3xl font-bold mb-4">$1000</p>
            <ul className="list-disc ml-2">
              <li className="mb-2">6 SUCURSALES</li>
              <li className="mb-2">4 VENDEDORES x SUCURSAL</li>
              <li className="mb-2">CON ACCESO A FILTROS </li>
              {/* Agrega más ventajas según sea necesario */}
            </ul>
          </div>

          {/* Container SUPER */}
          <div className="flex-1 p-6 bg-white text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-center">
            <h2 className="text-2xl font-bold mb-4">PREMIUM</h2>
            <p className="text-3xl font-bold mb-4">$3000</p>
            <ul className="list-disc ml-2">
              <li className="mb-2">SUCURSALES ILIMITADAS</li>
              <li className="mb-2">VENDEDORES ILIMITADOS</li>
              <li className="mb-2">CON ACCESO A FILTROS</li>
              {/* Agrega más ventajas según sea necesario */}
            </ul>
          </div>
        </div>
      </Rotate>
    </React.Fragment>
  );
};

export default Advantages;

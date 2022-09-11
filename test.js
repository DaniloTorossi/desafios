/* Para crear el archivo hay que ingresar un nuevo producto , en la funcion ejecutar estan todos los metodos para ejecutar, descomentar el metodo a probar y agregarle los parametros nesesarios para funcionar y ejecutar node test.js*/
const Contenedor = require("./desafio2.js");
const productos = new Contenedor("productos.txt");
const productoNuevo1 = {
      title: "PC",
      price: 95800,
      thumbnail:
            "https://cdn3.iconfinder.com/data/icons/technology-13/48/tech-color_computer-512.png",
};
const productoNuevo2 = {
      title: "Monitor",
      price: 25000,
      thumbnail:
            "https://cdn2.iconfinder.com/data/icons/flat-set-2/64/flat_set_2-09-512.png",
};
const productoNuevo3 = {
      title: "Mouse",
      price: 2500,
      thumbnail:
            "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/input-mouse-512.png",
};
const productoNuevo4 = {
      title: "Teclado",
      price: 4500,
      thumbnail:
            "https://cdn3.iconfinder.com/data/icons/technology-13/48/tech-color_keyboard-512.png",
};

const ejecutar = async () => {
      /* poner el producto a agregar* en el metodo save */
      await productos.save(productoNuevo3);
      await productos.getAll();
      /*poner la id a buscar , solo numeros  en el metodo getById */
      await productos.getById(2); 
      /*poner la id a eliminar , solo numeros en el metodo deleteById */
      await productos.deleteById(3); 
    await productos.deleteAll(); 
};
ejecutar();
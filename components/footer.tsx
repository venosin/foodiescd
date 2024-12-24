const Footer = () => {
  return (
    <footer className="bg-white py-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-gray-800 font-druk font-bold text-lg">Foodies</div>

          {/* Links */}
          <div className="flex space-x-6 text-gray-600">
            <a href="#encuentranos" className="hover:text-gray-900">
              Conoce nuestras sucursales
            </a>
            <a href="#about" className="hover:text-gray-900">
              Acerca de
            </a>
            <a href="#testimonials" className="hover:text-gray-900">
              ¿Qué hablan de nosotros?
            </a>
            <a href="#contacto" className="hover:text-gray-900">
              Contáctanos
            </a>
          </div>

          {/* Botones de descarga */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-block bg-gray-200 p-2 rounded hover:bg-gray-300"
            ></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

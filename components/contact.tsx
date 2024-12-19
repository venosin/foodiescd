export function Contact() {
  return (
    <section className="py-24 bg-black" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-druk font-bold text-white">
            Cuentanos tu experiencia
          </h2>
          <p className="text-gray-400">
            {" "}
            Don't miss out on our great offers & Receive deals from all our top
            restaurants via e-mail.{" "}
          </p>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
              />
            </div>
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-syneBold font-medium hover:bg-yellow-300 transition-colors"
            >
              Enviar comentarios
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

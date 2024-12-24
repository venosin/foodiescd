"use client"
import React, { useState } from 'react';
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false); // Estado para manejar la vista de éxito

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Limpiar errores al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const url = 'https://api.foodies.elaniin.dev/forms/contact/submissions';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, options);
      if (response.status === 201) {
        setIsSuccess(true); // Cambiar a la vista de éxito
        setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
      } else if (response.status === 422) {
        const errorData = await response.json();
        setErrors(errorData.errors); // Mostrar errores de validación
      } else {
        alert('Hubo un problema con el servidor. Intenta más tarde.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error inesperado. Intenta de nuevo más tarde.');
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/thankyou-desktop.png"
            alt="Gracias por tus comentarios"
            width={200} // Ajusta el tamaño según sea necesario
            height={200}
            className="mx-auto mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-druk font-bold text-white">
            Gracias por tus comentarios
          </h2>
          <p className="text-gray-400 mt-4">
            Don&apos;t miss out on our great offers & Receive deals from all our top restaurants via e-mail.
          </p>
          <button
            onClick={() => setIsSuccess(false)} // Acción para volver
            className="mt-6 inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-syneBold font-medium hover:bg-yellow-300 transition-colors"
          >
            Conoce nuestro menú
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black" id="contacto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-druk font-bold text-white">
            Cuéntanos tu experiencia
          </h2>
          <p className="text-gray-400">
            Don&apos;t miss out on our great offers & Receive deals from all our top restaurants via e-mail.
          </p>
          <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y Apellido"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-transparent border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje (opcional)"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-transparent border ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
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




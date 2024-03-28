import React from "react";
import { Helmet } from "react-helmet-async";

function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="keywords" content="Energías renovables, Inversión en energías limpias, Proyectos sostenibles, Financiamiento verde, Inversión responsable" />
      <meta name="language" content="es" />
      <meta name="author" content="Medusa Energy" />
      <meta name="rating" content="General" />
      <meta name="referrer" content="no-referrer" />
      <base href="https://medusa.earth" />

      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

    </Helmet>
  );
}

export default SEO;

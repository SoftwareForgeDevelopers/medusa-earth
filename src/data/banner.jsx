const banner = [
  {
    title: "Únete al Futuro Energético: Regístrate Hoy",
    description:
      "Construye un futuro más limpio y sostenible. Hazte parte de Medusa Energy para ser parte del cambio hoy.",
    image: "/assets/backgrounds/blue-horizontal-lines.webp",
    button: {
      content: (
        <>
          Únete hoy
          <span>
            <img
              src="/assets/icons/little-arrow-blue.webp"
              alt="arrow-up"
              className="w-5 h-4"
            />
          </span>
        </>
      ),
      styles: "w-[150px] h-[51px] font-w-regular",
    },
    bgGradientClass: "bg-gradient-blue-horizontal-lines",
  },
  {
    label: { text: "Proyectos", white: true },
    title: "Explora Nuestro Futuro Energético",
    description:
      "Transformamos vidas, conectamos comunidades e iluminamos el camino hacia un futuro mejor.",
    image: "/assets/backgrounds/seated-man.webp",
    button: {
      content: "Invierte ahora",
      styles: "w-[150px] h-[51px] font-w-regular",
    },
    bgGradientClass: "bg-gradient-seated-man",
  },
];

export default banner;

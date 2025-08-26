/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark Tema
        darkFirstBgColor: "", // 1. Background Color
        darkSecondBgColor: "", // 2. (Alternatif) Background Color
        darkBorderColor: "", // Border Color
        darkDefaultTextColor: "", // P, Span etiketleri için Text Color
        darkHeaderTextColor: "", // Normal başlıklar için Text Color (h1,h2...)
        darkPTextColor: "", //Paragraflar İçin
        darkImportantTextColor: "", // Mavi ile yazacağımız önemli yazılar veya active textler için text color

        // Light Tema
        lightFirstBgColor: "", // 1. Background Color
        lightSecondBgColor: "", // 2. (Alternatif) Background Color
        lightDefaultTextColor: "", // P, Span etiketleri için Text Color
        lightHeaderTextColor: "", // Normal başlıklar için Text Color (h1,h2...)
        lightPTextColor: "", //Paragraflar İçin
        lightImportantTextColor: "", // Mavi ile yazacağımız önemli yazılar veya active textler için text color

      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};

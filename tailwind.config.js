/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nova: ["proxima-nova", "sans-serif"],
        novawide: ["proxima-nova-extra-wide", "sans-serif"],
        grotesk: ["niveau-grotesk", "sans-serif"],
        grotesksc: ["niveau-grotesk-small-caps", "sans-serif"],
        novwide: ["novecento-sans-wide", "sans-serif"],
        nov: ["novecento-sans", "sans-serif"],
        rigsans: ["rig-sans", "sans-serif"],
      },
      scrollMargin: {
        96: "12rem",
      },
      colors: {
        orange: "#EA9139",
        navy: "#063F5D",
        teal: "#419EBD",
      },
      borderWidth: {
        2: "2px",
      },
      transitionProperty: {
        height: "height",
      },
      container: {
        center: true,
      },

      animation: {
        fade: "fadeIn .5s ease-in-out",
        // fadeout: "fadeOut .5s ease-in-out",
      },

      backgroundImage: {
        swirl: "url('/images/sitebackground.png')",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        // fadeOut: {
        //   from: { opacity: 1 },
        //   to: { opacity: 0 },
        // },
        // fadeDown: {
        //   from: { opacity: 0, transform: translateY(-30px), scale (0.9)},
        //   to: { opacity: 1 },
        // },
      },
    },
  },
  plugins: [],
};

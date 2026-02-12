// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,,}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         machineBlue: "#008BD1",
//         automationTeal: "#6BD825",
//         limeAccent: "#00F8F0",
//         technicalWhite: "#FFFFFF",
//         darkIndustrial: "#0c0f14"
//       },
//       fontFamily: {
//         norwester: ["Norwester", "sans-serif"],
//         cocogoose: ["Cocogoose", "sans-serif"],
//         heavitas: ["Heavitas", "sans-serif"]
//       },
//       boxShadow: {
//         industrial: "0 10px 25px rgba(0,0,0,0.08)"
//       },
//       borderRadius: {
//         industrial: "14px"
//       }
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         machineblue: "#008bd1",
//         automationTeal: "#6BD825",
//         limeAccent: "#00F8F0",
//       },
//       fontFamily: {
//         heavitas: ["Heavitas", "sans-serif"],
//         norwester: ["Norwester", "sans-serif"],
//         cocogoose: ["Cocogoose", "sans-serif"],
//     },
//   },
// },
//   plugins: [],
// }


// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        machineBlue: "#008BD1",
        m9teal: "#6BD825",
        m9accent: "#00F8F0",
      },
      fontFamily: {
         heavitas: ["Heavitas", "sans-serif"],
         norwester: ["Norwester", "sans-serif"],
         cocogoose: ["Cocogoose", "sans-serif"],
     },
    },
  },
  plugins: [],
};

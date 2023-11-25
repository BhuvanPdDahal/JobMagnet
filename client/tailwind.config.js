/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "spacing": {
        "50p": "50%",
        "100p": "100%",
        "show": "calc(100% - 340px)",
        "n50p": "-50%",
        "n5px": "-10px",
        "50px": "50px",
        "100px": "100px",
        "150px": "150px",
        "120px": "120px",
        "350px": "350px",
        "450px": "450px",
      },
      "boxShadow": {
        'normal': '0 3px 6px -1px rgb(0 0 0 / 0.25)',
        'error': '0 3px 4px -1px rgb(0 0 0 / 0.18), 0 2px 4px -2px rgb(0 0 0 / 0.18), 0 -2px 4px -2px rgb(0 0 0 / 0.18)',
      },
      "colors": {
        "primary": "#295ca3",
        "secondary": "#d44f26",
        "textcolor": "#454545",
        "dimblack": "rgba(0, 0, 0, 0.22)",
        "grey": "#ccc",
      },
      transitionProperty: {
        "navtext": "color background-color"
      }
    },
  },
  plugins: [],
}


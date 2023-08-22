const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const BREAKPOINTS = { zero: "0px", ...defaultTheme.screens };

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#FA7436",
      "primary-shadow": "rgba(250, 116, 54, 0.24)",
      shadow: "rgba(0, 0, 0, 0.06)",
      "primary-inverted": "#FFF",
      accent: "rgba(102, 102, 102, 0.08)",
      text: "#222",
      text2: "#444444",
      text3: "#666666",
      secondary1: "#4086F4",
      secondary2: "#FFB60A",
      bg1: "#FEFCFB",
      bg2: "#F7F8FC",
      white: "#FFF",
      black: "#000",
      navdot: "#E5E5E5",
      placeholder: "#999",
    },

    extend: {
      spacing: {
        nav: "5rem",
      },
      screens: BREAKPOINTS,
      boxShadow: {
        button: "0px 8px 16px 0px",
        section: "0px 2px 80px 2px",
        review:
          "0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0.00), 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01), 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
      },
      borderRadius: {
        primary: "0.3125rem",
      },
      keyframes: {
        "btn-up": {
          "0%": { transform: "translateY(10%)", opacity: "0.15" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        show: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "show-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "show-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },

        down: {
          "0%": {
            translate: "-10% -40%",
          },
          "100%": {
            translate: "0% 0%",
          },
        },
        up: {
          "0%": {
            translate: "10% 40%",
          },
          "100%": {
            translate: "0% 0%",
          },
        },

        "down-hide": {
          "0%": {
            translate: "-10% -40%",
            opacity: 1,
          },
          "100%": {
            translate: "0% 0%",
            opacity: 0,
          },
        },
        "down-show": {
          "0%": {
            translate: "-10% -40%",
            opacity: 0,
          },
          "30%": {
            opacity: 0.7,
          },
          "100%": {
            translate: "0% 0%",
            opacity: 1,
          },
        },
        "up-show": {
          "0%": {
            translate: "10% 40%",
            opacity: 0,
          },
          "100%": {
            translate: "0% 0%",
            opacity: 1,
          },
        },
        "up-hide": {
          "0%": {
            translate: "10% 40%",
            opacity: 1,
          },
          "30%": {
            opacity: 0.3,
          },
          "100%": {
            translate: "0% 0%",
            opacity: 0,
          },
        },
      },
      animation: {
        "btn-up": "btn-up 0.3s ease",
        show: "show 0.3s ease",
        "show-down": "show-down 0.7s ease",
        "show-up": "show-up 0.7s ease",

        "up-show": "up-show 0.3s ease",
        "up-hide": "up-hide 0.3s ease",
        "down-hide": "down-hide 0.3s ease",
        "down-show": "down-show 0.3s ease",
        down: "down 0.3s ease",
        up: "up 0.3s ease",
      },
    },
  },
  plugins: [
    plugin(({ addVariant, matchUtilities }) => {
      addVariant("hovered", "@media (hover:hover)");
      addVariant("child", "& > *");
      matchUtilities({
        "bg-url": (value) => ({ "background-image": `url(${value})` }),
      });
    }),
  ],
};

const screens = Object.keys(BREAKPOINTS);
const screensSaveList = screens.map((el) => [`${el}:hidden`, `${el}:contents`]);
config.safelist = [
  ...screensSaveList.flat(),
  "animate-up-hide",
  "animate-up",
  "animate-down",
  "animate-up-show",
  "animate-down-show",
  "animate-down-hide",
];

module.exports = config;

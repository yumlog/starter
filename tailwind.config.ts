import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "var(--black)",
      white: "var(--white)",
      coral: "var(--coral)",
      gray: {
        6: "var(--gray-6)",
        8: "var(--gray-8)",
        10: "var(--gray-10)",
        15: "var(--gray-15)",
        20: "var(--gray-20)",
        30: "var(--gray-30)",
        40: "var(--gray-40)",
        50: "var(--gray-50)",
        60: "var(--gray-60)",
        70: "var(--gray-70)",
        80: "var(--gray-80)",
        85: "var(--gray-85)",
        90: "var(--gray-90)",
        100: "var(--gray-100)",
      },
      green: {
        20: "var(--green-20)",
        30: "var(--green-30)",
        50: "var(--green-50)",
        70: "var(--green-70)",
        80: "var(--green-80)",
        pda: "var(--green-pda)",
        skin: "var(--green-skin)",
      },
      system: {
        blue: "var(--system-blue)",
        red: "var(--system-red)",
        orange: "var(--system-orange)",
        yellow: "var(--system-yellow)",
      },
      "dim-black": {
        3: "var(--dim-black-3)",
        5: "var(--dim-black-5)",
        16: "var(--dim-black-16)",
        60: "var(--dim-black-60)",
        70: "var(--dim-black-70)",
        80: "var(--dim-black-80)",
      },
      "dim-white": {
        16: "var(--dim-white-16)",
        32: "var(--dim-white-32)",
        50: "var(--dim-white-50)",
        70: "var(--dim-white-70)",
        80: "var(--dim-white-80)",
      },
    },
    extend: {
      fontSize: {
        display: "var(--display)",
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        body1: "var(--body1)",
        body2: "var(--body2)",
        body3: "var(--body3)",
        caption: "var(--caption)",
      },
      borderRadius: {
        none: "var(--rounded-none)",
        xs: "var(--rounded-xs)",
        sm: "var(--rounded-sm)",
        lg: "var(--rounded-lg)",
        xl: "var(--rounded-xl)",
        full: "var(--rounded-full)",
      },
    },
  },
  plugins: [],
};
export default config;

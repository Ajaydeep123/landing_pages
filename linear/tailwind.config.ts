import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        background: "#000212",
        white:"#fff",
        "white-a08":"rgba(255,255,255, 0.08)"
      },
      fontFamily:{
        sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Open Sans","Helvetica Neue",sans-serif'
      },
      fontSize:{
        xs:"1.3rem",
        sm:"1.4rem",
        md:"1.6rem",
        lg:["2.2rem","1.3"], //lineheight 28.6px -> 28.6/22 = 1.6
        "5xl":["8rem", "1"],  // here 1 is the line height that is 1*fontsize rem of fontsize
      },
      spacing:{
        0:"0",
        1:"0.4rem",
        2:"0.8rem",
        3:"1.2rem",
        4:"1.6rem",
        5:"2rem",
        6:"2.4rem",
        7:"2.8rem",
        8:"3.2rem",
        9:"3.6rem",
        10:"4rem",
        11:"4.4rem",
        12:"4.8rem", 
      },
      backgroundImage:{
        "primary-gradient": "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",

      }
    },
  plugins: [],
} satisfies Config;

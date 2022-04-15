export default {
   grid: {
      container: "130rem",
      gutter: "3.2rem",
   },
   border: {
      radius: "0.4rem",
   },
   font: {
      family:
         "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      light: 300,
      normal: 400,
      bold: 600,
      sizes: {
         xsmall: "1.2rem",
         small: "1.4rem",
         medium: "1.6rem",
         large: "1.8rem",
         xlarge: "2.0rem",
         xxlarge: "3rem",
         huge: "5.2rem",
      },
   },
   colors: {
      primary: "#F2EC54",
      secondary: "#5D5FEF",
      mainBg: "#FFFEF0",   
      lightBg: "#F2F2F2",
      white: "#FAFAFA",
      black: "#000 ", 
      lightGray: "#EAEAEA",
      gray: "#3F3F46",
      darkGray: "#27272A",
      disabled: "#52525B", 
      red: "#FF6347",
   },
   spacings: {
      xxsmall: "0.8rem",
      xsmall: "1.6rem",
      small: "2.4rem",
      medium: "3.2rem",
      large: "4.0rem",  
      xlarge: "4.8rem",
      xxlarge: "5.6rem",
   },
   transition: {
      default: "0.3s ease-in-out",
      fast: "0.1s ease-in-out",
   },
} as const;

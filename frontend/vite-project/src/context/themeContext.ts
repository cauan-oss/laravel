import { createContext } from "react";

type themeContext = {
    themeColor: 'dark' | 'ligth'
}

const themeContext = createContext({} as themeContext);
export default themeContext
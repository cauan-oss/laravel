import { createContext } from "react";

type messageContext = {
    message: string
}

const messageContext = createContext({} as messageContext)

export default messageContext
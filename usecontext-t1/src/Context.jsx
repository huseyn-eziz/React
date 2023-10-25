import { createContext } from "react"


export const contextim = createContext({})

const data = { username: 'ali', email: 'alion@gm.com' }


const Context = ({ children }) => {
    return (
        <contextim.Provider value={data}>
            {children}
        </contextim.Provider>
    )
}

export default Context

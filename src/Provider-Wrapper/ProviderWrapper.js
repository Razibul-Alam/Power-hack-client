import { createContext } from "react"
import { useAllAction } from './../Custom-Hook/useAllActions';
export const ActionContext=createContext()
const ProviderWrapper=({children})=>{
    const AllActions=useAllAction()
    return(
<ActionContext.Provider value={AllActions}>
{children}
</ActionContext.Provider>
    )
}
export default ProviderWrapper;
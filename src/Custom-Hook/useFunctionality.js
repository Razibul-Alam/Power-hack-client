import { useContext } from 'react';
import { ActionContext } from './../Provider-Wrapper/ProviderWrapper';
export const useFunctionality=()=>{
    return (useContext(ActionContext))
}
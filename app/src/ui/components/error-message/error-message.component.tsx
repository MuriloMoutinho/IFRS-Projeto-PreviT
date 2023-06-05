import './error-message.style.css'
import { ReactNode } from "react";

interface IErrorMessage {
    children: ReactNode
}

export function ErrorMessage({children}: IErrorMessage){

    return(
        <p className='error-message'>{children}</p>
    )

}
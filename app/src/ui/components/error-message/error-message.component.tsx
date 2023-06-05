import './error-message.style.css'
import { ReactNode } from "react";

interface IErrorMessageProps {
    children: ReactNode
}

export function ErrorMessage({children}: IErrorMessageProps): JSX.Element{

    return(
        <p className='error-message'>{children}</p>
    )

}
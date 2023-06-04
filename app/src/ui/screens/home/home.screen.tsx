import styles from "./home.style.css"

export function HomeScreen(){

    function submit(e: any):void {
        e.preventDefault()
    }

    return(
        <main>
            <h1>PreviT</h1>
            <p>Insira o nome ou o CEP da sua cidade:</p>
            
            <form onSubmit={submit}>
                <input type="text" />
            </form>
        </main>
    );
}
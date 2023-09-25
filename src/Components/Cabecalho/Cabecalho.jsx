import { Link } from "react-router-dom"
import CabecalhoLink from "../CabecalhoLink/CabecalhoLink"

function Cabecalho(){
    return(
        <>
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo(1)} alt="logo"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
        </>
    )
}

export default Cabecalho
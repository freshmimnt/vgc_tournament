import { Link } from "react-router";

export default function Matchups(){
    return(
        <>
            <div>
                <h1>Type Matchups</h1>

                <h2>Tabela/Table</h2>
                <img src="/matchups.jpg" alt="Matchups"></img>
                <p>
                Clique aqui para ver as teams: <Link to="/" >Teams</Link>
                </p>
                <p>
                Clique aqui para ver os pairings: <Link to="/pairings" >Pairings</Link>
                </p>
            </div>
        </>
    );
}
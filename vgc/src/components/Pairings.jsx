import { Link } from "react-router";

export default function Teams(){
    return(
        <>
            <div>
                <h1>Página de Pairings/Pairings Page</h1>
                    <ul>    
                        <li>Ricardo Dias(Zero to Hero) vs Tomas Salgueiro(Perish Trap)</li>

                        <li>Edja da Silva(Big Guy)vs Gabriela Lourenço(2-2-2)</li>

                        <li>Bruno Heleno(Sun) vs João Moniz(Muk/Smeargle aka Super Toxic Team) *Stream*</li>

                        <li>HenryBitz(Incin e Rilla) vs Fausto Ribeiro(Defiant Ape)</li>

                        <li>Daniel Almeida(Rain) vs Maria Guerreiro(Hard TR)</li>

                        <li>João Coelho(Stall) vs Júlia Costa(Incin e Rilla)</li>

                        <li>Afonso Cunha(Zero to Hero) vs Filippo Taffarello(Sand)</li>

                        <li>Matilde Coelho(Dance Moth) vs Prabhnoor kaur(Sand)</li>

                        <li>Antonio Rodrigues(Stall) vs Pedro Valério(Sun)</li>

                        <li>Maria Sequeira(Defiant Ap) vs Bernardo Carvalho (VIVILLON!!!!!!!!)</li>
                    </ul>
                    <p>
                Clique aqui para ver as teams: <Link to="/" >Teams</Link>
                </p>
                <p>
                Clique aqui para ver os type matchups: <Link to="/matchups" >Type Matchups</Link>
                </p>
            </div>
        </>
    );
}
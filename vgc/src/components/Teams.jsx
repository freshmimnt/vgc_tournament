import { Link } from "react-router";

export default function Teams(){
    return(
        <>
            <div>
                <h1>Torneio Pokémon/Pokémon Tournament</h1>
                <hr />
                <h2>Equipas/Teams</h2>

                <ul>
                    <li>
                        <h3>Sun</h3>
                        <p>Paste: https://pokepast.es/68173335b941a2a0</p>
                        <p>Rental: T29J99</p>
                    </li>
                    <li>
                        <h3>Muk/Smeargle aka Super Toxic Team</h3>
                        <p>Paste: https://pokepast.es/94c11b5e89a01c18</p>
                        <p>Rental: SP6WTR</p>
                    </li>
                    <li>
                        <h3>2-2-2</h3>
                        <p>Paste: https://pokepast.es/967d0998e0740bbe</p>
                        <p>Rental: 8FBMNP</p>
                    </li>
                    <li>
                        <h3>Zero to Hero</h3>
                        <p>Paste: https://pokepast.es/b3bc22844432db97</p>
                        <p>Rental: 3WLDWS</p>
                    </li>
                    <li>
                        <h3>Sand</h3>
                        <p>Paste: https://pokepast.es/436113610682ae08</p>
                        <p>Rental: 4JJQ6R</p>
                    </li>
                    <li>
                        <h3>Hard TR</h3>
                        <p>Paste: https://pokepast.es/cf407dae651b6b02</p>
                        <p>Rental: 9PJ0YV</p>
                    </li>
                    <li>
                        <h3>~Dance Moth</h3>
                        <p>Paste: https://pokepast.es/d3391cde37b9f122</p>
                        <p>Rental: L23PDL</p>
                    </li>
                    <li>
                        <h3>Incin e Rilla</h3>
                        <p>Paste: https://pokepast.es/41d9d22ff54459c3</p>
                        <p>Rental: DK7V9W</p>
                    </li>
                    <li>
                        <h3>Rain</h3>
                        <p>Paste: https://pokepast.es/b62a5ae4077507a1</p>
                        <p>Rental: PN4B6B</p>
                    </li>
                    <li>
                        <h3>Defiant Ape</h3>
                        <p>Paste: https://pokepast.es/308980667e96093c</p>
                        <p>Rental: 8V86XR</p>
                    </li>
                    <li>
                        <h3>Stall</h3>
                        <p>Paste: https://pokepast.es/e6263da8b7a67b52</p>
                        <p>Rental: 9HJD9C</p>
                    </li>
                    <li>
                        <h3>VIVILLON!!!!!!!!</h3>
                        <p>Paste: https://pokepast.es/8e0c0f84c402caa4</p>
                        <p>Rental: 96JS1Y</p>
                    </li>
                    <li>
                        <h3>Perish Trap</h3>
                        <p>Paste: https://pokepast.es/fe18d4c93443c787</p>
                        <p>Rental: BL0XCR</p>
                    </li>
                    <li>
                        <h3>Big Guy</h3>
                        <p>Paste: https://pokepast.es/5c4073a0d3030102</p>
                        <p>Rental: BNNNNP</p>
                    </li>
                </ul>

                <p>
                Clique aqui para ver os pairings: <Link to="/pairing" >Pairings</Link>
                </p>
                <p>
                Clique aqui para ver os type matchups: <Link to="/matchups" >Type Matchups</Link>
                </p>
            </div>
        </>
    );
}
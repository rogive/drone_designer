import React from 'react';

function Home() {
    return(
        <div>
            <h1>DRONE DESIGNER</h1>
            <p>Ingrese los siguientes datos: </p>
            <div class="container">
            <form>
                <fieldset>
                <p>
                    <label>Cantidad de motores</label>
                    <input type = "text"
                        id = "myText"
                        value = "4" />
                </p>
                <p>
                    <label>Maximo peso de despegue (Kg)</label>
                    <input type = "text"
                        id = "myText"
                        value = "3.2" />
                </p>
                <p>
                    <label>Tiempo de vuelo esperado (min)</label>
                    <input type = "text"
                        id = "myText"
                        value = "15" />
                </p>
                
                </fieldset>
            </form>
            </div>
    </div>
    )
}

export default Home
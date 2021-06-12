import trekking from "../service/dados"

function Trilha() {
    return(
        <div className= "lista">
            {trekking.map(trekking => {
                return(
                    <ul>
                        <li>{trekking.nome}</li>
                        <li>Extensão {trekking.tipo}</li>
                        <li><img src={trekking.foto} alt={trekking.nome}/></li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Trilha
import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0 ).toFixed(2)
    }

    const handleImpresion = () => {

        print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <td scope="col">Nombre</td>
                        <td scope="col">Precio</td>
                        <td scope="col">Cantidad</td>
                        <td scope="col">Eliminar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button 
                                    className="btn btn-ouline-primary" 
                                    onClick={ () => disminuirCantidad(item.id)}
                                    >-</button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button 
                                    className="btn btn-ouline-primary" 
                                    onClick={ () => aumentarCantidad(item.id)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>eliminarCompra(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }

                    <tr>TOTAL: 
                    <td></td>
                    <td></td>
                    <td>{calcularTotal()}</td></tr>
                   

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button 
                className="btn btn-primary"
                onClick={handleImpresion}
                disabled={listaCompras<1}

                >COMPRAR</button>
            </div>
        </>
    )
}

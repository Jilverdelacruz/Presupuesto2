import {useState} from 'react'
import Error from '../Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

/* const Formulario= ({guardarGasto,guardarexiGasto}) =>{ */
const Formulario= ({guardarGasto, sobrante}) =>{
const [nomgasto, guardarnomGasto] = useState('')
const [cantgasto, guardarcantGasto] = useState(0)
const [error, guardarError] = useState(false)

    const definirNomGasto = e =>{
        guardarnomGasto(e.target.value)
    }
    const definirCantGasto = e =>{
        guardarcantGasto(parseInt(e.target.value, 10))
    }
    const agregarGasto = e =>{
        e.preventDefault()
        // validar
        if(cantgasto < 1 || isNaN(cantgasto) || nomgasto.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false)
        // constuir el gasto
        const gasto = {   // es igual (llave: valor) como si colocara nomgasto: nomgasto, cantgasto:cantgasto
            nomgasto, 
            cantgasto,
            id: shortid.generate()
        } 
        // pasar el gasto al componente principal
        guardarGasto(gasto)
        // resetear el formulario
        guardarnomGasto('')
        guardarcantGasto(0)
       /*  guardarexiGasto(true) */
    }
    
    return (
       <> {sobrante > 0 ? 
            <form
            onSubmit={agregarGasto}>
                { error ? <Error
                mensaje='Corregir los datos del gasto'
                /> : null}
              
                <h2>Ingresar los Datos de los Gatos</h2>
                <div className='Campo'>
                    <label>Nombre de gasto</label>
                    <input
                    type='text'
                    className='u-full-width'
                    placeholder=' Ejem. Transporte'
                    onChange={definirNomGasto}
                    value={nomgasto}
                    />
                </div>
                <div className='Campo'>
                    <label>Cantidad de gasto</label>
                    <input
                    type='number'
                    className='u-full-width'
                    placeholder=' Ejem. T200'
                    onChange={definirCantGasto}
                    value={cantgasto}
                    />
                </div>
                <input 
                className='u-full-width button-primary'
                type='submit'
                value='Agregar Gasto'
                />
            </form>
            : <p> ESTAS MISIO </p>}</>
        
    )
}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired, 
    sobrante: PropTypes.number.isRequired
}

export default Formulario
import { useState } from 'react'
import Error from '../Error'
import PropTypes from 'prop-types'
const Question = ({guardarPresupuesto, guardarSobrante, guardarMostrarPregunta}) =>{

    // definir el state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    
    // Función donde lee el valor del input
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value, 10))
    }
    
    // Agregar presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        // validar
        if ( cantidad < 1 || isNaN(cantidad)){ // NaN: No es un número
            guardarError(true)
            return;
        }   
        // Validado
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarSobrante(cantidad)
        guardarMostrarPregunta(false)

    }
    return (
        <>
            <h2>Coloca tu Presupuesto</h2>
        
        <form
         onSubmit={agregarPresupuesto}
         >
        { error  ? <Error
        mensaje='Volver a ingresar un valor válido'
        /> : null}
            <input
            type='number'
            className='u-full-width'
            placeholder='Coloca tu Presupuesto'
            onChange={definirPresupuesto}
            />
            <input 
           
            type='submit'
            className='u-full-width button-primary'
            value='Definir Presupuesto'
            />
        </form>
        </>
    )
    
}
Question.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired, 
    guardarSobrante: PropTypes.func.isRequired, 
    guardarMostrarPregunta: PropTypes.func.isRequired
}

export default Question

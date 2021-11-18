import  Question from './Components/Question'
import { useState, useEffect} from 'react'
import Formulario from './Components/Formulario'
import Listado from './Components/Listado'
import ControlPresupuesto from './Components/ControlPresupuesto'


function App() {
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [sobrante, guardarSobrante] = useState(0)
  const [mostrarpregunta, guardarMostrarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([])
/*   const [gasto, guardarGasto] = useState({}) */
/*   const [exigasto, guardarexiGasto] = useState(false) */

/*   useEffect(() =>{
   if(exigasto){ // si existe un gasto lo agregas al arreglo.
    guardarGastos ([...gastos, gasto])
    guardarexiGasto(false)   // volver como estaba antes
   }
   // presupuesto actual
   const prespuestoActual = sobrante - gasto.cantgasto
   guardarSobrante(prespuestoActual)

  }, [gasto]) // se jecutará cuando se realiza un cambio se le denomina dependiente.
  
 */
  const guardarGasto = (gasto) =>{
    guardarGastos([...gastos, gasto])
    guardarSobrante(sobrante-gasto.cantgasto)
   
  }
  useEffect(()=>{
    if(sobrante > 0){
      console.log(`el sobrante ahora es ${sobrante}`) // Cuando quieres el valor actualizado en referencia a la state de dependencia, tomar en cuenta que siempre se ejecuta desde la primera vez 
      return;
  }
    
  }, [sobrante])


  return (
    <div className="container">
      <header>
      <h1>PRIMERA PRUEBA</h1>
        <div className='contenido-principal contenido'>
          {mostrarpregunta
          ?
          <Question 
            guardarPresupuesto={guardarPresupuesto}
            guardarSobrante={guardarSobrante}
            guardarMostrarPregunta={guardarMostrarPregunta}
          />
          :
          <div className='row'>
              <div className=' one-half column'>
                <Formulario 
              guardarGasto={guardarGasto}
              sobrante={sobrante}
             /*   guardarexiGasto={guardarexiGasto} */
                />
              </div>
              <div className=' one-half column'>
              <Listado gastos={gastos}/>
              <ControlPresupuesto 
              presupuesto={presupuesto}
              sobrante={sobrante}
              />
            </div>
          </div>
          }
        </div>
      </header>
      
    </div>
  );
}

export default App;

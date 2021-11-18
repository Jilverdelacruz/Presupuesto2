import { evaluarPresupuesto } from '../helper'
import PropTypes from 'prop-types'

const ControlPresupuesto = ({presupuesto, sobrante}) =>{
    return (
        <>
        <div className='alert alert-primary'>
        Presuuesto: {presupuesto}
        </div>
        <div className={evaluarPresupuesto(presupuesto, sobrante)}>
        Restante: {sobrante}
        </div>
        </>
    )
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    sobrante: PropTypes.number.isRequired
}
export default ControlPresupuesto
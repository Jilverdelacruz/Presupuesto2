
import PropTypes from 'prop-types'

const Gasto = ({gasto}) =>(

    <li className='gastos'>
        <p>{gasto.nomgasto}
        <span className='gasto'>$ {gasto.cantgasto}</span>
        </p>
        
    </li>
)

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto

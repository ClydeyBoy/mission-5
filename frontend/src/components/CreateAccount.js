import '../styles/CreateAccount.css'
import closeBtn from "../images/property_page/Close.png"
import { useParams, Link } from 'react-router-dom'

function CreateAccount(props) {

    return (props.trigger2) ? (

        <div className='createAccountBox'>
            <img className='closeBtn' src={closeBtn} alt='' onClick={() => props.setTrigger2(false)}></img>
        </div>
    ) : '';
}

export default CreateAccount
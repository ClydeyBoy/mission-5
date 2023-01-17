import '../styles/CreateAccount.css'
import closeBtn from "../images/property_page/Close.png"
import { useParams, Link } from 'react-router-dom'

function CreateAccount(props) {

    return (props.trigger2) ? (
        <div className='signUpFormGreyedArea'>
            <div className='createAccountBoxOuter'>
                <div className='createAccountBoxInner'>
                    <div className='signUpFormHeader'>Register for MyMetro</div>
                </div>
                <img className='closeBtn2' src={closeBtn} alt='' onClick={() => props.setTrigger2(false)}></img>
            </div>
        </div>
    ) : '';
}

export default CreateAccount
import '../styles/CreateAccount.css'
import closeBtn from "../images/property_page/Close.png"
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import validator from 'validator'

function CreateAccount(props) {

    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validator.equals(email, confirmEmail)) {
            window.alert("Emails do not match");
            throw Error('Emails do not match')
            
        }

        if (!validator.equals(password, confirmPassword)) {
            window.alert("Passwords do not match");
            throw Error('Passwords do not match')
        }
        console.log(email,password)
    }



    return (props.trigger2) ? (
        <div className='signUpFormGreyedArea'>
            <div className='createAccountBoxOuter'>
                <div className='createAccountBoxInner'>
                    <div className='signUpFormHeader'>Register for MyMetro</div>

                    <form className='createAccount' onSubmit={handleSubmit}>
                        <div>
                            <label for='emailRegistraition'>Email Address</label>
                            <input type='email' id='emailRegistraition' name='emailRegistraition'
                                onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        </div>
                        <div>
                            <label for='confirmEmail'>Confirm Email Address</label>
                            <input type='email' id='confirmEmail' name='confirmEmail'
                                onChange={(e) => setConfirmEmail(e.target.value)} value={confirmEmail}></input>
                        </div>
                        <div>
                            <label for='password' id='passwordLabel'>Password</label>
                            <input type='password' id='passwordRegistration' name='passwordRegistration'
                                onChange={(e) => setPassword(e.target.value)} value={password}></input>
                        </div>
                        <div>
                            <label for='confirmPassword'>Confirmation of Password</label>
                            <input type='password' id='confirmPassword' name='confirmPassword'
                                onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}></input>
                        </div>
                        <div id='passwordGuide'><b>1 upper case, 1 number, 1 special character</b></div>
                        <button>Create & Submit</button>
                    </form>

                </div>
                <img className='closeBtn2' src={closeBtn} alt='' onClick={() => props.setTrigger2(false)}></img>
            </div>
        </div>
    ) : '';
}

export default CreateAccount



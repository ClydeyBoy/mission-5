import '../styles/PopupForm.css'
import closeBtn from "../images/property_page/Close.png"
import CreateAccount from './CreateAccount'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'



function PopupForm(props) {

    const [createAccount, setCreateAccount] = useState(false)

    return (props.trigger) ? (

        <div className='popupForm'>
            <div className='popupFormHeader'>Tenancy Application</div>
            <div className='popupFormParagraph'>
                <b>Benefits of creating a MyMetro account include</b>
                <li>Track your application process</li>
                <li>Rental property watchlist to help you narrow your search down</li>
                <li>Notifications of new listings</li>
            </div>
            
            <form className='tenancyApplication'>
            <div className='popupBtnContainer'>
                <button className='applyForRentalBtn' type = 'submit'>Just Apply for Rental</button>
                <div className='createAccountBtn' onClick = {() => setCreateAccount(true)}>Create Account & Submit Application</div>
            </div>

                <div className='formSubHeader'><b>Property Details</b></div>
                <div>
                    <label for='propertyAddress'>Address of Rental Property</label>
                    <input type='text' id='propertyAddress' name='propertyAddress'></input>
                </div>
                <div>
                    <label for='moveInDate'>When can you take the property?</label>
                    <input type='text' id='moveInDate' name='moveInDate'></input>
                    <label for='rentalPeriod'>How long do you wish to rent it?</label>
                    <input type='text' id='rentalPeriod' name='rentalPeriod'></input>
                </div>
                <div>
                    <label for='weeklyRent'>Weekly Rent</label>
                    <input type='text' id='weeklyRent' name='weeklyRent'></input>
                </div>
                <div className='viewing'>
                    <label id = 'viewing'>Have you viewed the property?</label>
                    <input type="radio" name="viewing"  id = 'viewing'/> <label id = 'viewing'>Yes</label>
                    <input type="radio" name="viewing"  id = 'viewing'/><label id = 'viewing'>No</label>
                </div>
                <div className='formSubHeader'><b>Your Details</b></div>
                <div>
                    <label for='fullName'>Full legal name</label>
                    <input type='text' id='fullName' name='fullName'></input>
                </div>
                <div>
                    <label for='dateOfBirth' >DOB</label>
                    <input type='date' id='dateOfBirth' name='dateOfBirth'></input>
                    <label for='emailAddress' >Email</label>
                    <input type='email' id='emailAddress' name='emailAddress'></input>
                </div>
                <div>
                    <label for='mobileNumber' >Mobile</label>
                    <input type='text' id='mobileNumber' name='mobileNumber'></input>
                    <label for='phoneNumber' >Phone</label>
                    <input type='text' id='phoneNumber' name='phoneNumber'></input>
                </div>
                <div className='formSubHeader2'><b>Contacts & Referees Section</b></div>
                <div>
                    <label for='refereeName'>Personal referee name</label>
                    <input type='text' id='refereeName' name='refereeName'></input>
                    <label for='refereeRelationship' >Relationship</label>
                    <input type='text' id='refereeRelationship' name='refereeRelationship'></input>
                </div>
                <div>
                    <label for='refereePhone'>Phone</label>
                    <input type='text' id='refereePhone' name='refereePhone'></input>
                    <label for='refereeEmail' >Email</label>
                    <input type='email' id='refereeEmail' name='refereeEmail'></input>
                </div>
                <div>
                    <label for='occupation'>Occupation</label>
                    <input type='text' id='occupation' name='occupation'></input>
                    <label for='weeklyIncome' >Income P/W</label>
                    <input type='text' id='weeklyIncome' name='weeklyIncome'></input>
                </div>
                <div className='formSubHeader2'><b>Landlord/Property manager</b></div>
                <div>
                    <label for='landlordAddress'>Address</label>
                    <input type='text' id='landlordAddress' name='landlordAddress'></input>
                </div>
                <div>
                    <label for='timeAtAdress'>Time at address</label>
                    <input type='text' id='timeAtAdress' name='timeAtAdress'></input>
                    <label for='reasonForLeaving' >Reason for leaving</label>
                    <input type='text' id='reasonForLeaving' name='reasonForLeaving'></input>
                </div>
            </form>
            <img className='closeBtn' src={closeBtn} alt='' onClick={() => props.setTrigger(false)}></img>
            <CreateAccount trigger2={createAccount} setTrigger2 = {setCreateAccount}></CreateAccount>
        </div>
    ) : '';
}

export default PopupForm
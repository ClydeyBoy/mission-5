import '../styles/PopupForm.css'
import closeBtn from "../images/property_page/Close.png"
import CreateAccount from './CreateAccount'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'



function PopupForm(props) {

    const [createAccount, setCreateAccount] = useState(false)
    const [propertyAddress, setPropertyAddress] = useState('')
    const [moveInDate, setMoveInDate] = useState('')
    const [rentalPeriod, setRentalPeriod] = useState('')
    const [weeklyRent, setWeeklyRent] = useState('')
    const [viewing, setViewing] = useState('')
    const [applicantName, setApplicantName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [applicantEmail, setApplicantEmail] = useState('')
    const [applicantMobile, setApplicantMobile] = useState('')
    const [applicantPhone, setApplicantPhone] = useState('')
    const [refereeName, setRefereeName] = useState('')
    const [refereeRelationship, setRefereeRelationship] = useState('')
    const [refereePhone, setRefereePhone] = useState('')
    const [refereeEmail, setRefereeEmail] = useState('')
    const [employerName, setEmployerName] = useState('')
    const [employerPhone, setEmployerPhone] = useState('')
    const [employerEmail, setEmployerEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [weeklyIncome, setWeeklyIncome] = useState('')
    const [landlordAddress, setLandlordAddress] = useState('')
    const [timeAtAdress, setTimeAtAdress] = useState('')
    const [reasonForLeaving, setReasonForLeaving] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const application = {
            propertyAddress, moveInDate, rentalPeriod, weeklyRent, viewing, applicantName,
            dateOfBirth, applicantEmail, applicantMobile, applicantPhone, refereeName, refereeRelationship,
            refereePhone, refereeEmail, employerName, employerPhone, employerEmail, occupation, weeklyIncome,
            landlordAddress, timeAtAdress, reasonForLeaving
        }

        const response = await fetch('http://localhost:4000/propertypage/:id', {
            method: 'POST',
            body: JSON.stringify(application),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log('application has been added')
        }
    }


    return (props.trigger) ? (
        <div className='popupFormGreyedArea'>
            <div className='popupForm'>
                <div className='popupFormHeader'>Tenancy Application</div>
                <div className='popupFormParagraph'>
                    <b>Benefits of creating a MyMetro account include</b>
                    <li>Track your application process</li>
                    <li>Rental property watchlist to help you narrow your search down</li>
                    <li>Notifications of new listings</li>
                </div>

                <form className='tenancyApplication' onSubmit={handleSubmit}>
                    <div className='popupBtnContainer'>
                        <button className='applyForRentalBtn' type='submit'>Just Apply for Rental</button>
                        <div className='createAccountBtn' onClick={() => setCreateAccount(true)}>Create Account & Submit Application</div>
                    </div>

                    <div className='formSubHeader'><b>Property Details</b></div>
                    <div>
                        <label for='propertyAddress'>Address of Rental Property</label>
                        <input type='text' id='propertyAddress' name='propertyAddress'
                            onChange={(e) => setPropertyAddress(e.target.value)} value={propertyAddress}></input>
                    </div>
                    <div>
                        <label for='moveInDate'>When can you take the property?</label>
                        <input type='text' id='moveInDate' name='moveInDate'
                            onChange={(e) => setMoveInDate(e.target.value)} value={moveInDate}></input>
                        <label for='rentalPeriod'>How long do you wish to rent it?</label>
                        <input type='text' id='rentalPeriod' name='rentalPeriod'
                            onChange={(e) => setRentalPeriod(e.target.value)} value={rentalPeriod}></input>
                    </div>
                    <div>
                        <label for='weeklyRent'>Weekly Rent</label>
                        <input type='text' id='weeklyRent' name='weeklyRent'
                            onChange={(e) => setWeeklyRent(e.target.value)} value={weeklyRent}></input>
                    </div>
                    <div className='viewing'>
                        <label id='viewing'>Have you viewed the property?</label>
                        <input type="radio" name="viewing" id='viewing'
                            onClick={() => setViewing('yes')} value={viewing} /> <label id='viewing'>Yes</label>
                        <input type="radio" name="viewing" id='viewing'
                            onClick={() => setViewing('no')} value={viewing} /><label id='viewing'>No</label>
                    </div>
                    <div className='formSubHeader'><b>Your Details</b></div>
                    <div>
                        <label for='applicantName'>Full legal name</label>
                        <input type='text' id='applicantName' name='applicantName'
                            onChange={(e) => setApplicantName(e.target.value)} value={applicantName}></input>
                    </div>
                    <div>
                        <label for='dateOfBirth' >DOB</label>
                        <input type='date' id='dateOfBirth' name='dateOfBirth'
                            onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth}></input>
                        <label for='applicantEmail' >Email</label>
                        <input type='email' id='applicantEmail' name='applicantEmail'
                            onChange={(e) => setApplicantEmail(e.target.value)} value={applicantEmail}></input>
                    </div>
                    <div>
                        <label for='applicantMobile' >Mobile</label>
                        <input type='text' id='applicantMobile' name='applicantMobile'
                            onChange={(e) => setApplicantMobile(e.target.value)} value={applicantMobile}></input>
                        <label for='applicantPhone'>Phone</label>
                        <input type='text' id='applicantPhone' name='applicantPhone'
                            onChange={(e) => setApplicantPhone(e.target.value)} value={applicantPhone}></input>
                    </div>
                    <div className='formSubHeader2'><b>Contacts & Referees Section</b></div>
                    <div>
                        <label for='refereeName'>Personal referee name</label>
                        <input type='text' id='refereeName' name='refereeName'
                            onChange={(e) => setRefereeName(e.target.value)} value={refereeName}></input>
                        <label for='refereeRelationship' >Relationship</label>
                        <input type='text' id='refereeRelationship' name='refereeRelationship'
                            onChange={(e) => setRefereeRelationship(e.target.value)} value={refereeRelationship}></input>
                    </div>
                    <div>
                        <label for='refereePhone'>Phone</label>
                        <input type='text' id='refereePhone' name='refereePhone'
                            onChange={(e) => setRefereePhone(e.target.value)} value={refereePhone}></input>
                        <label for='refereeEmail' >Email</label>
                        <input type='email' id='refereeEmail' name='refereeEmail'
                            onChange={(e) => setRefereeEmail(e.target.value)} value={refereeEmail}></input>
                    </div>
                    <div>
                        <label for='employerName'>Current employer referee name</label>
                        <input type='text' id='employerName' name='employerName'
                            onChange={(e) => setEmployerName(e.target.value)} value={employerName}></input>
                    </div>
                    < div >
                        <label for='employerPhone'>Phone</label>
                        <input type='text' id='employerPhone' name='employerPhone'
                            onChange={(e) => setEmployerPhone(e.target.value)} value={employerPhone}></input>
                        <label for='employerEmail' >Email</label>
                        <input type='email' id='employerEmail' name='employerEmail'
                            onChange={(e) => setEmployerEmail(e.target.value)} value={employerEmail}></input>
                    </div >
                    <div>
                        <label for='occupation'>Occupation</label>
                        <input type='text' id='occupation' name='occupation'
                            onChange={(e) => setOccupation(e.target.value)} value={occupation}></input>
                        <label for='weeklyIncome' id='weeklyIncomeLabel'>Income P/W</label>
                        <input type='text' id='weeklyIncome' name='weeklyIncome'
                            onChange={(e) => setWeeklyIncome(e.target.value)} value={weeklyIncome}></input>
                    </div>
                    <div className='formSubHeader3'><b>Landlord/Property manager</b></div>
                    <div>
                        <label for='landlordAddress'>Address</label>
                        <input type='text' id='landlordAddress' name='landlordAddress'
                            onChange={(e) => setLandlordAddress(e.target.value)} value={landlordAddress}></input>
                    </div>
                    <div>
                        <label for='timeAtAdress'>Time at address</label>
                        <input type='text' id='timeAtAdress' name='timeAtAdress'
                            onChange={(e) => setTimeAtAdress(e.target.value)} value={timeAtAdress}></input>
                        <label for='reasonForLeaving' >Reason for leaving</label>
                        <input type='text' id='reasonForLeaving' name='reasonForLeaving'
                            onChange={(e) => setReasonForLeaving(e.target.value)} value={reasonForLeaving}></input>
                    </div>


                </form>
                <img className='closeBtn' src={closeBtn} alt='' onClick={() => props.setTrigger(false)}></img>
                <CreateAccount trigger2={createAccount} setTrigger2={setCreateAccount}></CreateAccount>
            </div >
        </div >
    ) : '';
}

export default PopupForm



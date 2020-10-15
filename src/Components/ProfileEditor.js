import React, {useState} from 'react';
import axios from 'axios';

import Tabs from './Tabs';
import PwStrengthIndicator from "./PwStrengthIndicator";

import email from '../assets/icons/email.png';
import password from '../assets/icons/password.png';
import confirm from '../assets/icons/confirm.png';
import name from '../assets/icons/name.png';
import country from '../assets/icons/country.png';
import styles from './styles.module.scss';

let value = "";

const ProfileEditor = () => {
  const initialValues = {
    email : '',
    prd1 : '',
    prd2 : '',
    fName: '',
    lName: '',
    country: ''
  }
  const [values, setValues] = useState(initialValues)
  const [err, setErr] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.prd1 !== values.prd2) {
      setErr(true)
      return
    }
    if (values.country === 'Country'){
      setError(true)
      return
    }
    axios
    .post('api/update', values)
    .then(res => setSuccess('successfully updated'))
    .catch(err => setSuccess('updated error'))
    setValues(initialValues)
  }
  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErr(false)
    setError(false)
    setSuccess('')
  }
  return (
    <div className={styles.profileWrapper}>
      <Tabs> 
        <div label="Account Settings"> 
          <form className={styles.settingWrapper} onSubmit={handleSubmit}>
            <div className={styles.setting}>
              <img src={email} alt="email"/>
              <input 
                type="email" 
                name="email" 
                placeholder="email"
                onChange={handleChange}
                value={values.email}
                required
              />
            </div>
            <div className={styles.setting}>
              <img src={password} alt="password"/>
              <input 
                type="password" 
                name="prd1" 
                placeholder="password"
                onChange={handleChange}
                value={values.prd1}
                required
              />
              <div className={styles.indicator}>
                {values.prd1 && <PwStrengthIndicator password={values.prd1} />}
              </div>
            </div>
            <div className={styles.setting}>
              <img src={confirm} alt="confirm"/>
              <input 
                type="password" 
                name="prd2" 
                placeholder="confirm the password"
                onChange={handleChange}
                value={values.prd2}
                required
              />
            </div>
            { err && <div className={styles.err}>Your Passwords don't match! Please retype your password to confirm it.</div>}
            { success && <div className={styles.err}>{success}</div>}
            <button type="submit">Update</button>
          </form>
        </div> 
        <div label="User Information"> 
          <form className={styles.settingWrapper} onSubmit={handleSubmit}>
            <div className={styles.setting}>
              <img src={name} alt="first name"/>
              <input 
                type="text" 
                name="fName" 
                placeholder="First Name"
                onChange={handleChange}
                value={values.fName}
                required
              />
            </div>
            <div className={styles.setting}>
              <img src={name} alt="last name"/>
              <input 
                type="text" 
                name="lName" 
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lName}
                required
              />
            </div>
            <div className={styles.setting}>
              <img src={email} alt="Address"/>
              <input 
                type="text" 
                name="addr" 
                placeholder="Address(Street, house number, zip code)"
                onChange={handleChange}
                value={values.addr}
                required
              />
            </div>
            <div className={styles.setting}>
              <img src={country} alt="Country"/>
              <select name="country" id="country" onChange={handleChange} value={values.country}>
                <option value="Country">Country</option>
                <option value="Germany">Germany</option>
                <option value="Austria">Austria</option>
                <option value="Switzerland ">Switzerland </option>
              </select>
            </div>
            { error && <div className={styles.err}>Please select your country</div>}
            { success && <div className={styles.err}>{success}</div>}
            <button type="submit">Update</button>
          </form>
        </div> 
      </Tabs>
    </div>
  )
}

export default ProfileEditor

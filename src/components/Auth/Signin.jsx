import { TextField } from '@mui/material'
import './Signin.css'
import { useEffect, useState } from 'react'
import { check } from './check';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';

function Signin({ changeState }) {

  const initialVal = { email: "", pass: "" };
  const [form, setForm] = useState(initialVal);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [result , setResult] = useState("");
  const {login} = useAuth();
  // const redirectPath = location.state?.path || '/';
  const navigate = useNavigate();

  function switchHandler() {
    document.getElementsByClassName("backdrop")[0].className += " do0";
    setTimeout(() => {
      document.getElementsByClassName("backdrop")[0].classList.remove("do0");
      changeState(prev => !prev);
    }, 1100)
  }
    function changeHandler(e){
      const {name, value} = e.target;
      setForm({...form, [name] : value});
      console.log(form)
    }

    const submitHandler = (e) => {
      e.preventDefault();
      setFormErrors(validate(form));
      setIsSubmit(true);
    };


    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "Not a valid email!";
      }
      if (!values.pass) {
        errors.pass = "Password is required";
      } else if (values.pass.length < 4) {
        errors.pass = "Password must be more than 4 characters";
      } else if (values.pass.length > 10) {
        errors.pass = "Password cannot exceed more than 10 characters";
      }
      return errors;
    };

    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {

        const result = check(form); 
        if(result?.ok)
          {
            console.log("signed in")
            window.localStorage.setItem('_user', JSON.stringify(result.user))
            login(result?.user);
            navigate('/candidate', { replace: true });
          }
        else{
          setResult("Invalid email/password")
        }
      }
    }, [formErrors]);

  return (
    
    <form onSubmit={submitHandler}>
      <div className='signin'>
        <p className='req'>{result}</p>
        <TextField
          // required
          id="outlined-required"
          label="Email Id"
          // type='email'
          name='email'
          value={form.username}
          onChange={changeHandler}
        />
         <p className='req'>{formErrors.email}</p>
        <TextField
          // required
          id="outlined-password-input"
          label="Password"
          type="password"
          name='pass'
          value={form.pass}
          onChange={changeHandler}
        // autoComplete="current-password"
        />
        <p className='req'>{formErrors.pass}</p>

        <button type='submit' className='button'> SignIn </button>

        <div className='switch'>Don't have account ? <span className='span' onClick={switchHandler}>Sign up</span></div>
      </div>
    </form>
  )
}

export default Signin
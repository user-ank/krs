import { TextField } from '@mui/material';
import React from 'react'

function Signup({changeState}) {

    function switchHandler() {
        document.getElementsByClassName("backdrop")[0].className += " do0"
        setTimeout(() => {
            document.getElementsByClassName("backdrop")[0].classList.remove("do0");
            changeState(prev => !prev);
        }, 1200)
    }

    return (
            <div className='signin'>
                 <TextField
                    required
                    id="outlined-required"
                    label="Name"
                />
                 <TextField
                    required
                    id="outlined-required"
                    label="Email Id"

                />
              <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                // autoComplete="current-password"
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                // autoComplete="current-password"
                />

                <button type='submit' className='button'> Signup </button>

                <div className='switch'>Already have an account ? <span className='span' onClick={switchHandler}>Sign in</span></div>
            </div>

    )
}

export default Signup;
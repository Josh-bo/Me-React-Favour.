import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const SignUp = () => {
  const navigate = useNavigate()
  const go = () => {
    if (lagbaja == tamedu){
      navigate('/signUp')
    }
  }
  return (
    <>
    <Navbar/>
        <div className="container">
        <div className="row">
            <div className="col-12 ">
                <h1 className="text-center">SIGN UP</h1>
                <div className=''></div>
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />
                <input type="text" name="" id="" />

                <button className='btn btn-success' onClick={go}>SIGN UP</button>
            </div>
        </div>
     </div>
    </>
  );
}

export default SignUp;

import React , {useState} from 'react'
import './Signup.css';
import {Link , useNavigate} from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();

    const [user,setUser] = useState({
        fname: "",
        lname:"",
        email:"",
        phone:"",
        pass:"",
        cpass:"",
        birthday:"",
        gender:""
    })

    let name ,value;

    const handleInputs = (e)=>{
            name = e.target.name;
            value = e.target.value

            setUser({...user , [name]:value})
    }

    const postData = async(e) =>{
         e.preventDefault();

         const{fname,lname,email,phone,pass,cpass,birthday,gender} = user;

        const res =  await fetch('http://localhost:3001/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify({
                fname:fname,
                lname:lname ,
                phone:phone,
                email:email, 
                dob:birthday , 
                password: pass, 
                cpassword:cpass, 
                gender:gender
            })
        });
        const data = await res.json();

        if( res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration Successful");
            console.log("Successful Registration")

            navigate("/login")
        }
    }

  return (
    <> 


        {/* <img className="bg" alt="" src={require('./Polka.jpg')} /> */}
    
        <div className="form-container">



        <form action="POST">

            <div className="signIncontainer">
                <h2 className='signupHead'>SIGN UP</h2>

            <input className='signupInput' type="text" onChange={handleInputs} value={user.fname} required   name="fname" id="first-name" placeholder="First name"/> 
            
            <input className='signupInput' type="text" onChange={handleInputs} value={user.lname} required  name="lname" id="second-name" placeholder="Last name"/>
            
            <input className='signupInput' type="telephone" onChange={handleInputs} value={user.phone} required  name="phone" id="phone" placeholder="Phone"/>

            <input className='signupInput' type="text" onChange={handleInputs} value={user.email} required  name="email" id="email" placeholder="Email"/>

            <input className='signupInput' type="password" onChange={handleInputs} value={user.pass} required  name="pass" id="pass" autoComplete="off" placeholder="Password"/>

            <input className='signupInput' type="password" onChange={handleInputs} value={user.cpass} required  name="cpass" id="cpass" autoComplete="off" placeholder="Confirm Password"/>

            
            <label className='signupLabel' htmlFor="birthday">DATE OF BIRTH:</label>
        
            <input className='signupInput' type="date" onChange={handleInputs} value={user.birthday} required  name="birthday"></input>

                <label className='signupLabel'  htmlFor="gender-section">GENDER:</label>
                <select className='signupSelect' onChange={handleInputs} value={user.gender} required name='gender'>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="none">Prefer not to say</option>
                </select>
               
                <button className="btn btn-dark submitFormButton" id='signupButton' onClick={postData} >Submit</button>

            </div>
        </form>
    </div>
        <p className='alreadySignedup' >Already have an Account <Link id='signupLinktologin' to="/login">Log in</Link> here</p>

   
    </>
  )
}

export default Signup

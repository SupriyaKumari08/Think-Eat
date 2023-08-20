import React , {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './Signup.css'


function Login() {
  const navigate = useNavigate();

  const [user,setUser] = useState({
    email:"",
    password:""
  })

  let name ,value;

    const handleLogin = (e)=>{
            name = e.target.name;
            value = e.target.value

            setUser({...user , [name]:value})
    }

    const login = async (e) =>{
      e.preventDefault();

      const{email , password}=user;
      const res =  await fetch('http://localhost:3001/signin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify({
                email:email, 
                password: password
            })
        });
        const data = await res.json();
        
      if( res.status === 400 || !data ){
          window.alert("Enter all the Credentials");
      }
      else if( res.status === 401 ){
          window.alert("Invalid Credentials");
      }
      else{
           window.alert("Login Successful");

          navigate("/")
      }



    }


  return (
    <>
    
    {/* <img className="bg" alt="" src={require('./Polka.jpg')} /> */}
    
    <div className="form-container signIncontainer" >



    <form action="post">

        <div className='container signupHead'>
            <h2>Login In</h2>

 
        <input type="text" className='signupInput' onChange={handleLogin} name="email" value={user.email} id="email" placeholder="Email"/>

        <input type="password" className='signupInput' onChange={handleLogin} name="password" value={user.password}  id="password" autoComplete="off" placeholder="Password"/>

            <button className="btn btn-dark loginButton" onClick={login}>Submit</button>
            
<div className="p">

         <p>Don't have an Account?<Link to="/signup"> SignUp here</Link> </p>
</div>
        </div>
    </form>


</div>
    
    </>
  )
}

export default Login    
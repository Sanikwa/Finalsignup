import React, {useState} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"



function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        
        try{

            await axios.post("http://localhost:3000/",{
                email,password
            })
            .then(res=>{
                if(res.data==='exist'){
                    history("/home",{state:{id:email}})

                
            }
            else if (res.data==="notexist") {
                alert("User has not signed up")
                
               
                }
            })
            .catch(e =>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }


    return (
        <div className="Login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder ="Email" name="" id=""/>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder ="Password" name="" id= ""/> 
                <input type="submit" onClick={submit}/>

            </form>
            <br />
            <p>OR</p>
            
            <Link to= "/Login">Kingdom Signup Page</Link>

        </div>
    )
}

export default Login 

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const history = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function submit(e) {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:3000/login", {
//         email,
//         password,
//       });

//       if (res.data === "exist") {
//         history("/home", { state: { id: email } });
//       } else if (res.data === "notexist") {
//         alert("User has not signed up");
//       }
//     } catch (e) {
//       console.log(e);
//       alert("An error occurred while logging in.");
//     }
//   }

//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <form onSubmit={submit}>
//         <input
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           name="email"
//           id="email"
//         />
//         <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           name="password"
//           id="password"
//         />
//         <button type="submit">Login</button>
//       </form>
//       <br />
//       <p>OR</p>
//       <Link to="/signup">Kingdom Signup Page</Link>
//     </div>
//   );
// }

// export default Login;

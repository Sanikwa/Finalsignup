
import React, {useState} from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"



function Signup() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        
        try{

            await axios.post("http://localhost:3000/signup",{
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
                console.log();
            })

        }
        catch(e){
            console.log(e);

        }
    }


    return (
        <div className="signup">

            <h1>Signup</h1>

            <form action="POST">
                <input type="Email" onChange={(e)=>{setEmail(e.target.value)}} placeholder ="Email" name="" id=""/>
                <input type="Password" onChange={(e)=>{setPassword(e.target.value)}} placeholder ="Password" name="" id= ""/> 
                <input type="Submit" onClick={submit}/>

            </form>
            <br />
            <p>OR</p>
            
            <Link to= "/">Login Page</Link>

        </div>
    )
}

export default Signup 
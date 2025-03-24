import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Signin = ({setUser}) => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate()

    // function that handle the submitted form
    const submit=async(e)=>{
        // prevent reload when submit is clicked
        e.preventDefault()
        // we update the loading hook
        setLoading("Hang on as we log you in")
        // try and catch to handle the error incase it occurs when signing in
        try {

            // prepare our FormData object
            const data=new FormData()
            // append updated hooks to our object
            data.append("email",email)
            data.append("password",password)

            // we use axios to access request methods post,get ets
            // post requires arguments url as string and data as FormData
            // async allow function submit to pause untill there is a response from the api
            //await tells submit function to hold on till it recieve the response
            const response = await axios.post("https://jobsimba.pythonanywhere.com/api/signin",data)

            // we make a decison based on the api response
            console.log(response.data)
            // we are checking if the response has a user 
            //if it has a user that means the login was successfull and we get redirected to get product component
            if (response.data.user){
                // store the logged in in the browser 
                // localStorage uses the set item function which has two parameters
                // the key as a string and value as a string
                localStorage.setItem("user",JSON.stringify(response.data.user))
                setUser(response.data.user)
                
                navigate("/")
            }else{
                // if the response had no user means the credentials dint match 
                // first we clear the loading hook
                setLoading("")
                // update the error hook with message from api
                setError(response.data.message)
            }


            
        } catch (error) {
            // clear loading incase there is an error
            setLoading("")   
            // update error hook with the error
            setError(error.message)         
        }
    }
  return (
    <div className="row justify-content-center mt-4 text-center">
        <nav className="mt-3 mb-1 p-3 text-center">
            <Link className="btn btn-dark me-3" to={"/"}>Home</Link>            
            <Link className="btn btn-dark me-3" to={"/addproduct"}>Add Products</Link>            
            <Link className="btn btn-secondary me-3" to={"/signin"}>Sign In</Link>            
            <Link className="btn btn-dark me-3" to={"/signup"}>Sign Up</Link>            
        </nav> 
        <hr /> 
        <div className="col-md-5 card shadow p-4">
            <h2>Signin</h2>
            <form onSubmit={submit}>
                <span className="text-info">{loading}</span>
                <span className="text-danger">{error}</span>
                <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />   <br />

                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />

                <button type="submit" className="btn btn-primary w-100">Signin</button> <br />

            </form>
            <p>Dont have an Acount? <Link to={"/signup"}>Signup</Link></p>
        </div>
    </div>
  )
}

export default Signin
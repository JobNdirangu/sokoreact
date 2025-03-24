import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Signup = () => {
    // initilized useState
    const [username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    const navigation=useNavigate()
    
    // Function to handle our submission 
    const submit=async (e)=>{
        // is to prevent the page from reloading once submit has been clicked
        e.preventDefault()
        //we update our loading hook for user to see the data is being uploaded
        setLoading("Please wait as your data gets uploaded")

        // try and catch incase there is an error during formdata submission
        try {            
            // we creating formdata object to carry our updated hooks
            const data =new FormData()
            // we append our values to our object Form
            data.append("username",username)
            data.append("email",email)
            data.append("phone",phone)
            data.append("password",password)
            
            // send our data using axios
            // axios is able to use request methods such post, get, put, patch etc
            
            const response=await axios.post("https://jobsimba.pythonanywhere.com/api/signup",data)
            setLoading("")
            setError("")
            setSuccess(response.data.message)

            // clear hooks when the signup is a success
            setUsername("")
            setEmail("")
            setPhone("")
            setPassword("")

            setTimeout(()=>navigation("/signin"),3000)
            
        } catch (error) {
            setLoading("")
            setError("Something went wrong try again later, check you network connection")
        }       

    }
   

  return (
        <div className="row justify-content-center mt-4">
            <nav className="mt-3 mb-1 p-3 text-center">
            <Link className="btn btn-dark me-3" to={"/"}>Home</Link>            
            <Link className="btn btn-dark me-3" to={"/addproduct"}>Add Products</Link>            
            <Link className="btn btn-dark me-3" to={"/signin"}>Sign In</Link>            
            <Link className="btn btn-secondary me-3" to={"/signup"}>Sign Up</Link>            
        </nav> 
        <hr /> 
            <div className="col-md-6 card shadow p-4 text-center">
                <h2>Sign Up</h2>
                {/* when the form is submitted [onSubmit] it invoke the submit function */}
                <form onSubmit={submit}>
                    <span className="text-info">{loading}</span>
                    <span className="text-success">{success}</span>
                    <span className="text-danger">{error}</span>
                    <input type="text" placeholder="Enter Username" className="form-control" onChange={(e)=>setUsername(e.target.value)} value={username}  /> <br />
                    {username}                    
                    <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
                    {email}
                    <input type="tel" placeholder="Enter phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br />
                    {phone}
                    <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
                    {password}
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
                <p>You have an Account? <Link to={'/signin'}>Sigin</Link></p>
            </div>
        </div>
  )
}

export default Signup
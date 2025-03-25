import axios from "axios"
import {  useState } from "react"
import { Link } from "react-router-dom"
const Addproduct = () => {
  // initilizing hooks
  const[product_name, setProductname]=useState("")
  const[product_description,setProductdescription]=useState("")
  const[product_cost,setProduct_cost]=useState("")
  const[product_photo,setProduct_photo]=useState("")

  // hooks for user information
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // fuct to handle submit
  const submit = async (e) => {
    // prevent reload
    e.preventDefault()
    setLoading("Please Wait ...")
    
    // prepare object FormData
    const data = new FormData()
    // append updated hooks
    data.append("product_name",product_name)
    data.append("product_description",product_description)
    data.append("product_cost",product_cost)
    data.append("product_photo",product_photo)

    try {
      // send data to api
      const response = await axios.post("https://jobsimba.pythonanywhere.com/api/add_product",data)

      setLoading("")
      setError("")
      setSuccess(response.data.message)

    } catch (error) {
      setLoading("")
      setError(error.message)      
    }
    
  }

  return (
    <div className="row justify-content-center mt-4">
       
      <div className="card shadow col-md-6  p-4 text-center">
        <h3>Add Products</h3>
        <form onSubmit={submit}>
          <span className="text-info ">{loading}</span>
          <span className="text-success ">{success}</span>
          <span className="text-danger ">{error}</span>

          <input type="text" className="form-control" placeholder="Enter product name" value={product_name} onChange={(e)=>setProductname(e.target.value)} /> <br />
          {product_name}

          <textarea className="form-control" placeholder="Product Description" value={product_description} onChange={(e)=>setProductdescription(e.target.value)}></textarea> <br />
          {product_description}

          <input type="number"  className="form-control" placeholder="Product Cost" value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)}/> <br />
          {product_cost}

          <label htmlFor="">Browse/ Upload product photo</label>
          <input type="file"  className="form-control"  accept="image/*" onChange={(e)=>setProduct_photo(e.target.files[0])}/><br />

          <button type="submit" className="btn btn-primary w-100">Upload Product</button>
        </form>
      </div>
    </div>
  )
}

export default Addproduct
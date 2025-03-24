import { Link } from 'react-router-dom'

const Navbarcomp = ({search,setSearch,user,setUser}) => {

    // const filteredProducts = products.filter(product =>
    //     product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     product.product_description.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    
    const signOut = () => {
        localStorage.removeItem("user") 
        setUser("")      
    }

  return (
    <section className="row">
            <div className="col-md-12">
                {/* <!-- nav tag will carry all the content of the navbar --> */}
                 <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link href="#" className="navbar-brand"><b>SokoGarden - Buy & Sell Online</b></Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- div that will carry all our nav links --> */}
                     <div className="collapse navbar-collapse" id="navbarcollapse">
                        <div className="navbar-nav  w-100">
                            <Link  to="/" className="nav-link active">Home</Link>
                            
                            {   user? ( 
                                    <>  
                                        <Link to={"/addproduct"} className="nav-link">Add Products</Link>
                                        <Link className="nav-link btn-link me-3">Welcome: {user.username}</Link>
                                        <button className="nav-link btn-link text-danger" onClick={signOut}>Sign Out</button>
                                    </>
                                ):
                                (
                                    <>
                                        <Link to={"/signin"} className="nav-link">Sign in</Link>
                                        <Link to={"/signup"} className="nav-link">Sign up</Link>
                                    </>

                                )
                            }
                            

                            <div className="ms-auto d-flex align-items-center">
                                
                                <form className="d-flex" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                    <button className="btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>                            

                        </div>
                     </div>

                 </nav>

            </div>

         </section>
  )
}

export default Navbarcomp
import React from "react";
import { Link } from "react-router-dom";


function Home () {
    return (  
        <div>
           <button type="submit"> <Link to = '/create'> Let's create order </Link>  </button>
           <button type="submit"> <Link to ='/orders'> Check all avaliable orders </Link> </button>
           <button type="submit"> <Link to ='/myorders/:id'> Check my orders  </Link> </button>
           <button type="submit"> <Link to ='/add'>  Let's create a suggestion</Link> </button>
           <button type="submit"> <Link to ='/suggestions'> Check all avaliable suggestions</Link> </button>
           <button type="submit"> <Link to ='/mysuggestions/:id'>  Check my suggestions </Link> </button>
            <h1>Here is our orders website</h1>
            <h2>Here you can leave your order and wait for somebody's response</h2>
            
        </div>

    );
}

export default Home ;
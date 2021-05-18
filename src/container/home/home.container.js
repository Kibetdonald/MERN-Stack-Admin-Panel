import React from 'react'
import AddCategory from '../../components/addcategory.component'
import Addproduct from '../../components/addproduct.component'
import Home from '../../components/home.component'
import Blog from '../../components/include/blog.component'
import Orders from '../../components/orders.component'
import Manage from '../../components/product.component'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from '../../components/include/side_bar'
import Header from '../../components/include/header'

function HomeContainer(){

  return(
    <Router>
    
    <Header/>
    
    <Sidebar/>
  
   
   <div className="Container">
       <Route path="/" exact component={Home} />
       <Route path="/orders" component={Orders} />
       <Route path="/manage" component={Manage}/>
       <Route path="/Blog" component={Blog} />
      
     
       <Route path="/addproduct" component={Addproduct} />
       <Route path="/addcategory" component={AddCategory} />
   </div>


    
   
  </Router>
   )
  }


export default HomeContainer
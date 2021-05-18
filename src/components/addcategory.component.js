import {React, Component} from "react";

import axios from "axios";

export default class AddCategory extends Component{
    constructor(props){
        super(props);
		
		
        this.state = {
			prd_cat: '',

		}
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
		onChangeCategory(event){
			this.setState({
				prd_cat: event.target.value
			});
						
		}
		onSubmit(event){
			event.preventDefault();
				let cate ={
					prd_cat: this.state.prd_cat
			}
			console.log(cate);
			
			axios.post('http://localhost:2000/categories/add', cate)
			.then(res => console.log(res.data));

			
            
			this.setState({
				prd_cat: ''
			})
		}


    render(){
        return(
            <div className="page-wrapper">
			
            <div className="content container-fluid">
                
                
                
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Category</h3>
                            
                        </div>
                    </div>
             
                
            <div className="row">
						<div className="col-md-6">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Add Category</h4>
								</div>
								<div className="card-body">
                                <form onSubmit={this.onSubmit}>
										<div className="form-group">
											<label>Category Title</label>
											<input 
											type="text"
											value = {this.state.prd_cat}
											 onChange = {this.onChangeCategory}
											 className="form-control" 
											 required/>
										    </div>
										
										<div className="text-right">
											<input type="submit"
											 className="btn btn-rounded btn-outline-danger"
											 value = "Submit"
											 />
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Manage Category</h4>
								</div>
								<div className="card-body">
									
                                    <div className="table-responsive">
										<table className="table table-nowrap mb-0">
                                            <tr>
		<td>Category_id</td>
		<td>Cat_Title</td>
		<td>Update</td>
	</tr>

	</table>
								</div>
							</div>
						</div>
					</div>
                    </div>
                    </div>
                    </div>
					
					  
       
          

        );}}
         
    
import React, { Component } from 'react';
import "../signup.css";

class SignUp extends Component {

  state = {
    name: "",
    email: "",
    username: "",
    password: ""
  };

change = (event) =>{
  const {name, value} = event.target;
  this.setState({[name] : value});
}
click = (event) =>{
  event.preventDefault();
  console.log(this.state);
}

  render() {
    return (
      <div className="container">
    			<div className="row main">
    				<div className="panel-heading">
    	               <div className="panel-title text-center">
    	               		<h1 className="title">Fantasy League</h1>
    	               		<hr />
    	               	</div>
    	            </div>
    				<div className="main-login main-center">
    					<form className="form-horizontal" method="post" action="#">

    						<div className="form-group">
    							<label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
    							<div className="cols-sm-10">
    								<div className="input-group">
    									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
    									<input type="text" className="form-control" name="name" id="name"  onChange={this.change} placeholder="Enter your Name"/>
    								</div>
    							</div>
    						</div>

    						<div className="form-group">
    							<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
    							<div className="cols-sm-10">
    								<div className="input-group">
    									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
    									<input type="text" className="form-control" name="email" id="email" onChange={this.change} placeholder="Enter your Email"/>
    								</div>
    							</div>
    						</div>

    						<div className="form-group">
    							<label htmlFor="username" className="cols-sm-2 control-label">Username</label>
    							<div className="cols-sm-10">
    								<div className="input-group">
    									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
    									<input type="text" className="form-control" name="username" id="username" onChange={this.change} placeholder="Enter your Username"/>
    								</div>
    							</div>
    						</div>

    						<div className="form-group">
    							<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
    							<div className="cols-sm-10">
    								<div className="input-group">
    									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
    									<input type="password" className="form-control" name="password" id="password" onChange={this.change} placeholder="Enter your Password"/>
    								</div>
    							</div>
    						</div>

    						<div className="form-group">
    							<label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
    							<div className="cols-sm-10">
    								<div className="input-group">
    									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
    									<input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
    								</div>
    							</div>
    						</div>

    						<div className="form-group ">
    							<button type="button" className="btn btn-primary btn-lg btn-block login-button"
                  onClick={this.click}>Register</button>
    						</div>
    						<div className="login-register">
    				            <a href="/login">Login</a>
    				         </div>
    					</form>
    				</div>
    			</div>
    		</div>
    );
  }
}

export default SignUp;

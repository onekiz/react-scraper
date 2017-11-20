import React, { Component } from 'react';


class LogIn extends Component {

  state = {
    books: 0,
    password: "",
    author: "",
    synopsis: ""
  };

change = (event) =>{
  const {name, value} = event.target;
  this.setState({[name] : value});
  this.setState({books : this.state.books+1});
  console.log(this.state);
}
click = (event) =>{
  event.preventDefault();
  console.log("click");

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
                  <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                      <input type="text" className="form-control" name="email" id="email" onChange={this.change} placeholder="Enter your Email"/>
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


                <div className="form-group ">
                  <button type="button" className="btn btn-primary btn-lg btn-block login-button"
                  onClick={this.click}>Register</button>
                </div>
                <div className="login-register">
                        <a href="/signup">Sign Up</a>
                     </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default LogIn;

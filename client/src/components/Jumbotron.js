import React from 'react';

const divstyle = {
  textAlign: "center"
};
const Jumbotron = (props) => {

    return (
      <div style={divstyle} className="jumbotron">
        <header className="App-header">
          <h1 className="title">Welcome to Event Manager</h1>
        </header>
      </div>
    );
  }

export default Jumbotron;

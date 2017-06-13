import React, { Component } from 'react';

class TextBox extends React.Component {
  render () {
    return (
      <div className="text-box">
        <div className="col-md-6">
          <h3>Markdown</h3>
          <div className="text-field">
            <textarea value={this.state.value}
                      onChange={this.handleChange}/>
            </div>
          </div>
      </div>
    );
  }
}

export default TextBox;

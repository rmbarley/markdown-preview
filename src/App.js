import React, {Component} from 'react';
import marked from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '# Hello\n## Welcome\n[My Portfolio](http://rmbarley.github.io)'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Markdown</h3>
              <div className="text-field">
                <textarea value={this.state.value} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Preview</h3>
              <div dangerouslySetInnerHTML={ {__html: marked(this.state.value) } }
                   className="output">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

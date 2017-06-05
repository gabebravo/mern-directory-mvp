import React, { Component } from 'react';
import DirectoryContainer from '../containers/DirectoryContainer'
import axios from 'axios';

class App extends Component {

  state = {
    directory: []
  }

  componentDidMount() {
    axios.get('/office')
    .then(response => {
      this.setState({
        directory: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {
          this.state.directory.length > 0 && <DirectoryContainer data={this.state.directory} />
        }
      </div>
    );
  }
}

export default App;

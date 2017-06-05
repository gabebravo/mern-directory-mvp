import React, { Component } from 'react';
import Listing from '../components/Listing';

class DirectoryContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      currentDirectory: {},
      counter: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 3000);
  }

  componentWillUnmount(){ // frees the setInterval() from continuously running
    clearInterval(this.interval); // otherwise it would keep running causing memory leak
  }

  onTick = () => {
    let count = this.state.counter, data = this.state.data;
    switch (count) {
      case 3 :
        this.setState({ counter: 0 });
        this.setState({ currentDirectory: data[this.state.counter] });
      return;
      default:
        this.setState({ currentDirectory: data[this.state.counter] });
        this.setState({ counter: count + 1 });
    }
  }

  render(){
    let currDir = Object.keys(this.state.currentDirectory).length === 0 ? { floor: 'loading'} : this.state.currentDirectory;
    return(
      <Listing listing={currDir} />
    );
  }
}

export default DirectoryContainer;

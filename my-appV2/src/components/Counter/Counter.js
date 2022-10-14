import React from 'react'
import './Counter.css'

import Controls from './Controls'
import Value from './Value'

class Counter extends React.Component {
  static defaultProps = {
    initialValue:10,
  }

  state = {
    value:this.props.initialValue,
  }
  //=== то что выше можно так
  // state = {
  //   value: 50;
  // }

  // handleIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       value: prevState.value +2
  //     }
  //   });
  //}

  //=== или так
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 2
    }));
  }
  handleDicrement = () => {
    this.setState(prevState => ({
    value: prevState.value - 2
  }));
  }

  render() {
    const{value} = this.state
    return (
      <div className="Counter">
        {/* <span className="Counter__value">{this.state.value}</span> */}
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDicrement={this.handleDicrement}
        />
      </div>
    )
  }
}

export default Counter
import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component{
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: ! prevState.visible,
    }))
 }
// ниже то как мі делали появл/исчезанием дива. заменили на то что с верху
  // show = () => {
  //   this.setState ({visible:true})
  // }
  //  hide = () => {
  //   this.setState ({visible:false})
  // }

  render() {
    const {visible} = this.state
    return (
      <div className='Dropdown'>
        <button type='button' className="Dropdown__toggle" onClick={this.toggle}>
          {visible ? "Скрыть" : "Показать"}
        </button>
         {/* <button type='button' className="Dropdown__toggle" onClick={this.hide}>
          Скріть
        </button> */}

        {visible && <div className='Dropdown__menu'>Выпадающее меню</div>}

      </div>
    )
  }
}

export default Dropdown
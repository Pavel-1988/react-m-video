import React, { Component } from 'react'
import shortid from 'shortid';


class Form extends Component{

  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();
 //метод которій обновитт состояние, добовляет в стейт все что пишется в инпуте
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({[name]:value,})
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.props.onSub(this.state)
    this.reset()
  }

  handleLicenceChange = e => {
    console.log(e.currentTarget.checked);

    this.setState({ licence: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({name: '', tag:''})
  }
  

  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Имя
          <input
            type="text"
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
         <br />
        <label htmlFor="">
          Прозвище
          <input
            type="text"
            name='tag'
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
            
        </label>

         <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            cheked={this.state.experience === 'junior'}
          />
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            cheked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            cheked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
          <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Согласен с условием
        </label>

        <button type='submit' disbled={!this.state.licence} >Отправить</button>
     </form>
    )
  }

}
export default Form
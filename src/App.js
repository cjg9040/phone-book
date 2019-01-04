import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
class App extends Component {
  id =2
  state ={
    information: [
      {
        id:0,
        name: '최재강',
        phone:'010-9040-6282'
      },
      {
        id:1,
        name:'허채림',
        phone:'010-7195-8847'
      }
    ],
    keyword: ''
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }
  handleCreate = (data) =>{
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !==id)
    })
  }
  handleUpdate = (id,data) =>{
    const {information} = this.state;
    this.setState({
      information: information.map(
        info =>id === info.id
          ?{...info,...data}
          :info
        )
    })
  }

  render() {
    const {information, keyword} =this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !==-1
      );
    return (
      <div>
        <PhoneForm 
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder ="검색 할 이름?"
            onChange ={this.handleChange}
            value ={keyword}
            />
        </p>
        <hr />
        <PhoneInfoList 
          data ={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;

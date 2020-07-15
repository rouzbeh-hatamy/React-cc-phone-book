import React, { Component } from 'react';
import Table from '../Table/table'
import Form from '../form/Form'
import './styleContainer.scss'
class Container extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "ali",
                surname: "ahmadi",
                phoneNumber: "09333333",
                email: "ali@gmail.com",
                address: "Tehran",
                birthday: "02/02/02",
                details: "komij",
            },
            {
                id: 2,
                name: "reza",
                surname: "ahmadi",
                phoneNumber: "09333333",
                email: "ali@gmail.com",
                address: "Tehran",
                birthday: "02/02/02",
                details: "komij",
            },{
                id: 3,
                name: "hamid",
                surname: "ahmadi",
                phoneNumber: "09333333",
                email: "ali@gmail.com",
                address: "Tehran",
                birthday: "02/02/02",
                details: "komij",
            },
        ],
        search: ''
    };
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleDelete = (id) => {
        let { contacts } = this.state;
        this.setState({contacts: contacts.filter(contact => contact.id !== id) })
    }
    
    render() {
        const { search } = this.state;
        let filtered = this.state.contacts.filter(item => item.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
        return (
            <div className="root">
                <input type="text" name="search" onChange={this.handelChange} value={search} placeholder="search" />
                <div className="all">
                    <Table contacts={filtered} handleDelete={this.handleDelete} />
                    <Form />
                </div>
            </div>
        );
    }
}

export default Container;
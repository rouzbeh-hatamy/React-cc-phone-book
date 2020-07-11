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
            },
        ],
        search: ''
    };
    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        const { search } = this.state;
        let filtered = this.state.contacts.filter(item => item.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
        return (
            <div className="root">
                <input type="text" name="search" onChange={this.handelChange} value={search} />
                <div className="all">
                    <Table contacts={filtered} />
                    <Form />
                </div>
            </div>
        );
    }
}

export default Container;
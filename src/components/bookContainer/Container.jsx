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
        ],
        search: ''
    };
    render() {
        const { search } = this.state;
        return (
            <div className="root">
                <input type="text" name="search" onChange={this.handelChange} value={search} />
                <div className="all">
                    <Table contacts={this.state.contacts} />
                    <Form />
                </div>
            </div>
        );
    }
}

export default Container;
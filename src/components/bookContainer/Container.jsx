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
            {
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
        search: '',
        showForm: false,
        animateForm: null,
    };

    handelChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleDelete = (id) => {
        let { contacts } = this.state;
        this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
        this.reorderId();
    }
    reorderId = () => {
        // pashmaaam
        this.setState(currentState => ({ contacts: currentState.contacts.map((item, index) => ({ ...item, id: index + 1 })) }))
    }
    handleAdd = (obj) => {
        this.setState({ contacts: [...this.state.contacts, obj] })
        this.reorderId();
    }
    toggleForm = () => {
        if (this.state.showForm) {
            this.setState({ animateForm: false })

            setTimeout(() => {
                this.setState({ showForm: !this.state.showForm })
            }, 1000)
        } else {
            this.setState({ animateForm: true })
            this.setState({ showForm: !this.state.showForm })

        }
    }
    render() {
        const { search } = this.state;
        let { contacts, showForm, animateForm } = this.state;
        let filtered = this.state.contacts.filter(item => item.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
        return (
            <div className={`contain ${animateForm ? 'open-Form' : 'hide-form'}`}>
                <input type="text" name="search" onChange={this.handelChange} value={search} placeholder="search" />
                <div className="all">
                    <Table contacts={filtered} handleDelete={this.handleDelete} showForm={this.state.showForm} toggleForm={this.toggleForm} />

                    {
                        showForm ? <Form handleAdd={this.handleAdd} toggleForm={this.toggleForm} lastId={contacts[contacts.length - 1].id} /> : null

                    }
                </div>
            </div>)
    }
}

export default Container;
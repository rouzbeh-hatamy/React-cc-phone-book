import React, { Component } from 'react';
import Table from '../Table/table'
import Form from '../form/Form'
import './styleContainer.scss'
class Container extends Component {
    state = {
        contacts: [],
        search: '',
        showForm: false,
        animateForm: null,
        editContact:[]
    };
    componentDidMount(){
        fetch('https://jsonplaceholder.ir/users/')
        .then(response => response.json())
        .then(data =>{this.setState({contacts:data})
    })
    }
    componentWillUpdate(){

    }
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
    handleEdit=(contact)=>{
        this.toggleForm();
        this.setState({editContact:contact})
    }
    updateContact=(contact)=>{
        let tempContact = this.state.contacts;
        tempContact.map(item => {if(item.id===contact.id){
            item.id=contact.id
            item.name =contact.name
            item.username=contact.username
            item.phone=contact.phone
            item.email=contact.email
            item.company=contact.company
            item.website=contact.website
            return item;
        }else return item})
        this.setState({contacts:tempContact})
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
        let { contacts, showForm, animateForm,editContact } = this.state;
        let filtered = this.state.contacts.filter(item => item.name.toLowerCase().startsWith(this.state.search.toLowerCase()))
        return (
            <div className={`contain ${animateForm ? 'open-Form' : 'hide-form'}`}>
                <input type="text" name="search" onChange={this.handelChange} value={search} placeholder="search" />
                <div className="all">
                    <Table contacts={filtered} handleDelete={this.handleDelete} handleEdit={this.handleEdit} showForm={this.state.showForm} toggleForm={this.toggleForm} />

                    {
                        showForm ? <Form contacts={contacts} updateContact={this.updateContact} handleAdd={this.handleAdd} editContact={editContact} toggleForm={this.toggleForm} lastId={contacts[contacts.length - 1].id} /> : null

                    }
                </div>
            </div>)
    }
}

export default Container;
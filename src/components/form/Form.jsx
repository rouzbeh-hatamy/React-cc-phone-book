import React, { Component } from 'react';
import './Form.scss';
import Swal from 'sweetalert2';

class Form extends Component {
    state = {
        id:0,
        name: '',
        username: '',
        phone: '',
        email: '',
        company: '',
        website: '',
        ids: null
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    }
    componentDidMount() {
        const { name, username, phone, email, company, website, id } = this.props.editContact
        
        this.setState({ name, username, phone, email, company, website, id })
    }
    
    componentWillUpdate(){
        let ids = this.props.contacts.map(item => item.id)
        if(this.state.ids ===null){
        this.setState({ids:ids})}
    }
    
    handlesubmit = (event) => {
        event.preventDefault();
        const { id, name, username, phone, email, company, website, ids } = this.state
        const newContact = { id, name, username, phone, email, company, website }
        if ((name && username && phone && email && company && website) === '') {
            alert(' form cannot be empty')
        } else if (ids.includes(newContact.id)) {
            this.props.updateContact(newContact)
            this.props.toggleForm()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'به روز رساني شد',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            this.props.handleAdd(newContact)
            this.props.toggleForm();
        }

    }
    render() {
        const { name, username, phone, email, company, website } = this.state
        return (
            <div id="form">
                <form id="form_contact" onSubmit={this.handlesubmit}>
                    <div className="form-group">
                        <label htmlFor="id_name">name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_name"
                            name="name"
                            onChange={this.handleChange} value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_last_name">username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_last_name"
                            name="username"
                            onChange={this.handleChange} value={username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_Phone_number">phone number</label>
                        <input
                            type="phone"
                            className="form-control"
                            id="id_Phone_number"
                            name="phone"
                            onChange={this.handleChange} value={phone}
                        /></div>
                    <div className="form-group">
                        <label htmlFor="id_email">email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="id_email"
                            name="email"
                            onChange={this.handleChange} value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="id_company">company name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_company"
                            name="company"
                            onChange={this.handleChange} value={company}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_website">website</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_website"
                            name="website"
                            onChange={this.handleChange} value={website}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
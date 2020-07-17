import React, { Component } from 'react';
import './Form.scss'

class Form extends Component {
    state = {
        name: '',
        username: '',
        phone: '',
        email: '',
        company: '',
        website: '',
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    }
    handlesubmit = (event) => {
        event.preventDefault();
        const { name, username, phone, email, company, website } = this.state
        if ((name && username && phone && email && company && website) === '') {
            alert(' form cannot be empty')
        } else {
            const id = this.props.lastId + 1
            const newContact = { id, name, username, phone, email, company, website }
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
import React, { Component } from 'react';
import './Form.scss'

class Form extends Component {
    state = {
        name: '',
        surname: '',
        phoneNumber: '',
        email: '',
        address: '',
        birthday: '',
        details: '',
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });

    }
    handlesubmit = (event) => {
        event.preventDefault();
        const { name, surname, phoneNumber, email, address, birthday, details } = this.state
        if ((name && surname && phoneNumber && email && address && birthday && details) === '') {
            alert(' form cannot be empty')
        } else {
            const id = this.props.lastId + 1
            const newContact = { id, name, surname, phoneNumber, email, address, birthday, details }
            this.props.handleAdd(newContact)
            this.props.toggleForm();
        }

    }
    render() {
        const { name, surname, phoneNumber, email, address, birthday, details } = this.state
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
                        <label htmlFor="id_last_name">surname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_last_name"
                            name="surname"
                            onChange={this.handleChange} value={surname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_Phone_number">phone number</label>
                        <input
                            type="phone"
                            className="form-control"
                            id="id_Phone_number"
                            name="phoneNumber"
                            onChange={this.handleChange} value={phoneNumber}
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
                        <label htmlFor="id_address">address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_address"
                            name="address"
                            onChange={this.handleChange} value={address}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_birthday">date of birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="id_birthday"
                            name="birthday"
                            onChange={this.handleChange} value={birthday}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_details">details</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_details"
                            name="details"
                            onChange={this.handleChange} value={details}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
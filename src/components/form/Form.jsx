import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div id="form">
                <form id="form_contact">
                    <div className="form-group">
                        <label htmlFor="id_name">name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_name"
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_last_name">surname</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_last_name"
                            name="surname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_Phone_number">phone number</label>
                        <input
                            type="phone"
                            className="form-control"
                            id="id_Phone_number"
                            name="phoneNumber"
                        /></div>
                    <div className="form-group">
                        <label htmlFor="id_email">email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="id_email"
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_address">address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_address"
                            name="address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_birthday">date of birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="id_birthday"
                            name="birthday"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id_details">details</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_details"
                            name="details"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
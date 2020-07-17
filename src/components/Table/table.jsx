import React, { Component } from 'react';
import Tbody from '../tbody/Tbody'
import './TableStyle.scss'
class table extends Component {
   
   
    render() {
        const { contacts,showForm,toggleForm } = this.props
        return (
            <div id="table" className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead text-primary bg-light">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>username</th>
                            <th>phone number</th>
                            <th>email</th>
                            <th>company</th>
                            <th>website</th>
                            <th id="action">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((item) => (
                            <Tbody key={item.id} contact={item} handleDelete={() => this.props.handleDelete(item.id)} />))}
                    </tbody>
                </table>
                <button className="btn btn-outline-info mx-4 " onClick={toggleForm}>{showForm?'close':'add'}</button>
            </div>
        );
    }
}

export default table;
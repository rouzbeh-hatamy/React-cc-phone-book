import React, { Component } from 'react';
import Tbody from '../tbody/Tbody'
import './TableStyle.scss'
class table extends Component {
   
   
    render() {
        const { contacts } = this.props
        return (
            <div id="table" className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead className="thead text-primary bg-light">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>surname</th>
                            <th>phone number</th>
                            <th>email</th>
                            <th>address</th>
                            <th>date of birth</th>
                            <th>details</th>
                            <th id="action">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((item) => (
                            <Tbody key={item.id} contact={item} handleDelete={() => this.props.handleDelete(item.id)} />))}
                    </tbody>
                </table>
                <button className="btn btn-outline-info mx-4 ">add</button>
                <button className="btn btn-outline-dark mx-1 ">cancel</button>
            </div>
        );
    }
}

export default table;
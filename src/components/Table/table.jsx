import React, { Component } from 'react';
import Tbody from '../tbody/Tbody'
import './TableStyle.scss'
import SmallScreens from '../Mobile/SmallScreens'
class table extends Component {
   
   
    render() {
        const { contacts,showForm,toggleForm } = this.props
        const width = window.innerWidth
        return ( width >= 992?
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
                            <Tbody key={item.id} contact={item} handleEdit={this.props.handleEdit} handleDelete={() => this.props.handleDelete(item.id)} />))}
                    </tbody>
                </table>
                <button className="btn btn-success mx-4 " onClick={toggleForm}>{showForm?'close':'add'}</button>
            </div>: <div className="wrapper">{contacts.map((item)=>(<SmallScreens  key={item.id} contact={item} handleEdit={this.props.handleEdit} handleDelete={() => this.props.handleDelete(item.id)}/>))}</div>
        );
    }
}

export default table;
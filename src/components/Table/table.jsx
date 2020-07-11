import React, { Component } from 'react';
import Tbody from '../tbody/Tbody'

class table extends Component {
    render() {
        return (
            <div id="table" class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead class="thead text-primary bg-light">
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
                        <Tbody/>
                        </tbody>
                    </table>
                <button  class="btn btn-outline-info mx-4 ">add</button>
                <button  class="btn btn-outline-dark mx-1 ">cancel</button>
            </div>
        );
    }
}

export default table;
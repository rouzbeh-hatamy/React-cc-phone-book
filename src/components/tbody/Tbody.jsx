import React, { Component } from "react";

class Tbody extends Component {
  render() {
    const { contact } = this.props

    return (

      <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.username}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>{contact.company}</td>
        <td>{contact.website}</td>
        <td className="buttons"><button type="button" onClick={this.props.handleDelete} className="btn btn-danger">delete</button>
          <button type="button" className="btn btn-primary">edit</button> </td>
      </tr>

    );
  }
}

export default Tbody;

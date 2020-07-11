import React, { Component } from "react";

class Tbody extends Component {
  render() {
    const { contact } = this.props

    return (

      <tr key={contact.id}>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>{contact.surname}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>{contact.address}</td>
        <td>{contact.birthday}</td>
        <td>{contact.details}</td>
        <td className="buttons"><button type="button" className="btn btn-danger">delete</button>
          <button type="button" className="btn btn-primary">edit</button> </td>
      </tr>

    );
  }
}

export default Tbody;

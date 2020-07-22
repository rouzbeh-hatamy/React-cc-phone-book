import React, { Component } from "react";
import Swal from 'sweetalert2'

class Tbody extends Component {
  deleteItem=(name)=>{
    Swal.fire({
      title: ` مخاطب ${name} حذف شود؟`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'بله',
      cancelButtonText: 'خير'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          this.props.handleDelete(),
          'حذف شد!',
          'success'
        )
      }
    })
      
  }
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
        <td className="buttons"><button type="button" onClick={()=>this.deleteItem(contact.name)} className="btn btn-danger">delete</button>
          <button type="button" className="btn btn-primary">edit</button> </td>
      </tr>

    );
  }
}

export default Tbody;

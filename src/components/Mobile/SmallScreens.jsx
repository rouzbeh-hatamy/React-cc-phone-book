import React from 'react'
import './mobileStyle.scss'
import Swal from 'sweetalert2'

function SmallScreens(props) {
    const deleteItem=(name)=>{
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
              props.handleDelete(),
              'حذف شد!',
              'success'
            )
          }
        })
          
      }
        const { contact,handleEdit } = props
    return (
        <div className="card">
          <h3 className="title">{contact.name}</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="info">
              <div> نام : {contact.name}</div>
              <div> {contact.username} : نام کاربری</div>
              <div>شماره تلفن : {contact.phone}</div>
              <div> {contact.email} : ایمیل</div>
              <div>نام شرکت : {contact.company}</div>
              <div>{contact.website} : آدرس وبسایت</div>
              <div><button type="button" onClick={()=>deleteItem(contact.name)} className="btn btn-danger">delete</button>
          <button type="button" className="btn btn-primary" onClick={()=>handleEdit(contact)}>edit</button></div>
          </div>
        </div>
    )
}

export default SmallScreens

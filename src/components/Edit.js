import React from "react";

export default function Edit(props) {
  return (
    <form id="edit-box">
      <div id="edit-content">
        <h5>Edit User Information</h5>
        <p>Serial Number</p>
        <input
          type="number"
          id="edit-no"
          name="edit-no"
          value={props.id}
          onChange={props.handleInputChange}
          placeholder="ex.1 2 3..."
          required
        />

        <p>Name</p>
        <input
          type="text"
          id="edit-name"
          name="edit-name"
          value={props.uname}
          onChange={props.handleInputChange}
          required
        />

        <p>Phone</p>
        <input
          type="tel"
          id="edit-phone"
          name="edit-phone"
          value={props.phone}
          onChange={props.handleInputChange}
          placeholder="ex.02-12345678"
          required
        />

        <p>Email</p>
        <input
          id="edit-mail"
          name="edit-mail"
          type="email"
          value={props.email}
          onChange={props.handleInputChange}
          placeholder="ex.abc@gmail.com"
          required
        />

        <div class="btn-group">
          <input id="hidden-user-id" type="hidden" value="" />
          <button id="edit-cancel-btn" onClick={props.handleClose}>Cancel</button>
          <button id="edit-save-btn" onClick={ props.updateUser }>Save</button>
        </div>
      </div>
    </form>
  );
}

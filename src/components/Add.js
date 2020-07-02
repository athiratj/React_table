import React from "react";

class Add extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleAddUser}  id="add-box">
        <div id="add-content">
          <h5>Add User</h5>
          <p>Serial Number </p>
          <input
            type="number"
            id="add-no"
            name="id"
            value={this.props.newid}
            onChange={this.props.handleInputChange}
            placeholder="ex.1 2 3..."
            required
          />

          <p>Name </p>
          <input
            type="text"
            id="add-name"
            value={this.props.newuname}
            onChange={this.props.handleInputChange}
            name="uname"
            required
          />

          <p>Phone </p>
          <input
            type="tel"
            id="add-phone"
            name="phone"
            value={this.props.newphone}
            onChange={this.props.handleInputChange}
            placeholder="ex.02-12345678"
            required
          />

          <p>Email</p>
          <input
            type="email"
            id="add-mail"
            name="email"
            value={this.props.newemail}
            onChange={this.props.handleInputChange}
            placeholder="ex.abc@gmail.com"
            required
          />

          <div class="btn-group">
            <button type="submit" id="add-cancel-btn" onSubmit={this.props.handleCloseModal}>
              Cancel
            </button>
            <button type="submit" id="add-save-btn" value="Submit" onSubmit={this.props.handleCloseModal}>
              Save
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default Add;

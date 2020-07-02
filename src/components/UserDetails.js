import React from "react";

class UserDetails extends React.Component {
  
  render() {
    const userDetails = this.props.userDetails;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map(user => {
              return (
                <tr key={user.id} class="user-tr">
                <td data-label="No." class="no">
                  {user.id}
                </td>
                <td data-label="Name" class="name">
                  {user.uname}
                </td>
                <td data-label="Phone" class="phone">
                  {user.phone}
                </td>
                <td data-label="Email" class="mail">
                  {user.email}
                </td>
                <td data-label="edit">
                  <i
                    class="fas fa-edit edit-btn"
                    id="user1"
                  ></i>
                </td>
                <td data-label="delete">
                  <i
                    class="fas fa-trash-alt del-btn"
                    id="user1"
                  ></i>
                </td>
              </tr>
              );
              
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
}

export default UserDetails;

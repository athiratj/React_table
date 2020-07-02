import React from "react";
import UserDetails from "./UserDetails";
import Header from './Header';
import Add from "./Add";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      uname: "",
      phone: "",
      email: "",
      userDetails: [
        {
          id: "1",
          uname: "Muhammad Ali jinnah",
          phone: "1876",
          email: "aaa@gmail.com",
        },
        {
          id: "2",
          uname: "Allama Iqbal",
          phone: "1877",
          email: "aaa@gmail.com",
        },
        {
          id: "3",
          uname: "Ahmad Bilal",
          phone: "1992",
          email: "aaa@gmail.com",
        },
      ],
      addModal: false,
      editModal: false,
    };
  }

  handleAddUser = (e) => {
    e.preventDefault();

    let userDetails = [...this.state.userDetails];

    userDetails.push({
      id: this.state.id,
      uname: this.state.uname,
      phone: this.state.phone,
      email: this.state.email,
    });

    this.setState({
      userDetails,
      id: "",
      uname: "",
      phone: "",
      email: "",
    });
  };

  handleAddModal = () => {
    this.setState({ addModal: true });
  };

  handleEditModal = () => {
    this.setState({ editModal: true });
  };

  handleCloseModal = () => {
    this.setState({ addModal: false, editModal: false });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <Header handleAddModal={this.handleAddModal} />
        <UserDetails userDetails={this.state.userDetails} />
        <Add
          handleAddUser={this.handleAddUser}
          handleInputChange={this.handleInputChange}
          newid={this.state.id}
          newuname={this.state.uname}
          newphone={this.state.phone}
          newemail={this.state.email}
          addModal={this.state.addModal}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
export default Main;

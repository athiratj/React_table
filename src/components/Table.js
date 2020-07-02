import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      mobile: null,
      email: null,
      rows: [
        {
          name: "Muhammad Ali",
          mobile: "1234567890",
          email: "muhammad@gmail.com",
        },
        {
          name: "Abdulla Hasan",
          mobile: "1267856789",
          email: "abdulla@gmail.com",
        },
        {
          name: "Allama Iqbal",
          mobile: "5670984567",
          email: "allama@gmail.com",
        },
        {
          name: "Ahmad Bilal",
          mobile: "1234095678",
          email: "ahamad@gmail.com",
        },
        {
          name: "Aravind Baskar",
          mobile: "1278340956",
          email: "aravind@gmail.com",
        },
      ],
    };
  }
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleAddRow = () => {
    const item = {
      name: "",
      mobile: "",
      email: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };

  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th className="text-center"> No. </th>
                    <th className="text-center"> Name </th>
                    <th className="text-center"> Mobile </th>
                    <th className="text-center"> Email </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx + 1}</td>

                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name || ""}
                          onChange={this.handleChange(idx).bind(this)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="mobile"
                          value={this.state.rows[idx].mobile || ""}
                          onChange={this.handleChange(idx).bind(this)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="email"
                          value={this.state.rows[idx].email || ""}
                          onChange={this.handleChange(idx).bind(this)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx).bind(this)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={this.handleAddRow.bind(this)}
                className="btn btn-success float-left"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;

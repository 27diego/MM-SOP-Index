import React, { Component } from "react";
import "./ManageUsers.scss";
import "../../../components/Admin-Modal/AdminModal";
import AdminModal from "../../../components/Admin-Modal/AdminModal";

class ManageUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 0,
          name: "Isabel Savage",
          department: "QA",
          role: "Admin"
        },
        {
          id: 1,
          name: "Huff Patton",
          department: "QA",
          role: "User"
        },
        {
          id: 2,
          name: "Becky Marsh",
          department: "QA",
          role: "Admin"
        },
        {
          id: 3,
          name: "Gilda Bruce",
          department: "QA",
          role: "User"
        },
        {
          id: 4,
          name: "Ester Chang",
          department: "QA",
          role: "Admin"
        },
        {
          id: 5,
          name: "Castillo Moody",
          department: "QA",
          role: "User"
        },
        {
          id: 6,
          name: "Rosemary Griffith",
          department: "QA",
          role: "Admin"
        },
        {
          id: 7,
          name: "Jackie Mosley",
          department: "QA",
          role: "User"
        },
        {
          id: 8,
          name: "Cummings Atkinson",
          department: "QA",
          role: "Admin"
        },
        {
          id: 9,
          name: "Kay Romero",
          department: "QA",
          role: "User"
        },
        {
          id: 10,
          name: "Gilda Bruce",
          department: "QA",
          role: "User"
        },
        {
          id: 11,
          name: "Ester Chang",
          department: "QA",
          role: "Admin"
        },
        {
          id: 12,
          name: "Castillo Moody",
          department: "QA",
          role: "User"
        },
        {
          id: 13,
          name: "Rosemary Griffith",
          department: "QA",
          role: "Admin"
        }
      ],
      currentAdmin: "Maritza",
      count: 10,
      showModal: false,
      modalPosition: {}
    };

    this.myRef = React.createRef();
    this.menus = [];
  }

  handleModal = () => {
    let condition = this.state.showModal;

    condition
      ? this.setState({ showModal: false })
      : this.setState({ showModal: true });
  };

  toggle = () => {
    const {
      top,
      bottom,
      right,
      left
    } = this.menus.undefined.getClientRects()[0];

    console.log(
      this.menus.undefined.offsetTop,
      this.menus.undefined.offsetLeft
    );

    this.setState({
      modalPosition: {
        top,
        bottom,
        right,
        left
      }
    });

    this.handleModal();
  };

  render() {
    return (
      <div className="adminDash">
        <div className="aheader">
          <h3 className="aheader__title">SOP Index</h3>
          <span className="aheader__futureLink">Users</span>
          <span className="aheader__admin">{this.state.currentAdmin}</span>
        </div>
        <div className="content">
          <div className="panel">
            <h3 className="panel__header">Users</h3>
            <ul className="panel__list">
              <li className="panel__item">Active Members</li>
              <li className="panel__item">Waiting Approval</li>
            </ul>
          </div>
          <div className="users">
            <div className="Uheader">
              <span className="Uheader__userCnt">{`${this.state.count} members`}</span>
              <button className="Uheader__btn">+ Add Member</button>
            </div>
            <div className="usersSection">
              {this.state.users.map(user => (
                <div className="user" key={user.id}>
                  <div className="user__name">
                    <span>{user.name}</span>
                  </div>
                  <div className="user__role">
                    <span>{user.role}</span>
                  </div>
                  <div
                    className="user__menu"
                    // ref={this.myRef}
                    ref={menus => (this.menus[this.key] = menus)}
                    onClick={this.toggle}
                  >
                    <div className="user__menu-dot">&nbsp;</div>
                    <div className="user__menu-dot">&nbsp;</div>
                    <div className="user__menu-dot">&nbsp;</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {this.state.showModal ? (
          <AdminModal position={this.state.modalPosition} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ManageUsers;

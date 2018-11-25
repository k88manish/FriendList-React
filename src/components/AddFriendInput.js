import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { GENDER } from "../constants/Common";
import styles from "./AddFriendInput.css";

class AddFriendInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || "",
      gender: this.props.gender || "Male"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className={styles.inputContainer}>
        <select className={classnames("form-control", styles.selectInput)} onChange={this.handleSelectChange}>
          {GENDER.map(e => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <input
          type="text"
          autoFocus="true"
          name="name"
          className={classnames("form-control", styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSelectChange(e) {
    this.setState({ gender: e.target.value });
  }

  handleSubmit(e) {
    if (e.which === 13) {
      const { name } = this.state;
      if (name.trim().length === 0) {
        alert("Name can not be blank.");
        return;
      }
      this.props.addFriend(name, this.state.gender);
      this.setState({ name: "", gender: "Male" });
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;

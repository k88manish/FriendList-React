import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./FriendListItem.css";
import MaleIcon from "../assets/male-sign-icon.png";
import FemaleIcon from "../assets/female-sign-icon.png";

class FriendListItem extends Component {
  getGenderIcon() {
    return this.props.gender === "Female" ? FemaleIcon : MaleIcon;
  }
  render() {
    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div>
            <span>
              {this.props.name}
              <img src={this.getGenderIcon()} alt="gender" />
            </span>
          </div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.starFriend(this.props.id)}>
            <i
              className={classnames("fa", {
                "fa-star": this.props.starred,
                "fa-star-o": !this.props.starred
              })}
            />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem;

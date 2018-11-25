import React, { Component } from "react";
import styles from "./FriendListApp.css";
import { connect } from "react-redux";

import { addFriend, deleteFriend, starFriend, loadPage } from "../actions/FriendsActions";
import { FriendList, AddFriendInput, Pagination } from "../components";

class FriendListApp extends Component {
  getFriendsForPage() {
    const {
      friendlist: { friendsById, pageSize, activePage }
    } = this.props;
    const startIndex = (activePage - 1) * pageSize;
    return (friendsById || []).slice(startIndex, startIndex + pageSize);
  }

  render() {
    const {
      friendlist: { recordCount, pageSize, activePage }
    } = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      loadPage: this.props.loadPage
    };
    const friends = this.getFriendsForPage();
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friends} actions={actions} />
        <Pagination activePage={activePage} recordCount={recordCount} pageSize={pageSize} loadPage={actions.loadPage} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  {
    addFriend,
    deleteFriend,
    starFriend,
    loadPage
  }
)(FriendListApp);

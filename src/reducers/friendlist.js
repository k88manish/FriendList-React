import * as types from "../constants/ActionTypes";

const initialState = {
  pageSize: 2,
  recordCount: 2,
  activePage: 1,
  friendsById: [
    {
      name: "Theodore Roosevelt",
      gender: "Male",
      starred: true,
      id: 1
    },
    {
      name: "Abraham Lincoln",
      gender: "Female",
      starred: false,
      id: 2
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      const friendsById = [
        ...state.friendsById,
        {
          name: action.name,
          gender: action.gender,
          id: new Date().getTime()
        }
      ];
      return {
        ...state,
        friendsById,
        recordCount: friendsById.length
      };
    case types.DELETE_FRIEND:
      const remainingFriend = state.friendsById.filter(item => item.id !== action.id);
      return {
        ...state,
        friendsById: remainingFriend,
        recordCount: remainingFriend.length
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find(item => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends,
        recordCount: friends.length
      };
    case types.SET_PAGE:
      return {
        ...state,
        activePage: action.pageNumber
      };
    default:
      return state;
  }
}

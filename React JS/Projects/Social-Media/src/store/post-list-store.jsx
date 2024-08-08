import { createContext, useContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  function addPost() {}

  function deletePost(postId) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to mumbai",
    body: "Hii..Guys i going to mumbai first time say me safe journey",
    reactions: 2,
    userId: "yash",
    tags: ["vaction", "mumbai", "enjoying"],
  },
  {
    id: 2,
    title: "Preparing For My Interviews",
    body: "helo friends.. i preparing for my interview anyone has any suggestions for me or any resourse that can help me",
    reactions: 10,
    userId: "tonystack",
    tags: ["interview", "dsa", "studying"],
  },
];

export default PostListProvider;

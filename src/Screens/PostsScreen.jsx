import { ScrollView } from "react-native";
import User from "../components/User/User";
import UserPost from "../components/UserPost/UserPost";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserData } from "../redux/Auth/selectors";
import { getPostsThunk } from "../redux/Post/postOperations";

export default function PostsScreen() {
  const [post, setPost] = useState([]);
  const route = useRoute();
  const { email, login } = useSelector(selectUserData);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log("posts: ",posts);
  const newPost = route.params?.newPost ?? null;

  useEffect(() => {
    dispatch(getPostsThunk());
  }, []);

  useEffect(() => {
    if (newPost) {
      setPost([...post, newPost]);
    }
  }, [newPost]);

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        height: "100%",
        paddingHorizontal: 16,
        paddingVertical: 22,
      }}
    >
      <User email={email} login={login} />
      <UserPost newPost={post} />
    </ScrollView>
  );
}

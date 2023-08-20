import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  post__container: {
    marginBottom: 22,
  },
  user__image: {
    borderRadius: 8,
    width: "100%",
    height: 220,
  },
  title: {
    color: "#212121",
    fontSize: 16,
    fontWeight: 500,
    marginTop: 8,
  },
  user__info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  message__icon: {
    marginRight: 6,
  },
  map__icon: {
    marginRight: 4,
  },
});

import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "white",
    paddingTop: 22,
    paddingBottom: 22,
    height: "100%",
  },
  camera__container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  camera__icon: {
    position: "absolute",
  },
  camera__title: {
    color: "#BDBDBD",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: 400,
    marginTop: 8,
  },
  input: {
    paddingVertical: 10,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    marginTop: 16,
    fontSize: 16,
    fontWeight: 400,
  },
  publish__btn: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 32,
  },
  publish__text: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
  },
  publish__btn_disabled: { backgroundColor: "#F6F6F6" },
  publish__text_disabled: { color: "#BDBDBD" },
  delete__btn: {
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    maxWidth: 70,
    marginTop: 45,
    marginLeft: "auto",
    marginRight: "auto",
  },

  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

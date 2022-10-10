import { StyleSheet } from "react-native";

export const dark = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121213",
    marginTop: -120,
  },
  logo: {
    color: "white",
    fontFamily: "Cookie_400Regular",
    fontSize: 50,
    marginBottom: 50,
  },
  input: {
    backgroundColor: "#333333",
    borderRadius: 7,
    color: "white",
    width: "80%",
    marginBottom: 10,
    padding: 7,
  },
  button: {
    backgroundColor: "#0198fd",
    alignItems: "center",
    padding: 10,
    width: "80%",
    borderRadius: 7,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  loginArea: {
    borderTopWidth: 2,
    width: "100%",
    borderTopColor: "white",
    alignItems: "center",
    position: "absolute",
    height: 50,
    justifyContent: "center",
    bottom: 0,
  },
  loginTextArea: {
    color: "white",
  },
  login: {
    color: "#0098ff",
  },
});

export const light = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

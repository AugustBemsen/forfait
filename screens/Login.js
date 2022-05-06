import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
import Flash from "./Flash";

export default function Login({ navigation }) {
  const [load, setLoad] = useState(true);

  const screenTOShow = () => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    if (load) {
      return <Flash />;
    } else {
      return (
        <View style={authStyles.container}>
          <View style={{ width: "100%" }}>
            <Text style={authStyles.title}>Login</Text>
            <View style={authStyles.inputGroup}>
              <Text style={authStyles.label}>Email</Text>
              <TextInput
                keyboardType="email-address"
                style={authStyles.input}
                placeholder="Enter Email"
              />
            </View>
            <View style={authStyles.inputGroup}>
              <Text style={authStyles.label}>Password</Text>
              <TextInput
                secureTextEntry
                placeholder="Password"
                style={authStyles.input}
              />
            </View>
            <Button
              title="Login"
              style={authStyles.btn}
              color="#FF9A02"
              accessibilityLabel="Login"
              onPress={() => navigation.navigate("Home")}
            />
            <Text
              onPress={() => navigation.navigate("Register")}
              style={authStyles.note}
            >
              Not having an account? register
            </Text>
          </View>
        </View>
      );
    }
  };

  return screenTOShow();
}

export const authStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: "1",
    padding: "2rem",
    width: "100%",
  },

  title: {
    fontSize: "30px",
    marginBottom: "4.5rem",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#161616",
  },

  inputGroup: {
    marginBottom: "2.8rem",
    width: "100%",
  },

  label: {
    fontSize: "1.3rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#161616",
    marginBottom: "1rem",
  },

  input: {
    backgroundColor: "rgba(243, 243, 243, 0.3)",
    border: "2px solid #161616",
    borderRadius: "8px",
    width: "100%",
    padding: "1rem",
  },

  note: {
    marginTop: "1.5rem",
  },

  btn: {
    padding: "4rem",
  },
});

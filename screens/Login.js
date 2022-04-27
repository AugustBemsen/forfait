import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Login() {
  return (
    <View style={authStyles.container}>
      <View style={{ width: "100%" }}>
        <Text style={authStyles.title}>Login</Text>
        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Phone Number</Text>
          <TextInput
            keyboardType="number-pad"
            style={authStyles.input}
            placeholder="Phone Number"
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
        />
        <Text style={authStyles.note}>Not having an account? register</Text>
      </View>
    </View>
  );
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
    marginBottom: "3rem",
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
    marginTop: "1.5rem"
  }

});

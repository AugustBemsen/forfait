import { Text, View, TextInput, Button } from "react-native";
import { authStyles } from "./Login";

export default function Register() {
  return (
    <View style={authStyles.container}>
      <View style={{ width: "100%" }}>
        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Full Name</Text>
          <TextInput
            keyboardType="number-pad"
            style={authStyles.input}
            placeholder="John Doe"
          />
        </View>
        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Email</Text>
          <TextInput
            keyboardType="email-address"
            style={authStyles.input}
            placeholder="Johndoe@gmail.com"
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
        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Phone Number</Text>
          <TextInput
            keyboardType="number-pad"
            style={authStyles.input}
            placeholder="Phone Number"
          />
        </View>
        <Button
          title="Register"
          style={authStyles.btn}
          color="#FF9A02"
          accessibilityLabel="Login"
        />
        <Text style={authStyles.note}>Already have an account? Login</Text>
      </View>
    </View>
  );
}

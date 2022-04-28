import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Select from "../components/Select";

export default function Airtime() {
  return (
    <View style={purchaseStyles.container}>
      <View style={{ width: "100%" }}>
        <Text style={purchaseStyles.title}>Airtime TopUp</Text>
        <View style={purchaseStyles.inputGroup}>
          <Select label="Service provider" />
        </View>
        <View style={purchaseStyles.inputGroup}>
          <Text style={purchaseStyles.label}>Phone Number</Text>
          <TextInput
            keyboardType="number-pad"
            style={purchaseStyles.input}
            placeholder="Phone Number"
          />
        </View>
        <View style={purchaseStyles.inputGroup}>
          <Text style={purchaseStyles.label}>Amount</Text>
          <TextInput
            keyboardType="number-pad"
            style={purchaseStyles.input}
            placeholder="Enter Amount"
          />
        </View>
        <Text style={purchaseStyles.label}>You will pay NGN300</Text>
        <Button
          title="Continue"
          style={purchaseStyles.btn}
          color="#FF9A02"
          accessibilityLabel="Login"
        />
      </View>
    </View>
  );
}

export const purchaseStyles = StyleSheet.create({
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
    marginBottom: "3rem",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#161616",
  },

  inputGroup: {
    marginBottom: "2.8rem",
    width: "100%",
  },

  input: {
    backgroundColor: "rgba(243, 243, 243, 0.3)",
    border: "2px solid #161616",
    borderRadius: "8px",
    width: "100%",
    padding: "1rem",
  },

  label: {
    fontSize: "1.3rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "18px",
    color: "#161616",
    marginBottom: "1rem",
  },

  btn: {
    padding: "4rem",
  },
});

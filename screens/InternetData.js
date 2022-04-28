import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Select from "../components/Select";
import { purchaseStyles } from "./Airtime";

export default function InternetData() {
  return (
    <View style={purchaseStyles.container}>
      <View style={{ width: "100%" }}>
        <Text style={purchaseStyles.title}>Internet Data</Text>
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
          <Select label="Select Plan" />
        </View>
        <View style={purchaseStyles.inputGroup}>
          <Text style={purchaseStyles.label}>Amount</Text>
          <TextInput
            keyboardType="number-pad"
            style={purchaseStyles.input}
            placeholder="Phone Number"
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


import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Select from "../components/Select";
import { useState } from "react";
import axios from "axios";
// import { MonoProvider, useMonoConnect } from "@mono.co/connect-react-native";
// import Pay from "../components/Pay";

export default function Airtime() {
  const [phone, setPhone] = useState(0);
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState("mtn");
  // const { init } = useMonoConnect();


  const providers = [
    {
      value: "mtn",
      label: "MTN",
    },
    {
      value: "moov",
      label: "Moov Africa",
    },
  ];

  const send = () => {
    const data = {
      request_id: "demo_asijadas" + Math.random() + amount,
      serviceID: "mtn",
      amount,
      phone,
    };

    axios
      .post("https://sandbox.vtpass.com/api/pay", data, {
        auth: {
          username: "tech@repeefy.com",
          password: "U7sh.c9jHDJcfVp",
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const config = {
    publicKey: keys.public,
    onClose: () => alert("Widget closed"),
    onSuccess: (data) => {
      const code = data.getAuthCode();
      console.log("Access code", code);
    },
    reference: "random_string", // optional
    onEvent: (eventName, data) => {
      // optional
      console.log(eventName);
      console.log(data);
    },
  };

  // const payConfig = {
  //   scope: "payments",
  //   data: {
  //     type: "one-time-debit", // "one-time-debit" | "recurring-debit"
  //     amount: amount * 100, // amount in kobo
  //     description: "Buying Airtime",
  //     currency: "NGN", // (optional) default to NGN
  //   },
  // };

  return (
    // <MonoProvider {...{ ...config, ...payConfig }}>
      <View style={purchaseStyles.container}>
        <View style={{ width: "100%" }}>
          <Text style={purchaseStyles.title}>Airtime TopUp</Text>
          <View style={purchaseStyles.inputGroup}>
            <Select
              label="Service provider"
              value={provider}
              setValue={setProvider}
              items={providers}
              enabled={false}
            />
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
            accessibilityLabel="Continue"
            // onPress={init}
          />
          {/* <Pay /> */}
        </View>
      </View>
    /* </MonoProvider> */
  );
}

export const purchaseStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: "1",
    padding: 32,
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

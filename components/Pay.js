import React from "react";
import { TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Pay({ amount, customer, transRef }) {
  const publicKey = "FLWPUBK_TEST-20e21957331c43f24d05f609ae8ff505-X";
  const handleOnRedirect = () => {
    console.log("paid");
  };

  const generateRef = (length) => {
    var a = "ForfaitABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join("");
  };
  return (
    <PayWithFlutterwave
      onRedirect={handleOnRedirect}
      options={{
        tx_ref: generateRef(8),
        authorization: publicKey,
        customer: {
          email: customer?.email,
        },
        amount,
        currency: "NGN",
        payment_options: "card",
      }}
    />
  );
}

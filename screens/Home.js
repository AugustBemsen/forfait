import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenu</Text>
      <Text style={styles.title}>Daniel</Text>
      <Text style={styles.text}>54034088</Text>
      <View style={styles.btnGroup}>
        <Button title="Recharge Airtime" />
        <Button outlined title="Purchase Data" />
      </View>
      <View style={styles.transactions}>
        <Text style={styles.transTitle}>Last Transactions</Text>
        {[0, 1, 2].map((tran, i) => (
          <View key={tran + i} style={styles.transCard}>
            <View style={styles.transGroup}>
              <Text style={styles.lgText}>Airtime Recharge</Text>
              <Text style={styles.lgText}> 3,000 </Text>
            </View>
            <View style={styles.transGroup}>
              <Text style={styles.smText}>MTN</Text>
              <Text style={styles.smText}> 2 hours</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: "1.5rem",
  },

  title: {
    fontWeight: "700",
    fontSize: "32px",
    // lineHeight: "24",
    color: "#161616",
    marginTop: "10",
  },

  btnGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "1rem",
    marginBottom: "2rem",
  },

  text: {
    marginBottom: "20px",
    fontSize: "1.1rem",
  },

  transactions: {
    marginTop: "2rem",
    width: "100%",
  },

  transCard: {
    borderBottomWidth: 1,
    borderBottomColor: "#161616",
    paddingBottom: "16px",
    marginBottom: "1.5rem",
  },

  transTitle: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },

  transGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  lgText: {
    fontSize: "1rem",
    marginBottom: "8px",
  },

  smText: {
    opacity: 0.5,
  },
});

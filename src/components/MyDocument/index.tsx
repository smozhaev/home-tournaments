// MyDocument.tsx
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { ITournament } from "./type.ts";

const styles = StyleSheet.create({
  table: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
  },
  tableCol: {
    width: "50%",
    padding: 8,
  },
  tableCell: {
    fontSize: 10,
  },
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
});

export const MyDocument = ({ data }: { data: ITournament[] }) => (
  <Document>
    <Page size="A4">
      <View style={styles.table}>
        {data.map((tournament, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{tournament.player_name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{tournament.created}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

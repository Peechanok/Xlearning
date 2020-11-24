import * as React from "react";
import { DataTable } from "react-native-paper";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";

const itemsPerPage = 2;

const items = [
  {
    key: 1,
    name: "Page 1",
  },
  {
    key: 2,
    name: "Page 2",
  },
  {
    key: 3,
    name: "Page 3",
  },
];
const ListnameScreen = () => {
  const [page, setPage] = React.useState(0);
  const from = page * itemsPerPage;
  const to = (page + 1) * itemsPerPage;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>ลำดับ</DataTable.Title>
            <DataTable.Title>รหัสนักศึกษา</DataTable.Title>
            <DataTable.Title>ชื่อ-สกุล</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>61070xxx</DataTable.Cell>
            <DataTable.Cell>เซฮุน โอ</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>61070xxx</DataTable.Cell>
            <DataTable.Cell>เซฮุน โอ</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell>61070xxx</DataTable.Cell>
            <DataTable.Cell>เซฮุน โอ</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.floor(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
          />
        </DataTable>

        <Text>{"\n"}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.confirm}>
          <Text style={{ color: "blue" }}>จำนวนนักเรียนทั้งหมด : 2</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  box: {
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  btn: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "pink",
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    flexDirection: "row",
  },

  confirm: {
    height: "30%",
    width: "90%",
    borderColor: "blue",
    borderWidth: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    bottom: "30%",
    margin: "5%",
    borderRadius: 10,
  },
});

export default ListnameScreen;

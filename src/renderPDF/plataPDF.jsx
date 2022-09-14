import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  title: {
    fonySize: "12px",
    fontWeight: 900,
    textAlign: "center",
    marginTop: "10px",
  },
  tabla: {
    display: "tabla",
    width: "100%",
    margin: "10px",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
  },
  tablaFila: {
    margin: "auto",
    flexDirection: "row",
  },
  tablaColumna1: {
    width: "28%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb(15, 15, 49)",
  },
  tablaColumna2: {
    width: "5%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb(15, 15, 49)",
    textAlign: "left",
  },
  tablaCeldaHeader: {
    textAlign: "center",
    margin: 2,
    fonySize: 8,
    fontWeight: "bold",
    color: "white",
    paddingTop: "1px",
    paddingBottom: "1px",
  },
  tablaCeldaContents: {
    margin: 4,
    fontSize: "10px",
  },
  anchoColumna: {
    width: "28%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
  },
  anchoColumnaNumber: {
    width: "5%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
  },
});

const PlataPDF = ({ plata }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.title}>Tabla Medalleria PLATA</Text>
        </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>COD</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>PIRAMIDE</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>PLATA</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>DELEGACION  PLATA</Text>
            </View>
          </View>

          {plata.map((data) => (
            <View style={styles.tablaFila} key={data.cod}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.cod}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>
                  {data.PIRAMIDE}
                </Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.Plata}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delacion_plata}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PlataPDF;
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
  },
  tablaCeldaContents: {
    margin: 2,
    fontSize: 10,
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

const AllMedallsPDF = ({ medalls }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.container}>
          <Text style={styles.title}>Tabla Medalleria ORO</Text>
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
              <Text style={styles.tablaCeldaHeader}>Oro</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>DELEGACION ORO</Text>
            </View>
          </View>

          {medalls.map((data) => (
            <View style={styles.tablaFila} key={data.COD}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.COD}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>
                  {data.PIRAMIDE}
                </Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.Oro}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delacion_oro}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
  
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
            <Text style={styles.tablaCeldaHeader}>DELEGACION PLATA</Text>
          </View>
        </View>

        {medalls.map((data) => (
          <View style={styles.tablaFila} key={data.COD}>
            <View style={styles.anchoColumnaNumber}>
              <Text style={styles.tablaCeldaContents}>{data.COD}</Text>
            </View>
            <View style={styles.anchoColumna}>
              <Text style={styles.tablaCeldaContents}>
                {data.PIRAMIDE}
              </Text>
            </View>
            <View style={styles.anchoColumna}>
              <Text style={styles.tablaCeldaContents}>{data.silver}</Text>
            </View>
            <View style={styles.anchoColumna}>
              <Text style={styles.tablaCeldaContents}>
                {data.delation_silver}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </Page>

    <Page size="A4">
    <View style={styles.container}>
      <Text style={styles.title}>Tabla Medalleria BRONCE</Text>
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
          <Text style={styles.tablaCeldaHeader}>BRONCE</Text>
        </View>
        <View style={styles.tablaColumna1}>
          <Text style={styles.tablaCeldaHeader}>DELEGACION BRONCE</Text>
        </View>
      </View>

      {medalls.map((data) => (
        <View style={styles.tablaFila} key={data.COD}>
          <View style={styles.anchoColumnaNumber}>
            <Text style={styles.tablaCeldaContents}>{data.COD}</Text>
          </View>
          <View style={styles.anchoColumna}>
            <Text style={styles.tablaCeldaContents}>
              {data.PIRAMIDE}
            </Text>
          </View>
          <View style={styles.anchoColumna}>
            <Text style={styles.tablaCeldaContents}>{data.bronze}</Text>
          </View>
          <View style={styles.anchoColumna}>
            <Text style={styles.tablaCeldaContents}>
              {data.delation_bronze}
            </Text>
          </View>
        </View>
      ))}
    </View>
  </Page>
    </Document>
  );
};

export default AllMedallsPDF;

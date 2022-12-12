import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { NowDate, Hours, MainTitle, ImgDeporte } from "./headerPDF";

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
  tablaColumna: {
    width: "22%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb(15, 15, 49)",
  },
  tablaColumna1: {
    width: "13%",
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
  tablaColumna3: {
    width: "10%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb(15, 15, 49)",
  },
  tablaCeldaHeader: {
    textAlign: "center",
    margin: 2,
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  tablaCeldaContents: {
    margin: 2,
    fontSize: 12,
    textAlign: "center",
  },
  anchoColumna: {
    width: "22%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
  },
  anchoColumna1: {
    width: "13%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
  },
  anchoColumna3: {
    width: "10%",
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
  MainHead:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  head: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    marginLeft: 28
  },
  textHead:{
    fontSize: 12,
    textAlign: 'center',
  }
});

const GeneralAwardPDF = ({ GeneralAward }) => {
  return (
    <Document>
      <Page size="A4">
      <View style={styles.MainHead}>
          <View style={styles.head}>
            <Image 
              style={{ width: 254, margin: 10 }} 
              src={ImgDeporte()}
            />
            <Text>{MainTitle()}</Text>
            <Text style={styles.textHead}>{NowDate()}</Text>
            <Text style={styles.textHead}>{Hours()}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>PREMIACIÓN GENERAL</Text>
        </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>#</Text>
            </View>
            <View style={styles.tablaColumna}>
              <Text style={styles.tablaCeldaHeader}>DELEGACION</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>TOTAL</Text>
            </View>
            <View style={styles.tablaColumna}>
              <Text style={styles.tablaCeldaHeader}>PUNTOS MEDALLAS</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>ORO</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>PLATA</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>BRONCE</Text>
            </View>
          </View>

          {GeneralAward.map((data) => (
            <View style={styles.tablaFila} key={data.cod_del}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.cod_del}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.DELEGACION}</Text>
              </View>
              <View style={styles.anchoColumna1}>
                <Text style={styles.tablaCeldaContents}>{data.PUNTOS_GENERAL}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>
                  {data.PUNTUACION_MEDALLAS}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.ORO}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.PLATA}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.BRONCE}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default GeneralAwardPDF
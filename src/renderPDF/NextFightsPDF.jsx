import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { NowDate, Hours, MainTitle, ImgDeporte } from "./headerPDF";

const styles = StyleSheet.create({
    title: {
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
        width: "18%",
        fontSize: 10,
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
        width: "18%",
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
      textTitle:{
        fontSize: 18,
        fontWeight: 900,
      },
      textHead:{
        fontSize: 12,
        textAlign: 'center',
      }
});

const NextFightsPDF = ({ NextFights }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.MainHead}>
          <View style={styles.head}>
            <Image 
              style={{ width: 254, margin: 10 }} 
              src={ImgDeporte()}
              />
            <Text style={styles.textTitle}>{MainTitle()}</Text>
            <Text style={styles.textHead}>{NowDate()}</Text>
            <Text style={styles.textHead}>{Hours()}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Combates Proximos</Text>
        </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>#</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>CATEGORIA</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>DELEGACION</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>AZUL</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>DELEGACION</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>ROJO</Text>
            </View>
          </View>

          {NextFights.map((data) => (
            <View style={styles.tablaFila} key={data.no}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.no}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.categoria}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.delegacion}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.azul}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delegacion_rojo}
                </Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.rojo}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default NextFightsPDF
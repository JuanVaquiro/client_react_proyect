import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import { NowDate, Hours, MainTitle, ImgDeporte } from "./headerPDF";

const styles = StyleSheet.create({
  title: {
    fonySize: 10,
    fontWeight: 900,
    textAlign: "center",
    marginTop: "10px",
  },
  tabla: {
    display: "tabla",
    width: "100%",
    margin: "10px",
  },
  tablaFila: {
    margin: "auto",
    flexDirection: "row",
  },
  tablaColumna: {
    width: "12%",
    borderStyle: "solid",
    borderColor: "",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb(15, 15, 49)",
  },
  tablaColumna1: {
    width: "9%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
    backgroundColor: "rgb(15, 15, 49)",
  },
  tablaColumna2: {
    width: "2%",
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
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  tablaCeldaContents: {
    margin: 2,
    fontSize: 12,
    textAlign: "center",
  },
  anchoColumna: {
    width: "12%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderLeftWidthL: 0,
    borderTopWidth: 0,
  },
  anchoColumna1: {
    width: "9%",
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
    width: "2%",
    borderStyle: "solid",
    borderColor: "",
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

const FilterGeneralPDF = ({ filterGeneral, delacion }) => {
  return (
    <Document>
      <Page size="RA2">
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
          <Text style={styles.title}>PREMIACION POR DELEGACIÓN: {delacion}</Text>
        </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>#</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>PIRAMIDE</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>ORO</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>DEL.ORO</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>PLATA</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>DEL.PLATA</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>BRONCE 1</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>DEL.BRONCE 1</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>BRONCE 2</Text>
            </View>
            <View style={styles.tablaColumna3}>
              <Text style={styles.tablaCeldaHeader}>DEL.BRONCE 2</Text>
            </View>
          </View>

          {filterGeneral.map((data) => (
            <View style={styles.tablaFila} key={data.COD}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.CANT_DEPORTISTAS}</Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>{data.PIRAMIDE}</Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>{data.Oro}</Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delacion_oro}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.silver}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delation_silver}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.bronze}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delation_bronze}
                </Text>
              </View>
              <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.bronze2}
                </Text>
              </View>
               <View style={styles.anchoColumna3}>
                <Text style={styles.tablaCeldaContents}>
                  {data.delation_bronze2}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default FilterGeneralPDF
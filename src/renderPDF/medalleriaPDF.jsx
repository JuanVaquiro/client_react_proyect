import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    title:{
      fonySize: '12px',
      fontWeight: 900,
      textAlign: 'center',
      marginTop: '10px'
    },
    tabla:{
      display: 'tabla',
      width: '100%',
      margin: '10px',
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 1
    },
    tablaFila:{
      margin: 'auto',
      flexDirection: 'row'
    },
    tablaColumna1: {
      width: '28%',
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 1,
      borderLeftWidthL: 0,
      borderTopWidth: 0,
      backgroundColor: 'rgb(15, 15, 49)',
    },
    tablaColumna2: {
      width: '5%',
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 1,
      borderLeftWidthL: 0,
      borderTopWidth: 0,
      backgroundColor: 'rgb(15, 15, 49)',
      textAlign: 'left'
    },
    tablaCeldaHeader:{
      textAlign: 'center',
      margin: 2,
      fonySize: 8,
      fontWeight: 'bold',
      color: 'white',
      paddingTop: '1px',
      paddingBottom: '1px',
    },
    tablaCeldaContents:{
      margin: 4,
      fontSize: '10px'
    },
    anchoColumna:{
      width: '28%',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      borderLeftWidthL: 0,
      borderTopWidth: 0,
    },
    anchoColumnaNumber:{
      width: '5%',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 1,
      borderLeftWidthL: 0,
      borderTopWidth: 0,
    }
});

const MedalleriaPDF = ({ oro }) => {
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
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>#DEP</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>PIRAMIDE</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>ORO</Text>
            </View>
            <View style={styles.tablaColumna1}>
            <Text style={styles.tablaCeldaHeader}>DELEGACION ORO</Text>
          </View>
          </View>

          {oro.map((data) => (
            <View style={styles.tablaFila} key={data.COD}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.COD}</Text>
              </View>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.CANT_DEPORTISTAS}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.PIRAMIDE}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.Oro}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.delacion_oro}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MedalleriaPDF;

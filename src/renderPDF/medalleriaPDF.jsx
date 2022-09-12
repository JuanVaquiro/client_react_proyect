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
      textAlign: 'left'
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
      margin: 5,
      fonySize: 10,
      fontWeight: 700,
      color: 'white',
      paddingTop: '2px',
      paddingBottom: '2px',
    },
    tablaCeldaContents:{
      margin: 5,
      fontSize: 12
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

const MedalleriaPDF = ({ users }) => {
  return (
    <Document>
      <Page size="A4">
          <View style={styles.container}>
            <Text style={styles.title}>Tabla Medalleria</Text>
          </View>
        <View style={styles.tabla}>
          <View style={styles.tablaFila}>
            <View style={styles.tablaColumna2}>
              <Text style={styles.tablaCeldaHeader}>id</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>name</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>username</Text>
            </View>
            <View style={styles.tablaColumna1}>
              <Text style={styles.tablaCeldaHeader}>email</Text>
            </View>
          </View>

          {users.map((data) => (
            <View style={styles.tablaFila} key={data.id}>
              <View style={styles.anchoColumnaNumber}>
                <Text style={styles.tablaCeldaContents}>{data.id}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.name}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.username}</Text>
              </View>
              <View style={styles.anchoColumna}>
                <Text style={styles.tablaCeldaContents}>{data.email}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default MedalleriaPDF;

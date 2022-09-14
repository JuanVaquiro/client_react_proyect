import MedalleriaPDF from '../renderPDF/medalleriaPDF'
import { PDFDownloadLink } from '@react-pdf/renderer'

const ObtenerTablaOro = ({ oro }) => {
  return (
    <PDFDownloadLink
      document={<MedalleriaPDF oro={oro} />}
      fileName="Medalleria.pdf"
      >
      <button className="btn btn-primary">Descargar PDF</button>
    </PDFDownloadLink>
  );
}

export default ObtenerTablaOro
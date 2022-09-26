import * as XLSX from 'xlsx/xlsx.mjs';

const BtnExport = ({ params, title }) => {
  const hanldeOnExport = () => {
    let dt = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(params);
    XLSX.utils.book_append_sheet(dt, ws, "Hoja 1");
    XLSX.writeFile(dt, `${title}.xlsx`);
  };

  return (
    <button className="btn btn-success" onClick={hanldeOnExport}>
      Descargar Excel
    </button>
  );
};

export default BtnExport
import * as XLSX from 'xlsx';

const BtnExport = ({ params, title }) => {
  const hanldeOnExport = () => {
    /* Create worksheet from HTML DOM TABLE */
    const table = document.getElementById(params);
    const workbook = XLSX.utils.table_to_book(table);
    /* Export to file (start a download) */
    XLSX.writeFile(workbook, `${title}.xlsx`);
  };
  
  return (
    <button className="btn btn-success" onClick={hanldeOnExport}>
      Descargar Excel
    </button>
  );
};

export default BtnExport

// const hanldeOnExport = () => {
//   const workbook = XLSX.utils.book_new();
//   const worksheet = XLSX.utils.json_to_sheet(params);
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja 1");
//   XLSX.writeFile(workbook, `${title}.xlsx`);
// };
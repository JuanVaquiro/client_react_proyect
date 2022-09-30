import XLSX from "xlsx";
import * as XlsxPopulate from "xlsx-populate/browser/xlsx-populate";

const alphabetList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const btn = document.getElementById("exp");
btn.onclick = createDownLoadData;

function createDownLoadData() {
  handleExport().then((url) => {
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", url);
    downloadAnchorNode.setAttribute("download", "xxx数据汇总.xlsx");
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  });
}

// 假设这是接口返回的数据
const data = [
  { date: "2021-1-1", count: 999 },
  { date: "2021-1-2", count: 1999 },
  { date: "2021-1-3", count: 99 }
];
function workbook2blob(workbook) {
  const wopts = {
  
    bookType: "xlsx",
    bookSST: false,
    type: "binary"
  };
  const wbout = XLSX.write(workbook, wopts);
  
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  const blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  });
  return blob;
}

function handleExport() {
  const title = [{ A: "数据统计" }, {}];
  const table = [{ A: "日期", B: "数量" }];
  data.forEach((item) => {
    table.push({
      A: item.date,
      B: item.count
    });
  });
  const finalData = [...title, ...table];
  const wb = XLSX.utils.book_new();
  const sheet = XLSX.utils.json_to_sheet(finalData, {
    skipHeader: true
  });
  XLSX.utils.book_append_sheet(wb, sheet, "数据统计详情");
  const workbookBlob = workbook2blob(wb);
  // 需要添加样式的行列信息
  const dataInfo = {
    titleCell: "A2",
    titleRange: "A1:B2",
    theadRange: "A3:B2",
    tbodyRange: `A4:B${data.length + 3}`,
    tableRange: `A3:B${data.length + 3}`
  };
  return addStyle(workbookBlob, dataInfo);
}

function addStyle(workbookBlob, dataInfo) {
  return XlsxPopulate.fromDataAsync(workbookBlob).then((workbook) => {
    // 循环所有的表
    workbook.sheets().forEach((sheet) => {
      // 所有cell垂直居中,修改字体
      sheet.usedRange().style({
        fontFamily: "Arial",
        verticalAlignment: "center"
      });
      // 去除所有边框
      sheet.gridLinesVisible(false);
      // 统计表格数据
      // title加粗合并及居中
      // 设置单元格宽度
      alphabetList.forEach((name) => {
        sheet.column(name).width(18);
      });

      sheet
        .range(dataInfo.titleRange)
        .merged(true)
        .style({
          bold: true,
          horizontalAlignment: "center",
          verticalAlignment: "center"
        });
      // 表头加粗及背景色
      sheet.range(dataInfo.theadRange).style({
        fill: "C9C7C7",
        bold: true,
        horizontalAlignment: "center"
      });
      // 表格内容右对齐
      sheet.range(dataInfo.tbodyRange).style({
        horizontalAlignment: "right"
      });
      // 表格黑色细边框
      sheet.range(dataInfo.tableRange).style({
        border: {
          style: "thin",
          color: "000000",
          direction: "both"
        }
      });
    });
    // return workbook.outputAsync().then(
    //   (workbookBlob) => URL.createObjectURL(workbookBlob) // 创建blob地址
    // );
  });
}

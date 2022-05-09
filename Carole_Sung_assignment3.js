//Given Values
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

//---------------------------------------------------------------------
function start() {
  //Question 1:
  let table = document.getElementById("table1");
  let hRow = document.createElement("tr");
  for (let h = 0; h < 4; h++) {
    let headr = document.createElement("th");
    let headText = document.createTextNode(tableInfo["tableHeader"][h]);
    headr.appendChild(headText);
    hRow.appendChild(headr);
  }
  table.appendChild(hRow);
  for (let i = 0; i < 4; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      let cell = document.createElement("td");
      let col = tableInfo["tableHeader"][j];
      let cellText = document.createTextNode(tableInfo["tableContent"][i][col]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  // Question 2:
  let oList = document.querySelector("#oList");
  let oNodes = list.map((lst) => {
    let li = document.createElement("li");
    li.textContent = lst;
    return li;
  });
  oList.append(...oNodes);
  let uList = document.querySelector("#uList");
  let uNodes = list.map((lst) => {
    let li = document.createElement("li");
    li.textContent = lst;
    return li;
  });
  uList.append(...uNodes);

  //Question 3:
  let dropList = document.querySelector("#cities");
  let dropNodes = dropDownList.map(({ value, content }) => {
    let option = document.createElement("option");
    option.textContent = content;
    option.setAttribute("value", value);
    return option;
  });
  dropList.append(...dropNodes);
}

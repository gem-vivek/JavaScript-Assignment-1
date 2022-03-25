const data = document.querySelector("div.data");

let theader = [
    "Name",
    "Age",
    "DOB",
    "Email",
    "Company"
];

let tdata = [
    ["Vivek Vikanksh", "21", "23-Mar-2000", "vivekvikanksh23@gmail.com", "Gemini Solutions"],
    ["Aman Gupta", "25", "10-Jan-1997", "amanguptaboat@gmail.com", "Gemini Solutions"],
    ["Tony Stark", "40", "16-feb-1982", "mark82@gmail.com", "Gemini Solutions"],
    ["Jarvis", "22", "20-Jan-2000", "jarvis@gmail.com", "Gemini Solutions"],
    ["Mr Nobody", "20", "28-Feb-2000", "nobody@gmail.us", "Gemini Solutions"],

];
//Self Invoking Function
(function() {
    
    let Table = document.createElement('Table');
    Table.className = 'Table';

    let TableHead = document.createElement('thead');
    TableHead.className = 'TableHead';

    let TableHeader = document.createElement('tr');
    TableHeader.className = 'TableHeader';

    theader.forEach(header => {
        let headers = document.createElement('th');
        headers.innerText = header;
        TableHeader.append(headers);
    });

    TableHead.append(TableHeader);
    Table.append(TableHead);


    let TableBody = document.createElement('tbody');
    TableBody.className = 'TableBody';

    for (var i = 0; i < 5; i++) {
        let TableBodyRow = document.createElement('tr');
        TableBodyRow.className = 'TableBodyRow';
        let td1 = document.createElement('td');
        let Name = document.createTextNode(tdata[i][0]);
        td1.appendChild(Name);
        let td2 = document.createElement('td');
        let Age = document.createTextNode(tdata[i][1]);
        td2.appendChild(Age);
        let td3 = document.createElement('td');
        let Dob = document.createTextNode(tdata[i][2]);
        td3.appendChild(Dob);
        let td4 = document.createElement('td');
        let Email = document.createTextNode(tdata[i][3]);
        td4.appendChild(Email);
        let td5 = document.createElement('td');
        let Company = document.createTextNode(tdata[i][4]);
        td5.appendChild(Company);
        TableBodyRow.append(td1, td2, td2, td3, td4, td5);
        TableBody.append(TableBodyRow);

    }

    Table.append(TableBody);
    data.append(Table);


})();
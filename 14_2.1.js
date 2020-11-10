// Делал с учетом что мы точно знаем структуру XML (а в модуле было сказано что обычно это так). Без проверок и усложнений.
const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentsNode = xmlDOM.querySelectorAll("list student");

const result = {list: []};

studentsNode.forEach(item => {
    let temp = {
        name: `${item.querySelector("first").textContent} ${item.querySelector("second").textContent}`,
        age:  item.querySelector("age").textContent,
        prof: item.querySelector("prof").textContent,
        lang: item.querySelector("name").getAttribute('lang')
    }

    result["list"].push(temp);
});

console.log(result);
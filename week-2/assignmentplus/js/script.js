let titlePage= "Elzero", 
    descArticle = "Elzero Web School",
    dateArticle = "25/10";


let content = `
    <div class= "card">
        <h3>Hello ${titlePage}</h3>
        <p>${descArticle}</p>
        <span>${dateArticle}</span>
    </div>
`;


document.writeln(content.repeat(4));
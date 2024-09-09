// Setting up the documents charactestics
class DjalmaDocuments
{
    constructor(title, date, category)
    {
        this.title = title;
        this.date = date;
        this.category = category;
    }
}

let documentsFiles = 
[
    new DjalmaDocuments("Estudos de células", "15-03-2018", "Biologia Celular"),
    new DjalmaDocuments("Biologia Celular", "14-05-2021", "Biologia Celular"),
    new DjalmaDocuments("Membranas Celulares", "22-07-2020", "Biologia Celular"),
    new DjalmaDocuments("Ciclo Celular", "19-12-2023", "Biologia Celular"),
    new DjalmaDocuments("Apoptose e Morte Celular", "03-02-2016", "Biologia Celular"),
    new DjalmaDocuments("Mitose e Meiose", "28-09-2017", "Biologia Celular"),
    new DjalmaDocuments("Citoesqueleto", "01-01-2022", "Biologia Celular"),
    new DjalmaDocuments("Organelos Celulares", "15-11-2019", "Biologia Celular"),
    new DjalmaDocuments("Comunicação Celular", "09-11-2019", "Biologia Celular"),
    new DjalmaDocuments("Regeneração Celular", "27-10-2024", "Biologia Celular"),
    new DjalmaDocuments("Biologia de Células-Tronco", "12-05-2023", "Biologia Celular"),
    new DjalmaDocuments("Terapia Celular", "23-08-2021", "Biologia Celular"),
    
    new DjalmaDocuments("Genética Molecular", "22-07-2020", "Genética"),
    new DjalmaDocuments("Genética de Populações", "19-12-2023", "Genética"),
    new DjalmaDocuments("Genoma e Sequenciamento", "14-05-2021", "Genética"),
    new DjalmaDocuments("Herança Genética", "09-11-2019", "Genética"),
    new DjalmaDocuments("Mutagenese", "28-09-2017", "Genética"),
    new DjalmaDocuments("Epigenética", "15-03-2018", "Genética"),
    new DjalmaDocuments("Engenharia Genética", "01-01-2022", "Genética"),
    new DjalmaDocuments("Genética do Desenvolvimento", "23-08-2021", "Genética"),
    new DjalmaDocuments("Genética de Doenças", "27-10-2024", "Genética"),
    new DjalmaDocuments("Genética Quantitativa", "03-02-2016", "Genética"),
    new DjalmaDocuments("Genética de Micro-organismos", "15-11-2019", "Genética"),
    new DjalmaDocuments("DNA Recombinante", "19-12-2023", "Genética"),
    
    new DjalmaDocuments("Ecologia de Ecosistemas", "09-11-2019", "Ecologia"),
    new DjalmaDocuments("Dinâmica de Populações", "03-02-2016", "Ecologia"),
    new DjalmaDocuments("Interações Ecológicas", "14-05-2021", "Ecologia"),
    new DjalmaDocuments("Conservação da Biodiversidade", "19-12-2023", "Ecologia"),
    new DjalmaDocuments("Ecologia Marinha", "22-07-2020", "Ecologia"),
    new DjalmaDocuments("Ecologia de Comunidades", "28-09-2017", "Ecologia"),
    new DjalmaDocuments("Biomas e Ecossistemas", "01-01-2022", "Ecologia"),
    new DjalmaDocuments("Impacto Ambiental", "27-10-2024", "Ecologia"),
    new DjalmaDocuments("Mudanças Climáticas", "15-03-2018", "Ecologia"),
    new DjalmaDocuments("Ecologia do Solo", "23-08-2021", "Ecologia"),
    new DjalmaDocuments("Restauração Ecológica", "15-11-2019", "Ecologia"),
    new DjalmaDocuments("Ecologia de Paisagens", "19-12-2023", "Ecologia"),

    new DjalmaDocuments("Fisiologia Vegetal", "28-09-2017", "Botânica"),
    new DjalmaDocuments("Botânica", "15-03-2018", "Botânica"),
    new DjalmaDocuments("Crescimento e Desenvolvimento das Plantas", "14-05-2021", "Botânica"),
    new DjalmaDocuments("Bioquímica das Plantas", "22-07-2020", "Botânica"),
    new DjalmaDocuments("Genética Vegetal", "01-01-2022", "Botânica"),
    new DjalmaDocuments("Fitopatologia", "19-12-2023", "Botânica"),
    new DjalmaDocuments("Anatomia Vegetal", "09-11-2019", "Botânica"),
    new DjalmaDocuments("Fisiologia de Plantas", "23-08-2021", "Botânica"),
    new DjalmaDocuments("Ecologia Vegetal", "27-10-2024", "Botânica"),
    new DjalmaDocuments("Biotecnologia Vegetal", "03-02-2016", "Botânica"),
    new DjalmaDocuments("Respostas a Estresses Ambientais", "15-11-2019", "Botânica"),
    new DjalmaDocuments("Metabolismo Secundário das Plantas", "28-09-2017", "Botânica"),
    new DjalmaDocuments("Desenvolvimento Reprodutivo das Plantas", "19-12-2023", "Botânica")
    
]

// ------------------------ FILLING UP CATEGORIES VALUES ------------------------

let botanica = 0;
let biologiaCelular = 0;
let genetica = 0;
let ecologia = 0;

let categoryValues = (documentsFiles.forEach( element => 
    {
        switch(element.category)
        {
            case "Botânica":
                botanica++;
                break;
            case "Ecologia":
                ecologia++;
                break;
            case "Biologia Celular":
                biologiaCelular++;
                break;
            case "Genética":
                genetica++;
                break;
            default:
                console.log("Error in Categories Values");
        }
    })
);

let ulCategories = document.getElementById("ulCategories");
let liItems = ulCategories.getElementsByTagName("span");


liItems[0].innerText += ` (${botanica})`;
liItems[1].textContent += ` (${biologiaCelular})`;
liItems[2].textContent += ` (${genetica})`;
liItems[3].textContent += ` (${ecologia})`;

// ------------------------ APPENDING DOCUMENTS TO HTML ------------------------

// Finding elements
const articleHeader = document.getElementById("articleHeader");
const templateCard = document.querySelector("[data-document-cards]");

// Filling the page with documents
documentsFiles = documentsFiles.map( (element) =>
{
    const card = templateCard.content.cloneNode(true).children[0]; 
    const header = card.querySelector("[data-title]");
    const category = card.getElementsByClassName("categoryParagraph")[0];
    const date = card.querySelector("[data-date]");

    header.textContent = element.title;
    category.textContent= element.category;
    date.textContent = element.date;

    articleHeader.appendChild(card);

    return {title: element.title, date: element.date, category: element.category, element: card};
});

// ------------------------ SEARCH BAR ------------------------

const searchBar = document.getElementById("SearchBar");

function filterFunction(e)
{
    // Get value
    let value;
    try
    {
        value = e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    // In case it is not a node ("STRING")
    catch (err)
    {
        value = e.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    documentsFiles.forEach( user =>
    {
        // If either title or date is present in user's input set variable to true
        const isVisible = 
        user.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(value)
        || 
        user.date.toLowerCase().includes(value)
        ||
        user.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(value);
    
        user.element.classList.toggle("hide", !isVisible);
    });
}

// Trigger function whenever something is typed
searchBar.addEventListener("input", filterFunction);

// ------------------------ ADDING AUTOMATIC FILTERS ------------------------

let botanicaFilter = () =>
{
    searchBar.value = "Botânica";
    filterFunction(searchBar.value);
}

let biologiaFilter = () =>
{
    searchBar.value = "Biologia Celular";
    filterFunction(searchBar.value);
}

let geneticaFilter = () =>
{
    searchBar.value = "Genética";
    filterFunction(searchBar.value);
}

let ecologiaFilter = () =>
{
    searchBar.value = "Ecologia";
    filterFunction(searchBar.value);
}

// ------------------------ TOGGLE ABOUT ME INFO ------------------------

let authorInfoShow = false;

const authorSection = document.getElementsByClassName("aboutAuthor")[0];
const searchSection = document.getElementsByClassName("searchSection")[0];

function aboutMeInfo()
{
    authorSection.classList.toggle("hide", authorInfoShow);
    searchSection.classList.toggle("hide", !authorInfoShow);
    articleHeader.classList.toggle("hide", !authorInfoShow);

    authorInfoShow = authorInfoShow ? false : true;
}
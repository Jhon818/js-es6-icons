const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

//   Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
  const iconsContainer = document.getElementById('icons');

 

//  sezione arrow functions
//   Milestone 1

var red = "#ff0000";
var purple = "#660066";
var green =" #003300";
let colors = [red,purple,green];

ArrayColors = {icons};
console.log(ArrayColors)

function getColorsByType (type) {
  if (type === "animal") {
    return red
  }

  if (type === "vegetable") {
    return purple
  }

   if (type === "user") {
    return green
  }
}

iconsFunction =  () => {
  

    iconsContainer.innerHTML = "";
  icons.forEach((element) => {
      
    const {name,family,prefix,type} = element;
 
  
    // console.log(`${element.name}`); 

    iconsContainer.innerHTML += `
    
    
       <div class="card">
               
                <i id="icons" class="${family} ${prefix + name}" style="color:${getColorsByType(type)};";></i>
                <span>${name.toLocaleUpperCase()}</span>
               
            </div>
    

  `;
  });
  
  return iconsContainer
  
}

iconsFunction();


// Milestone 2

iconsType = () => {

   icons.forEach((element) => {
    //  console.log(element.type)

     if (!colors.includes(element.type)) {
       colors.push(element.type);
     }
     return element.type;
   });

}
iconsType();

// select.onchange(document.getElementsByTagName("option"));

function printOptions() {
    let select = document.getElementById('option');
    icons.forEach((element) => {
      console.log(element);
      select.innerHTML += `
        <option value="${element.type}">${element.type}</option>
      `;
    });
  }


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

  //  sezione arrow functions

  
  
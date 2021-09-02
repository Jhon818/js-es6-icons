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



colorsIcons = (iconsFunction) => {
 
  if (element.type === "animal") {
    return colors[1];
}

else if (element.family === "fas") {
    return colors[2];
}
else {
  return colors[3];
}

};

console.log(colorsIcons)





iconsFunction =  () => {
    iconsContainer.innerHTML = "";
  icons.forEach((element) => {
      
    const {name,family,prefix,colors} = element;

    console.log(`${element.name}`); 

    iconsContainer.innerHTML += `
    
    
       <div class="card">
               
                <i class="${family} ${prefix + name}" style:${colors}></i>
                <span>${name.toLocaleUpperCase()}</span>
               
            </div>
    

  `;
  });
  
  return iconsContainer
  
}

iconsFunction();


// Milestone 2




iconsType = () => {
   
   const {name,family,prefix} = iconsFunction;

   icons.forEach((element) => {
     console.log(element.type)

     if (!colors.includes(element.type)) {
       colors.push(element.type);
     }
     return element.type;
   });

}

iconsType(`${iconsFunction()}`);

function printOptions(array,select) {
array.forEach((element) => {
  console.log(element)
select.innerHTML += `
            <option value="All"></option>
            <option value="animals"></option>
            <option value="users"></option>
`
}) ;
};


  //  sezione arrow functions

  
  
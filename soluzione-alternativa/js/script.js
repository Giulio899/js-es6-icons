$(document).ready(function() {

  const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas'
    },
    {
      name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
      },
      {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas'
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas'
    }
  ];

  const colors = ['blue', 'orange', 'purple'];

  // PUNTO 1 - CREO UN NUOVO ARRAY AGGIUNGENDO ALL'ARRAY DI PARTENZA I COLORI PERSONALIZZATI IN BASE AL VALORE DI TYPE

  const iconsColors = addColor(icons);

  console.log(icons);
  console.log(iconsColors);


  // PUNTO 2 - STAMPO I CONTENUTI NELL'HTML

  const container = $('.container');
  printHtml(iconsColors, container);


  // PUNTO 3 - FILTRO I CONTENUTI IN BASE AL TIPO E LI STAMPO NELL'HTML IN BASE ALLA SCELTA DELL'UTENTE

  $('select#filtra').change(() => {
    const selected = $('select#filtra').find(":selected").val();
    console.log(selected);

    const iconsFiltered = arrayFilter(iconsColors, selected);
    console.log(iconsFiltered);

    printHtml(iconsFiltered, container);
  });

  // const selected = $('select#filtra').find(":selected").val();
  // console.log(selected);


  // FUNCTION ADD COLOR
  function addColor(array) {

    const newArray = array.map((item) => {
      if(item.type == 'animal') {
        return {
          ...item,
          color: 'blue'
        }
      } else if(item.type == 'vegetable') {
        return {
          ...item,
          color: 'orange'
        }
      } else {
        return {
          ...item,
          color: 'purple'
        }
      }
    });

  return newArray;
  }

  // FUNCTION PRINT IN HTML
  function printHtml(array, container) {

    container.html('');

    array.forEach((item) => {

      const {name, prefix, type, family, color} = item;
      container.append(
        `
        <div class="box">
        <i class="${family} ${prefix}${name}" style="color:${color}"></i>
        <h3>Donkey</h3>
        </div>
        `).hide().fadeIn(50);
      });
  }


  // FUNCTION FILTRA
  function arrayFilter(array, selected) {

    const arrayFiltered = array.filter((item) => {
      return item.type == selected;
    });

    if (arrayFiltered.length > 0) {
      return arrayFiltered;
    } else {
      return array;
    }
  }


});

// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
// Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.

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

// PUNTO 1 - CREO UN ARRAY CON SOLO LE TIPOLOGIE

  // VERSIONE 1 CON FUNZIONE INTERNA
  // const tipologie = [];
  // icons.forEach((item) => {
  //   if (!tipologie.includes(item.type)) {
  //     tipologie.push(item.type);
  //   }
  // });

  // VERSIONE 2 CON FUNZIONE INTERNA E USANDO LA DESTRUTTURAZIONE
  // const tipologie = [];
  // icons.forEach((item) => {
  //   if (!tipologie.includes(item.type)) {
  //     tipologie.push(item.type);
  //   }
  // });
  // console.log(tipologie);

  // VERSIONE 3 CON FUNZIONE
  const tipologie = getType(icons);
  // console.log(tipologie)



  // PUNTO 2 - MAPPO L'ARRAY IN MODO DA AGGIUNGERE IL COLORE IN BASE AL TIPO
  const iconsColors = icons.map((item) => {
    const indexType = tipologie.indexOf(item.type);
    // console.log(indexType);
    return {
      ...item,
      color: colors[indexType]
    }
  });
  // console.log(iconsColors);

  // PUNTO 3 - VADO A STAMPARE L'ARRAY NELL'HTML

  // VERSIONE 1 CON FUNZIONE INTERNA
  // iconsColors.forEach((item) => {
  //   $('.container').append(
  //     `
  //     <div class="box">
  //       <i class="${item.family} ${item.prefix}${item.name}" style="color:${item.color}"></i>
  //       <h3>${item.name}</h3>
  //     </div>
  //     `
  //   )
  // });

  // VERSIONE 2 CON FUNZIONE ESTERNA
  const container = $('.container');
  printColors(iconsColors, container);


  // PUNTO 4 - VADO A INSERIRE NELL'HTML LE OPZIONI ALL'INTERNO DI SELECT

  // VERSIONE 1 CON FUNZIONE INTERNA
  // tipologie.forEach((item) => {
  //   $('select#filtro').append(
  //     `
  //     <option value="${item}">${item}</option>
  //     `);
  // });

  // VERSIONE 2 CON FUNZIONE ESTERNA
  const select = $('select#filtro');
  printOptions(tipologie, select);


  // PUNTO 5 VADO A PERSONALIZZARE IL CONTAINER IN BASE ALL'OPZIONE SELEZIONATA NEL MENU A TENDINA
  select.change(function() {
    const selected = $(this).val();
    console.log(selected);

    const filteredIcons = filterValue(iconsColors, selected);
    // console.log(filteredIcons);

    printColors(filteredIcons, container);


  });



  // FUNZIONE getTypes()
  function getType(array) {
    const types = [];

    array.forEach((item) => {
      if(!types.includes(item.type)) {
        types.push(item.type);
      }
    });
    return types;
  }

  // FUNZIONE PRINT NEW PROPRIETY
  function printColors(array, container) {
    container.html('');

    array.forEach((item) => {
      const {name, prefix, type, family, color} = item;
      container.append(
        `
        <div class="box">
          <i class="${family} ${prefix}${name}" style="color:${color}"></i>
          <h3>${name}</h3>
        </div>
        `
      )
    });

  }

  // FUNZIONE PRINT OPTIONS
  function printOptions(array, select) {
    array.forEach((element) => {
      select.append(
        `
        <option value="${element}">${element}</option>
        `);
    });
  }

  // FUNCTION FILTER VALUE
  function filterValue(array, type) {
    const filteredIcons = array.filter((element) => {
      return element.type == type;
    });
    if(filteredIcons.length > 0) {
      return filteredIcons;
    } else {
      return array;
    }
  }


});

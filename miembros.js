
    const miembros = [
"TRISTAN EMMANUEL LOPEZ OROZCO",
"ETHAN VIDAL LOPEZ OROZCO",
"BRITANNY SARAHI LOPEZ OROZCO",
"BETSAIDA ABIGAHIL LOPEZ OROZCO",
"DANIELA SOFIA DOMÍNGUEZ LLAMAS",
"ARIADNA SINAÍ DOMÍNGUEZ LLAMAS",
"KAREN ANAHÍ NEGRETE PEÑA",
"VICTORIA SHALOM AGUILAR DOMÍNGUEZ",
"BRENDA LUCERO SEPÚLVEDA MEZA",
"TANIA MERAZ GARCÍA",
"CRISTIAN VÁZQUEZ LEMUS",
"JOSÉ JULIÁN TORRES PÉREZ ",
"ANGELICA ALEJANDRA MARTINEZ ORTIZ",
"ADYLENNE MUÑOZ BARAJAS",
"ADELA YULENI PÉREZ IBARRA",
"JENNIFER ANDREA CHAVEZ BAUTISTA ",
"BRANDON ABEL GUTIÉRREZ AYALA",
"ÁNGEL ENRIQUE GUTIÉRREZ AYALA",
"RONAY ISAÍ GARCÍA ZÚÑIGA",
"ALAN EMILIANO SAUCEDO SERRATOS",
"BRISA ESMERALDA GARCÍA BAUTISTA",
"JOSHUA ALEXANDER OCHOA DÍAZ",
"JESUS MACEDO VAZQUEZ ",
"JESUS PADILLA RANGEL ",
"JOSÉ DAVID GARCÍA MEJIA",
"ERICK MARCOS GARCÍA",
"CAROLINA AGUIRRE",
"BERENICE BORJAS",
"ALEJANDRA BORJAS ZARAGOZA",
"PAOLA DE JESÚS VELASCO CAMPOS",
"LIZETH GONZÁLEZ SÁNCHEZ",
"RAMSES MARCELINO PORTES GIL GARCÍA",
"MARTÍN PÉREZ IBARRA",
"JESHUA GAMALIEL BARAJAS CAMPOS",
"DIEGO ARMANDO MARTÍNEZ ORTIZ",
"LIZETH SARAÍ VÁZQUEZ LEMUS",
"DIEGO CÉSAR SILVA GARCÍA",
"ABRAHAM CASTELLANOS VERA",
"DAMARIS TENORIO BALBUENA",
"KAROL ELIZABETH CERVANTES MIRANDA",
"CARINA ELIZABETH AGUIRRE MONTES",
"JULIA MONTAÑO",
"VANIA RAQUEL CUESTA BARAJAS",
"ALEJANDRO JAVIER SILVA GARCÍA",
"ARIANA QUETZALLY RODRÍGUEZ HOYOS",
"BERNARDO GABRIEL CÁRDENAS",
"WILLIAM EMMANUEL TORRES JIMÉNEZ",
"JAZMÍN ESMERALDA OSEGURA BARBOZA",
"ISAAC NATANAEL GÓMEZ LÓPEZ",
"KARLA NAOMI ABREU SALAS",
"REGINA OROZCO ORTEGA",
"CAMILA BRIGITTE VERA HERNÁNDEZ",
"EDVAN ALAN GALINDO JIMÉNEZ",
"EMIR",
"CRISTIAN SAÚL GONZÁLEZ MARTÍNEZ",
"ELIZABETH BORJAS ZARAGOZA",
"DANIEL ALBERTO BORJAS ZARAGOZA",
"JACQUELINE GABRIELA MEJÍA GARCÍA",
"EVELYN DANIELA GUTIERREZ MARTÍNEZ",
    ]

    const miembros_pre_cargados = {
      "Equipo 7": ['Evelyn Daniela Gutiérrez'],//britt
      "Equipo 6": ['Isaac Gomez','Erick Marcos García'],//Thristan
      "Equipo 5": ["Ronay Isaí García Zúñiga",'William Emanuel Torres'], //caro
      "Equipo 4": ['Daniel Borjas'],//Ethan
      "Equipo 2": ['Adylenne Muñoz Barajas','Diego Armando Martinez Ortiz'],//angie
      "Equipo 1": ['Daniela Sofía Domínguez'],//pepe
    };

    const cap_y_co_capitanes = {
      "Equipo 1":["JESUS PADILLA RANGEL","José David García Mejía"],
      "Equipo 2": ["ANGELICA ALEJANDRA MARTINEZ ORTIZ", "Karen Anahí Negrete Peña"] ,
      "Equipo 3": ["JOSÉ JULIÁN TORRES PÉREZ", "Ariadna Sinaí", ] ,//julian
      "Equipo 4": ["ETHAN VIDAL LOPEZ OROZCO", "Martin Pérez Ibarra"],//Ethan
      "Equipo 5": ["CAROLINA AGUIRRE", "Adela Yuleni Pérez"],//caro
      "Equipo 6": ["THRISTAN EMMANUEL LOPEZ OROZCO", "Ramses Marcelino Portes" ],//thristan
      "Equipo 7": ["BRITANNY SARAHI LOPEZ OROZCO", "Regina Orozco Ortega " ],//brith
    }

    const nombre_equipos = {
      "Equipo 1": ["Paz","45ff33"],
      "Equipo 2": ["Testimonio", "520422"],
      "Equipo 7": ["Promesas","ff0600"],
      "Equipo 4": ["Libertad", "0388e5"],
      "Equipo 5": ["Seguridad", "fafdff" ],
      "Equipo 6": ["Fidelidad", "f9ff00"],
      "Equipo 3": ["Misericordia", "000000"]
    }

    const num_participantes_equipo = 10
    let equipoSeleccionado = null;

    const equipos = Array.from({ length: 7 }, (_, i) => ({
      nombre: `Equipo ${i + 1}`,
    }));  

    function simularSeleccion() {
      const team = document.getElementById('team');
      const output = document.getElementById('output');
      const capitan = document.getElementById('capitan');
      const co_capitan = document.getElementById('co_capitan');
      team.innerHTML = "";
      output.innerHTML = "";
      capitan.innerHTML = "";
      co_capitan.innerHTML = "";
      let pasos = 10;
      let i = 0;
      console.log(equipos[equipoSeleccionado])
      if(equipos.length > 0){
        const intervalo = setInterval(() => {
        equipoSeleccionado = Math.floor(Math.random() * equipos.length);
        const equipoRandom = equipos[equipoSeleccionado];
        team.innerHTML = `<div class="spinner bg-equipos ${nombre_equipos[equipoRandom.nombre][0]}">${nombre_equipos[equipoRandom.nombre][0]}</div>`;

        if (++i >= pasos) {
          clearInterval(intervalo);
          mostrarEquipoFinal();
        }
      }, 100);
      }
    }

function mostrarEquipoFinal() {
  const equipoFinal = equipos.splice(equipoSeleccionado, 1)[0];
  const output = document.getElementById('output');
  const team = document.getElementById('team');
  const capitan = document.getElementById('capitan');
  const co_capitan = document.getElementById('co_capitan');

  // team.innerHTML = `<h2>${equipoFinal.nombre}</h2>`;
  // console.log(equipoFinal)
  // console.log(cap_y_co_capitanes[equipoFinal.nombre])
  capitan.innerHTML = `<div class="bg-equipos ${nombre_equipos[equipoFinal.nombre][0]} ">Capitan: ${cap_y_co_capitanes[equipoFinal.nombre][0]}</div>`;
  co_capitan.innerHTML = `<div class="bg-equipos ${nombre_equipos[equipoFinal.nombre][0]}">Co-Capitan: ${cap_y_co_capitanes[equipoFinal.nombre][1]}</div>`;

  // Detectar miembros pre-cargados
  const preCargados = miembros_pre_cargados[equipoFinal.nombre] || [];

  // Mezclar pre-cargados con los miembros aleatorios
  let miembrosDelEquipo = preCargados.concat(
    miembros.splice(0, Math.max(0, num_participantes_equipo - preCargados.length))
  );
  console.log(miembrosDelEquipo)
  // Mezclar los miembros del equipo de forma aleatoria
  for (let i = miembrosDelEquipo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [miembrosDelEquipo[i], miembrosDelEquipo[j]] = [miembrosDelEquipo[j], miembrosDelEquipo[i]];
  }

  let i = 0;

  function mostrarMiembroUnoPorUno() {
    if (i >= miembrosDelEquipo.length) return;

    const pasos = 10;
    let j = 0;
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    output.appendChild(spinner);

    const intervalo = setInterval(() => {
      // Mostrar aleatoriamente cualquier nombre de todos los miembros restantes
      const nombreTemporal = miembros[Math.floor(Math.random() * miembros.length)] || miembrosDelEquipo[i];
      spinner.textContent = nombreTemporal;

      if (++j >= pasos) {
        clearInterval(intervalo);
        spinner.remove();

        const miembroFinal = miembrosDelEquipo[i];
        const div = document.createElement('div');
        div.className = 'miembro letter_type';
        div.textContent = `${i + 1} - ${miembroFinal}`;
        output.appendChild(div);

        i++;
        setTimeout(mostrarMiembroUnoPorUno, 100);
      }
    }, 100);
  }

  if (miembros.length < 1 && equipos.length < 0) {
    const div = document.createElement('div');
    div.className = 'miembro letter_type';
    div.textContent = "No hay más participantes";
    output.appendChild(div);
  } else {
    mostrarMiembroUnoPorUno();
  }
}


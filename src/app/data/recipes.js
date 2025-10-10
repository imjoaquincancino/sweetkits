export const recipes = [
  {
    id: 1,
    name: "Kuchen de Manzana",
    description: "El clásico kuchen alemán con influencia chilena, perfecto para el té de la tarde en Puerto Varas.",
    category: "Repostería",
    difficulty: "Fácil",
    time: "45 minutos",
    servings: 8,
    image: "https://www.gourmet.cl/wp-content/uploads/2016/09/Tarta-de-manzana-ajustada-web-570x458.jpg",
    ingredients: [
      {
        name: "Manzanas",
        amount: "4 unidades",
        description: "Manzanas verdes o rojas, peladas y cortadas en rodajas"
      },
      {
        name: "Harina",
        amount: "200g",
        description: "Harina de trigo común"
      },
      {
        name: "Azúcar",
        amount: "150g",
        description: "Azúcar blanca granulada"
      },
      {
        name: "Mantequilla",
        amount: "100g",
        description: "Mantequilla a temperatura ambiente"
      },
      {
        name: "Huevos",
        amount: "2 unidades",
        description: "Huevos grandes"
      },
      {
        name: "Leche",
        amount: "200ml",
        description: "Leche entera"
      },
      {
        name: "Polvo de hornear",
        amount: "1 cucharadita",
        description: "Polvo de hornear"
      },
      {
        name: "Canela en polvo",
        amount: "1 cucharadita",
        description: "Canela molida"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la masa",
        description: "Mezclar la harina, azúcar, mantequilla, huevos, leche y polvo de hornear hasta obtener una masa homogénea. Dejar reposar 10 minutos."
      },
      {
        step: 2,
        title: "Preparar las manzanas",
        description: "Pelar y cortar las manzanas en rodajas finas. Espolvorear con canela y azúcar."
      },
      {
        step: 3,
        title: "Armar el kuchen",
        description: "Colocar la masa en un molde enmantecado. Distribuir las manzanas sobre la masa en forma decorativa."
      },
      {
        step: 4,
        title: "Hornear",
        description: "Hornear a 180°C por 35-40 minutos hasta que esté dorado. Dejar enfriar antes de servir."
      }
    ],
    tips: [
      "Usar manzanas ácidas para un mejor contraste de sabores",
      "Si la masa queda muy espesa, agregar un poco más de leche",
      "Servir tibio acompañado de crema chantilly"
    ],
    price: 12990,
    qrCode: "SK001"
  },
  {
    id: 2,
    name: "Leche Asada",
    description: "Postre tradicional chileno, cremoso y delicado, perfecto para cualquier ocasión.",
    category: "Postre",
    difficulty: "Muy Fácil",
    time: "60 minutos",
    servings: 6,
    image: "https://www.gourmet.cl/wp-content/uploads/2018/03/Leche-asada.png",
    ingredients: [
      {
        name: "Leche",
        amount: "1 litro",
        description: "Leche entera fresca"
      },
      {
        name: "Azúcar",
        amount: "200g",
        description: "Azúcar blanca"
      },
      {
        name: "Huevos",
        amount: "4 unidades",
        description: "Huevos grandes"
      },
      {
        name: "Esencia de vainilla",
        amount: "1 cucharadita",
        description: "Esencia de vainilla pura"
      },
      {
        name: "Canela en rama",
        amount: "1 unidad",
        description: "Canela en rama para decorar"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la mezcla",
        description: "Batir los huevos con el azúcar hasta que estén espumosos. Agregar la leche y la vainilla."
      },
      {
        step: 2,
        title: "Verter en molde",
        description: "Colocar la mezcla en un molde refractario. Agregar la canela en rama."
      },
      {
        step: 3,
        title: "Cocinar a baño maría",
        description: "Cocinar a baño maría en horno precalentado a 180°C por 45-50 minutos."
      },
      {
        step: 4,
        title: "Enfriar y servir",
        description: "Dejar enfriar completamente. Servir frío, idealmente con un poco de canela espolvoreada."
      }
    ],
    tips: [
      "El postre debe quedar tembloroso en el centro, como un flan",
      "No abrir el horno durante la cocción para evitar que se baje",
      "Preparar un día antes para mejores resultados"
    ],
    price: 8990,
    qrCode: "SK002"
  },
  {
    id: 3,
    name: "Queque Marmoleado",
    description: "Delicioso queque con mezcla de vainilla y chocolate, ideal para compartir en familia.",
    category: "Repostería",
    difficulty: "Fácil",
    time: "50 minutos",
    servings: 10,
    image: "https://es.cravingsjournal.com/wp-content/uploads/2020/04/queque-marmoleado-cebra-7-500x375.jpg",
    ingredients: [
      {
        name: "Aceite",
        amount: "80cc",
        description: "Aceite vegetal"
      },
      {
        name: "Mantequilla",
        amount: "150gr",
        description: "Mantequilla a temperatura ambiente"
      },
      {
        name: "Sal",
        amount: "Una pizca",
        description: "Sal fina para realzar sabor"
      },
      {
        name: "Azúcar",
        amount: "350g",
        description: "Azúcar blanca granulada"
      },
      {
        name: "Harina",
        amount: "400g",
        description: "Harina de trigo"
      },
      {
        name: "Leche",
        amount: "250cc",
        description: "Leche entera"
      },
      {
        name: "Huevos",
        amount: "4 unidades",
        description: "Huevos grandes"
      },
      {
        name: "Escencia de vainilla",
        amount: "1 cucharadita",
        description: "Escencia de vainilla"
      },
      {
        name: "Polvo de hornear",
        amount: "2 cucharaditas",
        description: "Polvo de hornear"
      },
      {
        name: "Cacao en polvo",
        amount: "6 cucharadas",
        description: "Cacao en polvo sin azúcar"
      },
      {
        name: "Leche (para el marmoleado)",
        amount: "4 cucharaditas",
        description: "Leche entera para el marmoleado"
      },
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la mezcla base",
        description: "Mezclar con batidora la mantequilla, aceite y azúcar para luego agregar los huevos, leche líquida y escencia de vainilla. Finalmente incorporar la haroina y polvos de hornear (tamizados) y la pizca de sal."
      },
      {
        step: 2,
        title: "Dividir la mezcla y agregar cacao",
        description: "Separar la mezcla en dos partes iguales. A una parte agregare el cacao en polvo tamizado y las 4 cucharaditas de leche, mezclar bien."
      },
      {
        step: 3,
        title: "Hornear el queque",
        description: "Enmantequillar y enharinar un molde para queque. Verter las dos mezclas alternadamente para crear el efecto marmoleado. Luego meter al horno precalentado a 180°C por 40-45 minutos."
      },
      {
        step: 4,
        title: "Enfriar y servir",
        description: "Comprobar con un palillo que está cocido por dentro. Dejar enfriar antes de desmoldar y servir."
      }
    ],
    tips: [
      "Usar ingredientes a temperatura ambiente para mejor mezcla",
      "No sobrebatir la mezcla para evitar que quede denso",
      "Dejar enfriar completamente antes de cortar para evitar que se desarme"
    ],
    price: 10990,
    qrCode: "SK003"
  },
  {
    id: 4,
    name: "Galletas de Limón",
    description: "Riquísimas galletas con un toque cítrico, perfectas para acompañar el té o café.",
    category: "Galletas",
    difficulty: "Fácil",
    time: "30 minutos",
    servings: 8,
    image: "https://i.ytimg.com/vi/2li75jxFQ_U/maxresdefault.jpg",
    ingredients: [
      {
        name: "Azúcar",
        amount: "5 cucharadas",
        description: "Azúcar blanca"
      },
      {
        name: "Aceite",
        amount: "4 cucharadas",
        description: "Aceite vegetal"
      },
      {
        name: "Leche",
        amount: "3 cucharadas",
        description: "Leche entera"
      },
      {
        name: "Limón",
        amount: "1 unidad",
        description: "Ralladura y jugo de un limón"
      },
      {
        name: "Escencia de vainilla",
        amount: "1 chorrito",
        description: "Esencia de vainilla"
      },
      {
        name: "Huevo",
        amount: "1 unidad",
        description: "Huevo grande"
      },
      {
        name: "Harina",
        amount: "17 cucharadas",
        description: "Harina de trigo"
      },
      {
        name: "Polvo de hornear",
        amount: "1 cucharada",
        description: "Polvo de hornear"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la masa",
        description: "Agregar en un bowl el azúcar, aceite, leche, ralladura de limón, jugo de limón, esencia de vainilla y huevo. Mezclar bien. Incorporar la harina y polvo de hornear hasta formar una masa suave."
      },
      {
        step: 2,
        title: "Crear bolitas",
        description: "Cuando esté lista la masa, formar bolitas pequeñas, pasarlas por azúcar y aplastarlas ligeramente con un tenedor."
      },
      {
        step: 3,
        title: "Hornear las galletas",
        description: "Llevar al horno precalentado a 180°C por 15 minutos."
      },
      {
        step: 4,
        title: "¡A disfrutar!",
        description: "Dejar enfriar y disfrutar con una taza de té o café."
      }
    ],
    tips: [
      "Usar limón fresco para un mejor sabor",
      "No sobrecargar la masa con harina para que queden suaves",
      "Hornear justo hasta que los bordes estén dorados"
    ],
    price: 8990,
    qrCode: "SK004"
  },
  {
    id: 5,
    name: "Pie de Limón",
    description: "Delicioso pie con base crujiente, relleno cremoso de limón y cubierta de merengue esponjoso.",
    category: "Repostería",
    difficulty: "Medio",
    time: "60 minutos",
    servings: 8,
    image: "https://cocinalocal.cl/wp-content/uploads/2021/08/pie-de-limon.jpg",
    ingredients: [
      {
        name: "Harina",
        amount: "200g",
        description: "Harina de trigo"
      },
      {
        name: "Azúcar flor",
        amount: "100g",
        description: "Azúcar flor para la masa"
      },
      {
        name: "Esencia de vainilla",
        amount: "1 cucharadita",
        description: "Esencia de vainilla"
      },
      {
        name: "Mantequilla",
        amount: "150g",
        description: "Mantequilla sin sal"
      },
      {
        name: "Leche condensada",
        amount: "2 tarros",
        description: "Leche condensada"
      },
      {
        name: "Jugo de limón",
        amount: "400g",
        description: "Jugo de limón fresco"
      },
      {
        name: "Huevos",
        amount: "3 unidades",
        description: "Huevos grandes"
      },
      {
        name: "Azúcar",
        amount: "100g",
        description: "Azúcar blanca para el merengue"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la masa",
        description: "Mezclar la harina junto con el azúcar flor, luego agrega la mantequilla a temperatura ambiente y la esencia de vaillina, junta todo hasta formar una masa."
      },
      {
        step: 2,
        title: "Hornear la base",
        description: "Coloca la masa en un molde previamente enharinado y reserva. Lleva al horno precalentado a 150°C por 15 minutos."
      },
      {
        step: 3,
        title: "Preparar el relleno",
        description: "Separa las clara de las yemas. Mezcla la leche condensada con las yemas y el jugo de limón"
      },
      {
        step: 4,
        title: "Rellenar la base",
        description: "Luego de horneada la base, agrega la mezcla de leche condensada a la masa y déjala en el horno unos 10 minutos más o hasta que veas la mezcla espesa"
      },
      {
        step: 5,
        title: "Preparar el merengue y decorar",
        description: "Luego, monta el merengue con las claras sobrantes y el azúcar. Decora tu pie de limón y sirve."
      },
      {
        step: 6,
        title: "¡A disfrutar!",
        description: "Disfruta de este delicioso pie de limón."
      }
    ],
    tips: [
      "Usar limones frescos para un mejor sabor",
      "No sobrebatir el merengue para que quede esponjoso",
      "Dejar enfriar el pie antes de servir para que tome consistencia"
    ],
    price: 10990,
    qrCode: "SK005"
  }
];

// Datos adicionales para la tienda
export const categories = [
  { id: 1, name: "Repostería", icon: "🍰" },
  { id: 2, name: "Postre", icon: "🥛" },
  { id: 3, name: "Galletas", icon: "🍪" }
];

export const featuredProducts = recipes.slice(2, 5);

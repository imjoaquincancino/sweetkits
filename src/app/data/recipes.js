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
    name: "Arroz con Leche",
    description: "Clásico postre chileno reconfortante, con el toque perfecto de canela y vainilla.",
    category: "Postre",
    difficulty: "Fácil",
    time: "40 minutos",
    servings: 8,
    image: "https://images.aws.nestle.recipes/resized/f936ac1be93a5cc1273e22cf33d84617_Arroz_con_Leche_1200_628.jpg",
    ingredients: [
      {
        name: "Arroz",
        amount: "200g",
        description: "Arroz grano corto"
      },
      {
        name: "Leche",
        amount: "1 litro",
        description: "Leche entera"
      },
      {
        name: "Azúcar",
        amount: "150g",
        description: "Azúcar blanca"
      },
      {
        name: "Canela en rama",
        amount: "2 unidades",
        description: "Canela en rama"
      },
      {
        name: "Esencia de vainilla",
        amount: "1 cucharadita",
        description: "Esencia de vainilla"
      },
      {
        name: "Canela en polvo",
        amount: "Al gusto",
        description: "Para espolvorear al servir"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Cocinar el arroz",
        description: "Lavar el arroz y cocinarlo en agua hasta que esté casi tierno. Escurrir."
      },
      {
        step: 2,
        title: "Agregar leche y especias",
        description: "Incorporar la leche, azúcar, canela en rama y vainilla. Cocinar a fuego bajo revolviendo constantemente."
      },
      {
        step: 3,
        title: "Cocinar hasta espesar",
        description: "Continuar cocinando hasta que la mezcla espese y el arroz esté muy suave, aproximadamente 25 minutos."
      },
      {
        step: 4,
        title: "Servir",
        description: "Dejar enfriar y servir espolvoreado con canela en polvo."
      }
    ],
    tips: [
      "Revolver constantemente para evitar que se pegue",
      "El arroz debe quedar muy suave, casi deshaciéndose",
      "Mejor servido frío o a temperatura ambiente"
    ],
    price: 7990,
    qrCode: "SK003"
  },
  {
    id: 4,
    name: "Torta de Mil Hojas",
    description: "Capas crujientes de masa con relleno de manjar, un clásico de la repostería chilena.",
    category: "Tradicional",
    difficulty: "Medio",
    time: "90 minutos + reposo",
    servings: 12,
    image: "https://www.gourmet.cl/wp-content/uploads/2017/02/16-507x458.jpg",
    ingredients: [
      {
        name: "Harina",
        amount: "500g",
        description: "Harina sin polvos"
      },
      {
        name: "Mantequilla",
        amount: "300g",
        description: "Mantequilla fría en cubos"
      },
      {
        name: "Agua fría",
        amount: "200ml",
        description: "Agua muy fría"
      },
      {
        name: "Sal",
        amount: "1 cucharadita",
        description: "Sal fina"
      },
      {
        name: "Manjar",
        amount: "500g",
        description: "Manjar (dulce de leche)"
      },
      {
        name: "Azúcar glas",
        amount: "100g",
        description: "Azúcar glas para espolvorear"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la masa",
        description: "Mezclar harina, sal y mantequilla hasta formar migajas. Agregar agua fría gradualmente hasta formar una masa."
      },
      {
        step: 2,
        title: "Formar capas",
        description: "Dividir la masa en 10-12 porciones. Estirar cada porción muy fina y hornear por separado."
      },
      {
        step: 3,
        title: "Hornear las capas",
        description: "Hornear cada capa a 200°C por 8-10 minutos hasta que estén doradas y crujientes."
      },
      {
        step: 4,
        title: "Armar la torta",
        description: "Alternar capas de masa con abundante manjar. Terminar con azúcar glas espolvoreada."
      }
    ],
    tips: [
      "Las capas deben ser muy delgadas para que queden crujientes",
      "Dejar reposar la torta al menos 2 horas antes de cortar",
      "Puede agregarse merengue entre las capas para más volumen"
    ],
    price: 15990,
    qrCode: "SK004"
  },
  {
    id: 5,
    name: "Alfajores Chilenos",
    description: "Galletas suaves rellenas de manjar, cubiertas de coco rallado. ¡Irresistibles!",
    category: "Galletas",
    difficulty: "Fácil",
    time: "30 minutos",
    servings: 20,
    image: "https://easyways.cl/storage/20180601144100alfajores-chilenas.jpg",
    ingredients: [
      {
        name: "Harina",
        amount: "300g",
        description: "Harina de trigo"
      },
      {
        name: "Maicena",
        amount: "200g",
        description: "Almidón de maíz"
      },
      {
        name: "Mantequilla",
        amount: "150g",
        description: "Mantequilla a temperatura ambiente"
      },
      {
        name: "Azúcar",
        amount: "100g",
        description: "Azúcar blanca"
      },
      {
        name: "Huevos",
        amount: "2 unidades",
        description: "Yemas de huevo"
      },
      {
        name: "Manjar",
        amount: "300g",
        description: "Manjar para rellenar"
      },
      {
        name: "Coco rallado",
        amount: "200g",
        description: "Coco rallado para rebozar"
      }
    ],
    steps: [
      {
        step: 1,
        title: "Preparar la masa",
        description: "Mezclar mantequilla, azúcar, yemas y maicena. Agregar harina gradualmente hasta formar una masa suave."
      },
      {
        step: 2,
        title: "Formar galletas",
        description: "Hacer bolitas pequeñas y colocarlas en una placa enmantecada. Aplastar ligeramente."
      },
      {
        step: 3,
        title: "Hornear",
        description: "Hornear a 160°C por 15 minutos hasta que estén ligeramente doradas en los bordes."
      },
      {
        step: 4,
        title: "Rellenar y decorar",
        description: "Unir dos galletas con manjar y rebozar los bordes en coco rallado."
      }
    ],
    tips: [
      "La masa debe ser muy suave, casi como un puré",
      "No hornear demasiado para que queden suaves",
      "Usar manjar consistente pero no muy duro"
    ],
    price: 10990,
    qrCode: "SK005"
  }
];

// Datos adicionales para la tienda
export const categories = [
  { id: 1, name: "Repostería", icon: "🍰" },
  { id: 2, name: "Postre", icon: "🥛" },
  { id: 3, name: "Tradicional", icon: "🎂" },
  { id: 4, name: "Galletas", icon: "🍪" }
];

export const featuredProducts = recipes.slice(0, 3);

/**
 * Base de Datos Botánica de Plantas Populares en Argentina
 * Formato requerido: Nombre Científico (Nombre común según usos y costumbres en Argentina)
 * Con perfiles visuales biométricos para el Agente de IA
 */

export const ARGENTINE_PLANTS = [
  // --- PLANTAS DE INTERIOR Y BALCÓN ---
  {
    id: 'potus',
    scientificName: 'Epipremnum aureum',
    argentineName: 'Potus / Pothos',
    family: 'Araceae',
    category: 'Interior / Balcón',
    light: 'Luz indirecta brillante a media sombra',
    summerWatering: 'Cada 4 a 6 días cuando los primeros 3 cm de sustrato estén secos',
    winterWatering: 'Cada 8 a 12 días, muy moderado',
    wateringDiagnosisHealthy: 'Hojas acorazonadas carnosas y brillantes, sin ápices marrones ni enrollamiento.',
    fertilizer: 'Fertifox Follaje o Fertilizante Líquido Plantas Verdes (NPK 14-8-8)',
    idealPh: '6.0 - 6.5',
    visualProfile: {
      hue: 'green_variegated',
      texture: 'heart_trailing',
      avgGreen: 65,
      avgYellow: 20,
      avgRed: 5,
      contrast: 40
    },
    keywords: ['potus', 'pothos', 'epipremnum', 'trepadora', 'interior']
  },
  {
    id: 'monstera',
    scientificName: 'Monstera deliciosa',
    argentineName: 'Costilla de Adán / Cerimán',
    family: 'Araceae',
    category: 'Interior / Balcón',
    light: 'Luz brillante tamizada (nunca sol directo fuerte)',
    summerWatering: 'Cada 5 a 7 días. Pulverizar follaje en días secos',
    winterWatering: 'Cada 10 a 14 días (dejar secar bien el sustrato entre riegos)',
    wateringDiagnosisHealthy: 'Follaje verde oscuro con fenestraciones profundas turgentes y raíces aéreas saludables.',
    fertilizer: 'Fertifox Follaje o Nitrofoska verde diluido cada 20 días en primavera/verano',
    idealPh: '5.5 - 6.5',
    visualProfile: {
      hue: 'green_deep',
      texture: 'broad_fenestrated',
      avgGreen: 78,
      avgYellow: 6,
      avgRed: 4,
      contrast: 55
    },
    keywords: ['monstera', 'costilla de adan', 'ceriman', 'costilla']
  },
  {
    id: 'sansevieria',
    scientificName: 'Sansevieria trifasciata',
    argentineName: 'Espada de San Jorge / Lengua de Suegra',
    family: 'Asparagaceae',
    category: 'Interior / Suculenta',
    light: 'Muy resistente: desde sol suave hasta sombra en interiores',
    summerWatering: 'Cada 10 a 15 días. Es sumamente sensible al exceso de agua',
    winterWatering: 'Cada 25 a 30 días (prácticamente suspender riego en invierno)',
    wateringDiagnosisHealthy: 'Hojas erectas rígidas y carnosas con bordes amarillos firmes y sin ablandamiento en la base.',
    fertilizer: 'Fertilizante para Cactus y Crasas o Nitrofoska muy baja dosis cada 2 meses',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'green_striped_yellow',
      texture: 'sword_vertical',
      avgGreen: 55,
      avgYellow: 28,
      avgRed: 6,
      contrast: 60
    },
    keywords: ['sansevieria', 'espada de san jorge', 'lengua de suegra', 'espada']
  },
  {
    id: 'gomero',
    scientificName: 'Ficus elastica',
    argentineName: 'Gomero / Árbol del Caucho',
    family: 'Moraceae',
    category: 'Interior / Jardín',
    light: 'Luz brillante indirecta abundante',
    summerWatering: 'Cada 5 a 7 días',
    winterWatering: 'Cada 12 a 15 días',
    wateringDiagnosisHealthy: 'Hojas gruesas coriáceas color borravino o verde botella brillante con ápices rosados activos.',
    fertilizer: 'Fertifox Crecimiento o abono orgánico con compost y humus',
    idealPh: '6.0 - 6.8',
    visualProfile: {
      hue: 'green_dark_glossy',
      texture: 'broad_thick',
      avgGreen: 72,
      avgYellow: 5,
      avgRed: 12,
      contrast: 50
    },
    keywords: ['gomero', 'ficus elastica', 'caucho']
  },
  {
    id: 'ficus_benjamina',
    scientificName: 'Ficus benjamina',
    argentineName: 'Ficus / Ficus Péndula',
    family: 'Moraceae',
    category: 'Interior / Patio',
    light: 'Mucha luz sin corrientes bruscas de aire',
    summerWatering: 'Cada 4 a 6 días',
    winterWatering: 'Cada 10 a 12 días',
    wateringDiagnosisHealthy: 'Copita frondosa con brotes terminales tiernos y sin caída masiva de hojas verdes.',
    fertilizer: 'Fertifox Foliar o humus de lombriz en superficie',
    idealPh: '6.5 - 7.0',
    visualProfile: {
      hue: 'green_canopy',
      texture: 'fine_dense',
      avgGreen: 74,
      avgYellow: 10,
      avgRed: 4,
      contrast: 42
    },
    keywords: ['ficus', 'ficus benjamina', 'pendula']
  },
  {
    id: 'lirio_paz',
    scientificName: 'Spathiphyllum wallisii',
    argentineName: 'Cuna de Moisés / Lirio de la Paz',
    family: 'Araceae',
    category: 'Interior',
    light: 'Sombra luminosa o semisombra',
    summerWatering: 'Cada 3 a 5 días (indica sed bajando sus hojas)',
    winterWatering: 'Cada 7 a 9 días',
    wateringDiagnosisHealthy: 'Hojas erguidas verde brillante lustroso y espata floral blanca sin puntas secas.',
    fertilizer: 'Fertifox Floración o bioestimulante con fósforo',
    idealPh: '5.8 - 6.5',
    visualProfile: {
      hue: 'green_white_bloom',
      texture: 'lanceolate_flower',
      avgGreen: 68,
      avgYellow: 8,
      avgRed: 4,
      contrast: 48
    },
    keywords: ['lirio de la paz', 'cuna de moises', 'spathiphyllum', 'espatifilo']
  },
  {
    id: 'jade',
    scientificName: 'Crassula ovata',
    argentineName: 'Árbol de Jade / Suculenta de la Suerte',
    family: 'Crassulaceae',
    category: 'Suculenta / Balcón',
    light: 'Sol de mañana o luz muy brillante',
    summerWatering: 'Cada 10 a 14 días',
    winterWatering: 'Cada 20 a 30 días cuando las hojas pierdan levemente rigidez',
    wateringDiagnosisHealthy: 'Hojas carnosas verde jade con ribete rojizo compacto, troncos leñosos y turgentes.',
    fertilizer: 'Harina de huesos y abono para suculentas',
    idealPh: '6.5 - 7.0',
    visualProfile: {
      hue: 'green_fleshy_rededge',
      texture: 'succulent_round',
      avgGreen: 60,
      avgYellow: 14,
      avgRed: 15,
      contrast: 38
    },
    keywords: ['jade', 'arbol de jade', 'crassula', 'suculenta']
  },
  {
    id: 'zamioculca',
    scientificName: 'Zamioculcas zamiifolia',
    argentineName: 'Zamioculca / Joya de Zanzíbar',
    family: 'Araceae',
    category: 'Interior resistente',
    light: 'Tolera baja luminosidad y luz brillante',
    summerWatering: 'Cada 12 a 18 días',
    winterWatering: 'Cada 25 a 35 días (almacena agua en sus rizomas tuberosos)',
    wateringDiagnosisHealthy: 'Tallos erguidos con foliolos engomados ultra brillantes sin amarillamiento basal.',
    fertilizer: 'Fertilizante líquido equilibrado en dosis mínima en primavera',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'green_glossy_pinnate',
      texture: 'thick_stalks',
      avgGreen: 76,
      avgYellow: 8,
      avgRed: 4,
      contrast: 52
    },
    keywords: ['zamioculca', 'zz plant', 'zanzibar']
  },
  {
    id: 'lazo_amor',
    scientificName: 'Chlorophytum comosum',
    argentineName: 'Lazo de Amor / Cinta / Malamadre',
    family: 'Asparagaceae',
    category: 'Interior / Colgante',
    light: 'Luz tamizada o exterior protegido',
    summerWatering: 'Cada 3 a 5 días',
    winterWatering: 'Cada 7 a 10 días',
    wateringDiagnosisHealthy: 'Cintas arqueadas verdes con banda central blanca o crema y estolones con hijuelos activos.',
    fertilizer: 'Compost maduro o fertilizante universal una vez al mes',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'green_white_ribbon',
      texture: 'linear_arched',
      avgGreen: 50,
      avgYellow: 22,
      avgRed: 5,
      contrast: 58
    },
    keywords: ['lazo de amor', 'cinta', 'malamadre', 'chlorophytum']
  },

  // --- FLORES Y ARBUSTOS DE JARDÍN ARGENTINO ---
  {
    id: 'malvon',
    scientificName: 'Pelargonium hortorum',
    argentineName: 'Malvón Común / Geranio Criollo',
    family: 'Geraniaceae',
    category: 'Exterior / Balcón tradicional',
    light: 'Pleno sol (mínimo 5 horas diarias)',
    summerWatering: 'Cada 2 a 3 días (sustrato seco entre riegos)',
    winterWatering: 'Cada 7 a 10 días',
    wateringDiagnosisHealthy: 'Follaje perfumado con la clásica zona oscura en herradura y umbelas florales densas.',
    fertilizer: 'Nitrofoska Roja o Fertifox Floración quincenal en floración',
    idealPh: '6.5 - 7.5',
    visualProfile: {
      hue: 'magenta_pink_bloom',
      texture: 'scalloped_flower',
      avgGreen: 48,
      avgYellow: 10,
      avgRed: 35,
      contrast: 46
    },
    keywords: ['malvon', 'geranio', 'pelargonium', 'balcon']
  },
  {
    id: 'santa_rita',
    scientificName: 'Bougainvillea glabra',
    argentineName: 'Santa Rita / Buganvilla',
    family: 'Nyctaginaceae',
    category: 'Exterior trepadora',
    light: 'Sol pleno y calor',
    summerWatering: 'Cada 4 a 6 días en suelo; cada 2 a 3 días en maceta grande',
    winterWatering: 'Cada 12 a 15 días (resistente a sequía)',
    wateringDiagnosisHealthy: 'Bracteas florales fucsias, violetas o rojas abundantes con ramas leñosas y espinas vigorosas.',
    fertilizer: 'Fósforo y potasio (harina de huesos) a finales del invierno',
    idealPh: '6.0 - 6.5',
    visualProfile: {
      hue: 'magenta_fuchsia',
      texture: 'bract_dense',
      avgGreen: 35,
      avgYellow: 8,
      avgRed: 50,
      contrast: 62
    },
    keywords: ['santa rita', 'buganvilla', 'bougainvillea', 'trepadora']
  },
  {
    id: 'rosal',
    scientificName: 'Rosa gallica / Rosa sp.',
    argentineName: 'Rosal de Jardín / Rosa Criolla',
    family: 'Rosaceae',
    category: 'Jardín / Flor',
    light: 'Pleno sol obligatorio',
    summerWatering: 'Cada 2 a 4 días al pie, evitando mojar el follaje',
    winterWatering: 'Cada 8 a 10 días tras la poda invernal',
    wateringDiagnosisHealthy: 'Tallos vigorosos con hojas dentadas sin manchas de oídio ni pulgones en los pimpollos.',
    fertilizer: 'Fertifox Rosales o Harina de Huesos + Compost en julio/agosto',
    idealPh: '6.0 - 6.5',
    visualProfile: {
      hue: 'red_crimson_bloom',
      texture: 'serrated_petals',
      avgGreen: 42,
      avgYellow: 8,
      avgRed: 44,
      contrast: 56
    },
    keywords: ['rosal', 'rosa', 'rosas', 'pimpollo']
  },
  {
    id: 'estrella_federal',
    scientificName: 'Euphorbia pulcherrima',
    argentineName: 'Estrella Federal / Flor de Nochebuena',
    family: 'Euphorbiaceae',
    category: 'Interior / Jardín protegido',
    light: 'Muy luminosa sin corrientes de aire',
    summerWatering: 'Cada 4 a 6 días',
    winterWatering: 'Cada 8 a 10 días con agua a temperatura templada',
    wateringDiagnosisHealthy: 'Brácteas rojas intensas turgentes y hojas basales verdes firmes sin caída prematura.',
    fertilizer: 'Fertilizante equilibrado mensual hasta el inicio del enrojecimiento',
    idealPh: '5.5 - 6.5',
    visualProfile: {
      hue: 'bright_scarlet_red',
      texture: 'star_bracts',
      avgGreen: 38,
      avgYellow: 7,
      avgRed: 48,
      contrast: 65
    },
    keywords: ['estrella federal', 'poinsettia', 'nochebuena']
  },
  {
    id: 'hortensia',
    scientificName: 'Hydrangea macrophylla',
    argentineName: 'Hortensia de Jardín',
    family: 'Hydrangeaceae',
    category: 'Jardín de sombra',
    light: 'Semisombra fresca (sol de mañana temprano)',
    summerWatering: 'Diario o día por medio en días calurosos de verano',
    winterWatering: 'Cada 7 a 10 días',
    wateringDiagnosisHealthy: 'Grandes cabezuelas florales azules o rosadas turgentes y follaje amplio bien hidratado.',
    fertilizer: 'Sulfato de aluminio para tonos azules, abono acidófilo en primavera',
    idealPh: '5.0 - 6.0',
    visualProfile: {
      hue: 'cyan_blue_spherical',
      texture: 'globular_cluster',
      avgGreen: 45,
      avgYellow: 6,
      avgRed: 15,
      contrast: 45
    },
    keywords: ['hortensia', 'hydrangea', 'sombra']
  },

  // --- HUERTA, FRUTALES Y AROMÁTICAS EN ARGENTINA ---
  {
    id: 'tomate',
    scientificName: 'Solanum lycopersicum',
    argentineName: 'Tomate Platense / Perita / Cherry',
    family: 'Solanaceae',
    category: 'Huerta / Fruto',
    light: 'Sol pleno constante (mínimo 6-8 horas)',
    summerWatering: 'Diario o cada 2 días en días de calor extremo; riego profundo al pie nunca sobre las hojas',
    winterWatering: 'Cultivo estival (sensible a heladas)',
    wateringDiagnosisHealthy: 'Tallo robusto velloso verde vivo, follaje turgente sin marchitez en las puntas ni enrollamiento.',
    fertilizer: 'Harina de huesos, compost maduro y calcio para evitar podredumbre apical (blossom end rot)',
    idealPh: '6.0 - 6.8',
    visualProfile: {
      hue: 'red_fruit_green_vine',
      texture: 'lobed_hairy_leaves',
      avgGreen: 52,
      avgYellow: 14,
      avgRed: 30,
      contrast: 54
    },
    keywords: ['tomate', 'platense', 'cherry', 'perita', 'solanum']
  },
  {
    id: 'limonero',
    scientificName: 'Citrus × limon',
    argentineName: 'Limonero 4 Estaciones / Eureka',
    family: 'Rutaceae',
    category: 'Frutal cítrico',
    light: 'Pleno sol todo el año',
    summerWatering: 'Cada 2 a 4 días en maceta grande; cada 5 a 7 días en suelo directo',
    winterWatering: 'Cada 10 a 14 días',
    wateringDiagnosisHealthy: 'Hojas verde profundo coriáceas y perfumadas, brotes morados tiernos y limones en desarrollo parejo.',
    fertilizer: 'Fertifox Cítricos o Nitrofoska Azul + quelato de hierro en septiembre y enero',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'yellow_fruit_glossy_leaf',
      texture: 'coriaceous_oval',
      avgGreen: 58,
      avgYellow: 32,
      avgRed: 5,
      contrast: 52
    },
    keywords: ['limonero', 'limon', 'citrico', 'cuatro estaciones']
  },
  {
    id: 'naranjo',
    scientificName: 'Citrus sinensis',
    argentineName: 'Naranjo Dulce / De Ombligo',
    family: 'Rutaceae',
    category: 'Frutal cítrico',
    light: 'Pleno sol',
    summerWatering: 'Cada 3 a 5 días',
    winterWatering: 'Cada 12 a 15 días',
    wateringDiagnosisHealthy: 'Copa densa con hojas brillantes verde oscuro, flor de azahar fragante y frutos firmes.',
    fertilizer: 'Abono para cítricos rico en nitrógeno, fósforo y microelementos',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'orange_citrus_deep_green',
      texture: 'dense_canopy_fruit',
      avgGreen: 62,
      avgYellow: 22,
      avgRed: 12,
      contrast: 50
    },
    keywords: ['naranjo', 'naranja', 'citrico', 'ombligo']
  },
  {
    id: 'morron',
    scientificName: 'Capsicum annuum',
    argentineName: 'Morrón / Pimiento / Ají Calahorra',
    family: 'Solanaceae',
    category: 'Huerta estival',
    light: 'Sol pleno',
    summerWatering: 'Cada 2 a 3 días manteniendo humedad constante sin encharcar',
    winterWatering: 'Sensible al frío (proteger en invernadero si se conserva)',
    wateringDiagnosisHealthy: 'Porte erecto ramificado, hojas tiernas brillantes y flores blancas solitarias bien polinizadas.',
    fertilizer: 'Compost rico en potasio (ceniza de madera) para engorde de frutos',
    idealPh: '6.0 - 6.8',
    visualProfile: {
      hue: 'glossy_pepper_green_red',
      texture: 'erect_branched',
      avgGreen: 56,
      avgYellow: 12,
      avgRed: 26,
      contrast: 48
    },
    keywords: ['morron', 'pimiento', 'aji', 'calahorra']
  },
  {
    id: 'albahaca',
    scientificName: 'Ocimum basilicum',
    argentineName: 'Albahaca Criolla / Hoja Ancha',
    family: 'Lamiaceae',
    category: 'Aromática de huerta',
    light: 'Sol suave o semisombra luminosa',
    summerWatering: 'Diario en verano (marcadamente sensible a la sequía)',
    winterWatering: 'Anual estival (muere con las primeras heladas)',
    wateringDiagnosisHealthy: 'Follaje aterciopelado intensamente aromático, hojas convexas sin marchitez ni ápices quemados.',
    fertilizer: 'Humus de lombriz en superficie cada 20 días (evitar exceso químico que resta aroma)',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'lime_tender_green',
      texture: 'convex_velvety',
      avgGreen: 74,
      avgYellow: 16,
      avgRed: 4,
      contrast: 34
    },
    keywords: ['albahaca', 'basilicum', 'aromatica']
  },
  {
    id: 'romero',
    scientificName: 'Salvia rosmarinus',
    argentineName: 'Romero Criollo / De Jardín',
    family: 'Lamiaceae',
    category: 'Aromática rústica',
    light: 'Pleno sol obligatorio',
    summerWatering: 'Cada 7 a 10 días (odía el exceso de agua)',
    winterWatering: 'Cada 15 a 20 días',
    wateringDiagnosisHealthy: 'Agujas verde grisáceas rígidas muy resinosas y tallos leñosos sin ablandamiento basal.',
    fertilizer: 'Muy poco exigente: un poco de compost al inicio de primavera',
    idealPh: '6.5 - 8.0',
    visualProfile: {
      hue: 'silvery_grey_green',
      texture: 'needle_linear',
      avgGreen: 54,
      avgYellow: 15,
      avgRed: 8,
      contrast: 46
    },
    keywords: ['romero', 'salvia rosmarinus', 'aromatica']
  },
  {
    id: 'lavanda',
    scientificName: 'Lavandula angustifolia',
    argentineName: 'Lavanda Criolla / De los Jardines',
    family: 'Lamiaceae',
    category: 'Aromática / Flor',
    light: 'Pleno sol riguroso',
    summerWatering: 'Cada 6 a 8 días (sustrato calcáreo y seco)',
    winterWatering: 'Cada 15 a 20 días',
    wateringDiagnosisHealthy: 'Follaje plateado firme, espigas florales violetas erectas y fragancia balsámica.',
    fertilizer: 'Añadir arena y un poco de cal apagada; evitar fertilizantes nitrogenados',
    idealPh: '7.0 - 8.0',
    visualProfile: {
      hue: 'violet_spikes_grey_foliage',
      texture: 'erect_spikes',
      avgGreen: 46,
      avgYellow: 10,
      avgRed: 24,
      contrast: 50
    },
    keywords: ['lavanda', 'lavandula', 'aromatica', 'violeta']
  },
  {
    id: 'frutilla',
    scientificName: 'Fragaria × ananassa',
    argentineName: 'Frutilla Criolla / De Coronda',
    family: 'Rosaceae',
    category: 'Frutal menor / Balcón',
    light: 'Sol directo moderado',
    summerWatering: 'Diario en verano mediante goteo sin encharcar la corona',
    winterWatering: 'Cada 5 a 7 días',
    wateringDiagnosisHealthy: 'Hojas trifoliadas verde brillante dentadas con estolones vigorosos y frutos cónicos carmesí.',
    fertilizer: 'Fertilizante rico en potasio y acolchado de paja o mulching de plástico',
    idealPh: '5.5 - 6.5',
    visualProfile: {
      hue: 'strawberry_red_serrated',
      texture: 'trifoliate_creeping',
      avgGreen: 52,
      avgYellow: 12,
      avgRed: 32,
      contrast: 52
    },
    keywords: ['frutilla', 'fresa', 'fragaria', 'coronda']
  },
  {
    id: 'palta',
    scientificName: 'Persea americana',
    argentineName: 'Palta Criolla / Hass / Aguacate',
    family: 'Lauraceae',
    category: 'Árbol frutal',
    light: 'Pleno sol protegido de vientos fuertes y heladas',
    summerWatering: 'Cada 3 a 5 días (sensible tanto a la sequía como a la podredumbre por encharcamiento)',
    winterWatering: 'Cada 10 a 14 días',
    wateringDiagnosisHealthy: 'Hojas grandes coriáceas verde esmeralda con brotes rojizos y nervaduras bien marcadas.',
    fertilizer: 'Compost + sulfato de zinc y magnesio en primavera',
    idealPh: '6.0 - 6.5',
    visualProfile: {
      hue: 'emerald_large_leaf',
      texture: 'coriaceous_pointed',
      avgGreen: 74,
      avgYellow: 10,
      avgRed: 8,
      contrast: 46
    },
    keywords: ['palta', 'aguacate', 'persea', 'hass']
  },
  {
    id: 'ceibo',
    scientificName: 'Erythrina crista-galli',
    argentineName: 'Ceibo (Flor Nacional Argentina)',
    family: 'Fabaceae',
    category: 'Árbol autóctono / Flor nacional',
    light: 'Pleno sol en zonas húmedas o riberas',
    summerWatering: 'Frecuente (ama la cercanía de agua y suelos húmedos)',
    winterWatering: 'Cada 10 a 14 días durante su reposo vegetativo',
    wateringDiagnosisHealthy: 'Corteza suberosa rugosa con racimos péndulos de flores rojo escarlata aterciopeladas.',
    fertilizer: 'Fija nitrógeno atmosférico por nódulos radiculares; necesita fósforo en primavera',
    idealPh: '6.0 - 7.0',
    visualProfile: {
      hue: 'scarlet_crested_flower',
      texture: 'pendulous_racemes',
      avgGreen: 40,
      avgYellow: 8,
      avgRed: 48,
      contrast: 64
    },
    keywords: ['ceibo', 'flor nacional', 'erythrina', 'arbol nacional']
  },
  {
    id: 'jacaranda',
    scientificName: 'Jacaranda mimosifolia',
    argentineName: 'Jacarandá / Tarco del Norte',
    family: 'Bignoniaceae',
    category: 'Árbol urbano emblemático',
    light: 'Pleno sol',
    summerWatering: 'Semanal cuando es joven; resistente una vez establecido',
    winterWatering: 'Cada 15 a 20 días',
    wateringDiagnosisHealthy: 'Follaje bipinnado fino tipo helecho y espectacular floración lila/celeste en noviembre.',
    fertilizer: 'Compost en el alcorque a la salida del invierno',
    idealPh: '6.0 - 7.5',
    visualProfile: {
      hue: 'lavender_sky_bipinnate',
      texture: 'fern_like_delicate',
      avgGreen: 44,
      avgYellow: 10,
      avgRed: 26,
      contrast: 48
    },
    keywords: ['jacaranda', 'tarco', 'arbol lila', 'buenos aires']
  },
  {
    id: 'aloe_vera',
    scientificName: 'Aloe vera / Aloe barbadensis',
    argentineName: 'Aloe Vera / Sábila Criolla',
    family: 'Asphodelaceae',
    category: 'Medicinal / Suculenta',
    light: 'Sol directo moderado o luz muy intensa',
    summerWatering: 'Cada 10 a 14 días (dejar secar completamente la tierra)',
    winterWatering: 'Cada 20 a 30 días',
    wateringDiagnosisHealthy: 'Pencas carnosas gruesas con gel abundante y bordes espinosos firmes sin arrugas ni tonos marrones.',
    fertilizer: 'Compost suave para cactus cada 3 meses',
    idealPh: '6.5 - 7.5',
    visualProfile: {
      hue: 'glaucous_succulent_gel',
      texture: 'fleshy_spined_rosette',
      avgGreen: 62,
      avgYellow: 18,
      avgRed: 6,
      contrast: 40
    },
    keywords: ['aloe', 'aloe vera', 'sabila', 'medicinal']
  }
];

export function searchArgentinePlants(query) {
  if (!query || query.trim() === '') {
    return ARGENTINE_PLANTS.slice(0, 10);
  }
  const clean = query.toLowerCase().trim();
  return ARGENTINE_PLANTS.filter(p => 
    p.scientificName.toLowerCase().includes(clean) ||
    p.argentineName.toLowerCase().includes(clean) ||
    p.keywords.some(k => k.includes(clean))
  );
}

export function formatBotanicalName(plant) {
  if (!plant) return 'Plantae sp. (Planta de Jardín)';
  return `${plant.scientificName} (${plant.argentineName})`;
}

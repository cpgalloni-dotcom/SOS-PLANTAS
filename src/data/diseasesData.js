export const DISEASES_DATABASE = [
  {
    id: 'oidio',
    name: 'Oídio (Cenicilla o Mal Blanco)',
    scientificName: 'Podosphaera pannosa / Erysiphe spp.',
    category: 'Hongos',
    plantTypes: ['Flores', 'Frutales', 'Hortalizas'],
    affectedCrops: ['Rosas', 'Tomate', 'Vid', 'Manzano', 'Calabacín'],
    severity: 'Moderada',
    image: 'https://images.unsplash.com/photo-1599818816942-d6112ff7f08b?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Polvillo blanco grisáceo con aspecto de harina en el haz de las hojas.',
      'Hojas jóvenes abarquilladas, deformadas y con crecimiento atrofiado.',
      'Secado y caída prematura de follaje y capullos florales que no abren.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'El hongo prolifera con humedad ambiental alta pero con hojas secas. NO mojar las hojas al regar.',
    wateringAdvice: 'Regar exclusivamente al pie de la planta o por goteo a primera hora de la mañana. Evitar aspersión o mojar el follaje.',
    organicTreatment: [
      'Leche diluida al 10% (1 parte de leche entera por 9 de agua) pulverizada a pleno sol; actúa como fungicida biológico por lactoferrina.',
      'Bicarbonato de potasio o de sodio (5g por litro de agua + 1 cucharadita de jabón potásico como emulsionante).',
      'Decocción de cola de caballo (Equisetum arvense) rica en sílice que refuerza la pared celular.'
    ],
    chemicalTreatment: [
      'Azufre micronizado en polvo o mojable (aplicar a temperaturas menores de 28°C para no quemar hojas).',
      'Fungicida sistémico triazol (Difenoconazol o Penconazol) en casos avanzados.'
    ],
    prevention: 'Podar ramas interiores para aumentar la circulación de aire, plantar en zonas con sol directo continuo.'
  },
  {
    id: 'mildiu',
    name: 'Mildiu (Tizón Foliar)',
    scientificName: 'Phytophthora infestans / Plasmopara viticola',
    category: 'Hongos',
    plantTypes: ['Hortalizas', 'Frutales'],
    affectedCrops: ['Tomate', 'Papa', 'Vid', 'Pepino', 'Cebolla'],
    severity: 'Alta',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Manchas aceitosas amarillentas o marrones en el haz de la hoja.',
      'Fieltro o pelusa blanquecina en el envés bajo condiciones de humedad alta.',
      'Necrosis rápida de tallos y pudrición parda y dura en frutos verdes.'
    ],
    wateringStatus: 'exceso_riego',
    wateringDiagnosis: '¡Alerta de humedad! El mildiu requiere lámina de agua libre sobre la hoja para germinar. Hay exceso de humedad foliar o encharcamiento.',
    wateringAdvice: 'Espaciar los riegos de inmediato. Suspender riegos nocturnos. Verificar drenaje del suelo y eliminar ramas bajas que toquen la tierra mojada.',
    organicTreatment: [
      'Caldo bordelés suave (sulfato de cobre + cal apagada).',
      'Purín de ortiga fermentado (dilución 1:10) para elevar las defensas fitohormonales.',
      'Extracto de semillas de pomelo o aceite de neem con bicarbonato.'
    ],
    chemicalTreatment: [
      'Oxicloruro de cobre al 50% como preventivo y de contacto.',
      'Metalaxil + Mancozeb o Fosetil-Aluminio como fungicidas sistémicos curativos.'
    ],
    prevention: 'Eliminar hojas enfermas quemándolas o embolsándolas; nunca compostarlas. Instalar acolchado para evitar salpicaduras del suelo.'
  },
  {
    id: 'pulgon',
    name: 'Pulgón (Áfidos Verde y Negro)',
    scientificName: 'Aphis gossypii / Myzus persicae',
    category: 'Plagas',
    plantTypes: ['Flores', 'Frutales', 'Hortalizas', 'Interior'],
    affectedCrops: ['Rosas', 'Limonero', 'Tomate', 'Pimiento', 'Hibisco'],
    severity: 'Moderada',
    image: 'https://images.unsplash.com/photo-1618265341355-d0e2d1f43826?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Colonias densas de diminutos insectos agrupados en brotes tiernos y capullos.',
      'Hojas enrolladas, arrugadas y deformadas.',
      'Melaza pegajosa brillante en las hojas que atrae hormigas y genera el hongo negrilla (fumagina).'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Riego normal, pero el exceso de abonado nitrogenado tierno atrae a los pulgones.',
    wateringAdvice: 'Se puede aplicar un chorro de agua a presión focalizado en los tallos para derribar colonias mecánicamente, cuidando no encharcar la maceta.',
    organicTreatment: [
      'Jabón potásico al 2% (20ml por litro de agua tibia) pulverizado al atardecer sobre el envés.',
      'Aceite de Neem prensado en frío (3-5ml/L) emulsionado con el jabón potásico; inhibe la hormona de muda del insecto.',
      'Infusión concentrada de ajo y guindilla/chile picante macerado con alcohol y agua.',
      'Fomentar depredadores naturales: Mariquitas (Coccinellidae) y Crisopas.'
    ],
    chemicalTreatment: [
      'Acetamiprid o Pirimicarb (insecticida aficida selectivo).',
      'Deltametrina o cipermetrina piretroide.'
    ],
    prevention: 'Colocar trampas cromáticas amarillas pegajosas cerca de las plantas y controlar senderos de hormigas con bandas adhesivas en el tronco.'
  },
  {
    id: 'mosca_blanca',
    name: 'Mosca Blanca',
    scientificName: 'Bemisia tabaci / Trialeurodes vaporariorum',
    category: 'Plagas',
    plantTypes: ['Hortalizas', 'Flores', 'Interior'],
    affectedCrops: ['Tomate', 'Pimiento', 'Berenjena', 'Poinsettia', 'Fucsia'],
    severity: 'Moderada',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Pequeñas moscas blancas que vuelan en nube al sacudir suavemente la planta.',
      'Larvas traslúcidas e inmóviles adheridas al envés de las hojas.',
      'Clorosis generalizada, hojas amarillentas por succión de savia y debilidad general.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Ambientes secos y cálidos favorecen su multiplicación explosiva.',
    wateringAdvice: 'Mantener humedad ambiental adecuada en el entorno sin mojar directamente las hojas en horas de sol.',
    organicTreatment: [
      'Pulverización con jabón potásico mezclado con aceite de neem cada 3 a 4 días.',
      'Trampas cromáticas amarillas adhesivas a la altura de los brotes.',
      'Parasitoide biológico Encarsia formosa (en invernaderos).'
    ],
    chemicalTreatment: [
      'Spirotetramat sistémico para control de larvas y adultos.',
      'Piretrinas naturales formuladas.'
    ],
    prevention: 'Inspeccionar el envés semanalmente y eliminar hojas basales viejas donde se acumulan las pupas.'
  },
  {
    id: 'arana_roja',
    name: 'Araña Roja (Ácaro Tetraníquido)',
    scientificName: 'Tetranychus urticae',
    category: 'Plagas',
    plantTypes: ['Frutales', 'Flores', 'Hortalizas', 'Interior'],
    affectedCrops: ['Tomate', 'Limonero', 'Rosal', 'Monstera', 'Frutilla'],
    severity: 'Alta',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Puntos amarillentos diminutos punteados en la superficie foliar (aspecto bronceado o cenizo).',
      'Finas telarañas tejidas entre los peciolos y el envés de la hoja.',
      'Desecación total de la hoja que cruje al tocarla y se desprende.'
    ],
    wateringStatus: 'necesita_riego',
    wateringDiagnosis: '¡Planta con sed y ambiente excesivamente seco! La araña roja detesta la humedad y ataca con furia en condiciones de sequía y calor.',
    wateringAdvice: 'NECESITA RIEGO URGENTE. Hidratar bien el sustrato y pulverizar agua nebulizada en el ambiente para elevar la humedad relativa por encima del 65%.',
    organicTreatment: [
      'Acaricida a base de azufre micronizado en mojable (excelente efecto de choque contra ácaros).',
      'Aceite de canela o aceite parafínico biológico que sofoca las colonias.',
      'Liberación de ácaros depredadores beneficiosos (Phytoseiulus persimilis).'
    ],
    chemicalTreatment: [
      'Abamectina al 1.8% (acaricida translaminar muy efectivo).',
      'Fenpiroximato o Hexitiazox para control de huevos y ninfas.'
    ],
    prevention: 'Evitar corrientes de aire seco, no permitir que la maceta se seque por completo durante el verano.'
  },
  {
    id: 'minador',
    name: 'Minador de la Hoja',
    scientificName: 'Phyllocnistis citrella / Liriomyza spp.',
    category: 'Plagas',
    plantTypes: ['Frutales', 'Hortalizas'],
    affectedCrops: ['Limonero', 'Naranjo', 'Mandarino', 'Tomate'],
    severity: 'Media',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Galerías serpenteantes transparentes y plateadas cavadas dentro de la cutícula foliar.',
      'Hojas tiernas retorcidas sobre sí mismas parecidas a un pergamino.',
      'Detención del crecimiento de brotes nuevos en primavera y verano.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Riego estándar. El minador penetra en los brotes recién brotados estimulados por el agua y nutrientes.',
    wateringAdvice: 'Mantener riegos equilibrados; no sobre-estimular brotes excesivos en épocas de máxima presión de la plaga.',
    organicTreatment: [
      'Aceite de neem + jabón potásico cuando las galerías son menores a 1cm.',
      'Bacillus thuringiensis o Spinosad (insecticida de fermentación bacteriana natural muy selectivo).',
      'Aplastamiento manual de la larva visible al trasluz al final de la galería si son pocas hojas.'
    ],
    chemicalTreatment: [
      'Abamectina combinada con aceite mineral de verano para fijación en cutícula.',
      'Imidacloprid o Acetamiprid en riego o foliar.'
    ],
    prevention: 'Poda sanitaria de brotes hiperinfestados y colocación de trampas de feromonas específicas para adultos machos.'
  },
  {
    id: 'cochinilla',
    name: 'Cochinilla Algodonosa',
    scientificName: 'Planococcus citri / Pseudococcus spp.',
    category: 'Plagas',
    plantTypes: ['Interior', 'Frutales', 'Suculentas', 'Flores'],
    affectedCrops: ['Cítricos', 'Orquídeas', 'Cactus', 'Suculentas', 'Ficus'],
    severity: 'Media',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Masas blancas con textura de copos de algodón en axilas foliares y nudos.',
      'Secreción de melaza pegajosa y debilitamiento paulatino del follaje.',
      'Decoloración y caída de hojas; infestación difícil por su escudo ceroso hidrófobo.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Suele refugiarse en plantas de interior con poca ventilación y riego descuidado.',
    wateringAdvice: 'Revisar drenaje de maceta. Regar solo cuando los primeros 3 cm de sustrato estén secos.',
    organicTreatment: [
      'Limpieza manual con hisopo o algodón empapado en alcohol isopropílico al 70% (disuelve la cera al instante).',
      'Emulsión de aceite de neem y jabón potásico aplicada con cepillo suave.',
      'Tierra de diatomeas espolvoreada en el sustrato y base de los tallos.'
    ],
    chemicalTreatment: [
      'Spirotetramat o Piriproxifeno (regulador de crecimiento de insectos).',
      'Insecticidas sistémicos por absorción radicular.'
    ],
    prevention: 'Aislar plantas nuevas en cuarentena antes de juntarlas con el resto de la colección.'
  },
  {
    id: 'clorosis_ferrica',
    name: 'Clorosis Férrica (Carencia de Hierro)',
    scientificName: 'Deficiencia Nutricional de Micronutrientes (Fe)',
    category: 'Carencias',
    plantTypes: ['Frutales', 'Flores', 'Interior'],
    affectedCrops: ['Limonero', 'Hortensias', 'Rosales', 'Vid', 'Gardenias'],
    severity: 'Moderada',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Hojas jóvenes con el limbo amarillo brillante o pálido.',
      'Los nervios principales y secundarios se mantienen de color verde oscuro nítido.',
      'En casos severos, toda la hoja se vuelve blanquecina y los bordes se queman.'
    ],
    wateringStatus: 'exceso_riego',
    wateringDiagnosis: 'Frecuentemente provocada por suelo arcilloso alcalino o exceso de riego con agua dura (caliza) que bloquea la absorción de hierro.',
    wateringAdvice: 'Reducir la frecuencia de riego para permitir oxigenación de raíces. Si el agua corriente tiene mucho cloro o cal, dejar reposar 24hs o usar agua de lluvia filtrada.',
    organicTreatment: [
      'Quelato de hierro quelatado por EDDHA (el más eficaz en suelos alcalinos, color rojizo).',
      'Acidificar el sustrato con compost de corteza de pino, turba rubia o posos de café secos.',
      'Sulfato de hierro disuelto en el agua de riego (2-3g por litro).'
    ],
    chemicalTreatment: [
      'Fertilizante foliar con oligoelementos quelatados de rápida absorción cuticular.'
    ],
    prevention: 'Medir el pH del sustrato (mantener entre 6.0 y 6.8). Evitar aguas de pozo saturadas de sales y cal.'
  },
  {
    id: 'asfixia_radicular',
    name: 'Asfixia Radicular por Exceso de Riego',
    scientificName: 'Pudrición Radicular (Pythium / Phytophthora spp.)',
    category: 'Problemas Hídricos',
    plantTypes: ['Interior', 'Flores', 'Frutales', 'Hortalizas'],
    affectedCrops: ['Monstera', 'Pothos', 'Limonero', 'Tomate', 'Suculentas'],
    severity: 'Crítica',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Hojas caídas y marchitas a pesar de que la tierra está completamente empapada.',
      'Hojas basales que amarillean y se sienten blandas o gomosas al tacto.',
      'Raíces marrones, ennegrecidas y con olor a podrido al desenterrar el cepellón.'
    ],
    wateringStatus: 'exceso_riego',
    wateringDiagnosis: '🚨 ¡EXCESO CRÍTICO DE RIEGO! Las raíces se han quedado sin oxígeno disuelto y están muriendo por pudrición anaeróbica.',
    wateringAdvice: '¡SUSPENDER EL RIEGO INMEDIATAMENTE! Retirar el plato con agua estancada debajo de la maceta. Comprobar que los orificios de drenaje no estén tapados. Si está muy grave, desmoldar la maceta y envolver el cepellón en papel de periódico absorbente para secarlo.',
    organicTreatment: [
      'Podar todas las raíces negras o blandas con tijera esterilizada en alcohol.',
      'Aplicar canela en polvo sobre los cortes de raíz como fungicida y cicatrizante natural.',
      'Inocular el nuevo sustrato con Trichoderma harzianum (hongo benéfico que destruye hongos patógenos de raíz).',
      'Cambiar el sustrato por una mezcla con 40% de perlita o corteza de pino para máxima aireación.'
    ],
    chemicalTreatment: [
      'Fosetil-Aluminio o Propamocarb aplicado al sustrato en drench.'
    ],
    prevention: 'Nunca regar por calendario; meter un palillo o dedo 4cm en el sustrato. Solo regar si sale completamente seco y sin tierra pegada.'
  },
  {
    id: 'estres_hidrico_sequia',
    name: 'Estrés Hídrico Severo (Falta Crítica de Riego)',
    scientificName: 'Déficit Hídrico y Deshidratación Tisular',
    category: 'Problemas Hídricos',
    plantTypes: ['Flores', 'Frutales', 'Hortalizas', 'Interior'],
    affectedCrops: ['Hortensias', 'Tomate', 'Limonero', 'Lechuga', 'Orquídeas'],
    severity: 'Alta',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Planta totalmente postrada, hojas y peciolos desmayados y flácidos por falta de presión de turgencia celular.',
      'Puntas y bordes de las hojas marrones, secos y quebradizos como papel quemado.',
      'Sustrato agrietado, duro como piedra y separado de las paredes de la maceta.'
    ],
    wateringStatus: 'necesita_riego',
    wateringDiagnosis: '💧 ¡NECESITA RIEGO URGENTE! La planta ha entrado en marchitez permanente. Sus vacuolas celulares están colapsadas.',
    wateringAdvice: 'RIEGO POR INMERSIÓN DE EMERGENCIA: Si está en maceta, sumergir el tiesto en un cubo con agua templada durante 15 a 20 minutos hasta que dejen de salir burbujas de aire. Luego dejar escurrir libremente. En tierra de jardín, hacer un caballón y regar lenta y profundamente.',
    organicTreatment: [
      'Aplicar un acolchado orgánico (paja, hojas secas o corteza de pino de 5cm) para retener humedad.',
      'Aminoácidos vegetales o extracto de algas por riego una vez recuperada para reparar tejidos estresados.',
      'Eliminar las hojas secas que ya no se recuperen para que la planta no gaste energía evaporando agua por ellas.'
    ],
    chemicalTreatment: [
      'Polímeros retenedores de agua (hidrogel) incorporados en la zona radicular en trasplantes futuros.'
    ],
    prevention: 'Instalar sistema de riego por goteo con temporizador automático o macetas autorriego.'
  },
  {
    id: 'planta_sana',
    name: 'Planta Sana y Vigorosa',
    scientificName: 'Estado Fisiológico Óptimo',
    category: 'Sana',
    plantTypes: ['Flores', 'Frutales', 'Hortalizas', 'Interior'],
    affectedCrops: ['Todas las especies botánicas'],
    severity: 'Ninguna',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80',
    symptoms: [
      'Hojas turgentes, firmes y con coloración verde uniforme.',
      'Crecimiento continuo de nuevos brotes y yemas activas sin deformaciones.',
      'Ausencia total de manchas cloróticas, orugas, ácaros o melaza.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: '✅ ¡Excelente balance hídrico! La planta muestra turgencia perfecta sin signos de exceso ni déficit de agua.',
    wateringAdvice: 'Mantener la pauta de riego actual. Revisar la humedad del sustrato semanalmente y adaptar a la estación (menos en invierno, más en floración estival).',
    organicTreatment: [
      'Mantenimiento preventivo: Pulverizar una vez al mes con purín de cola de caballo para mantener hojas resistentes.',
      'Aporte de una capa de 2cm de humus de lombriz en la base cada primavera.'
    ],
    chemicalTreatment: [
      'No requiere ningún tratamiento curativo.'
    ],
    prevention: 'Limpiar el polvo de las hojas con un paño húmedo para facilitar la fotosíntesis.'
  }
];

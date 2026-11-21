export const DISEASES_DATABASE = [
  {
    id: 'hormiga_cortadora',
    name: 'Hormiga Cortadora de Hojas (Hormiga Negra / Minera)',
    scientificName: 'Acromyrmex lundi / Atta sexdens',
    category: 'Plagas',
    plantTypes: ['Frutales', 'Flores', 'Hortalizas', 'Interior'],
    affectedCrops: ['Limonero', 'Naranjo', 'Rosales', 'Vid', 'Tomate', 'Jazmín', 'Frutales'],
    severity: 'Alta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Leaf_cutter_ants_01.jpg/640px-Leaf_cutter_ants_01.jpg',
    symptoms: [
      'Cortes semicirculares limpios e inconfundibles en los bordes de las hojas.',
      'Defoliación violenta y rápida: ramas enteras o plantas jóvenes peladas de la noche a la mañana.',
      'Senderos continuos en el suelo donde cientos de hormigas cargan trozos de hojas hacia el hormiguero.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Las hormigas cortadoras prefieren terrenos secos, compactados y con poca humedad para cavar sus nidos.',
    wateringAdvice: 'Mantener un acolchado orgánico húmedo alrededor de los troncos. La humedad constante dificulta la construcción de hormigueros cerca de las plantas.',
    organicTreatment: [
      'Cebo casero de arroz partido blanco fermentado: Remojar arroz con jugo de naranja y un sobre de levadura de panadería durante 24 horas; secar a la sombra y colocar 2 cucharadas a 30 cm del sendero. Las hormigas lo llevan al nido y la levadura genera un hongo inocuo que destruye el hongo del que ellas se alimentan.',
      'Barrera física en el tronco: Colocar una faja de gomaespuma de 10 cm envuelta con plástico y untada con grasa de litio o vaselina en la parte exterior (las hormigas patinan y no suben).',
      'Tierra de diatomeas micronizada espolvoreada alrededor de la base del tronco y en los caminos principales (deshidrata el exoesqueleto del insecto).',
      'Purín concentrado de ajenjo, lavanda o infusión de hojas de paraíso pulverizado al pie de los árboles como potente repelente olfativo.'
    ],
    chemicalTreatment: [
      'Cebos granulados específicos para hormiga cortadora (Fipronil o Sulfluramida al 0.03%). APLICAR AL ATARDECER al costado del camino activo, NUNCA dentro de la boca del hormiguero porque las hormigas lo detectan y lo expulsan.',
      'Polvos insecticidas para hormigueros aplicados directamente en la boca principal con insuflador mecánico en días secos.'
    ],
    prevention: 'Revisar troncos al atardecer (hora de mayor actividad). Mantener franjas de plantas repelentes como lavanda, menta o romero cerca de los cítricos y rosales.'
  },
  {
    id: 'oidio',
    name: 'Oídio (Cenicilla o Mal Blanco)',
    scientificName: 'Podosphaera pannosa / Erysiphe spp.',
    category: 'Hongos',
    plantTypes: ['Flores', 'Frutales', 'Hortalizas'],
    affectedCrops: ['Rosas', 'Tomate', 'Vid', 'Manzano', 'Calabacín'],
    severity: 'Moderada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Powdery_mildew_on_oak_leaf.jpg/640px-Powdery_mildew_on_oak_leaf.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Peronospora_sp._01.JPG/640px-Peronospora_sp._01.JPG',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Aphid_swarm_1.jpg/640px-Aphid_swarm_1.jpg',
    symptoms: [
      'Colonias densas de diminutos insectos agrupados en brotes tiernos y capullos.',
      'Hojas enrolladas, arrugadas y deformadas.',
      'Melaza pegajosa brillante en las hojas y aparición de fumagina (hongo negro).'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Riego normal, pero el exceso de abonado nitrogenado tierno atrae a los pulgones.',
    wateringAdvice: 'Se puede aplicar un chorro de agua a presión focalizado en los tallos para derribar colonias mecánicamente, cuidando no encharcar la maceta.',
    organicTreatment: [
      'Jabón potásico al 2% (20ml por litro de agua tibia) pulverizado al atardecer sobre el envés.',
      'Aceite de Neem prensado en frío (3-5ml/L) emulsionado con el jabón potásico; inhibe la hormona de muda del insecto.',
      'Infusión concentrada de ajo y guindilla picante macerada.',
      'Fomentar depredadores naturales: Mariquitas (Coccinellidae) y Crisopas.'
    ],
    chemicalTreatment: [
      'Acetamiprid o Pirimicarb (insecticida aficida selectivo).',
      'Deltametrina o cipermetrina piretroide.'
    ],
    prevention: 'Colocar trampas cromáticas amarillas pegajosas cerca de las plantas y controlar brotes hiper-fertilizados.'
  },
  {
    id: 'orugas',
    name: 'Oruga del Tomate y Gusanos Defoliadores',
    scientificName: 'Helicoverpa armigera / Spodoptera frugiperda',
    category: 'Plagas',
    plantTypes: ['Hortalizas', 'Frutales', 'Flores'],
    affectedCrops: ['Tomate', 'Pimiento', 'Maíz', 'Rosales', 'Frutales'],
    severity: 'Alta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Helicoverpa_armigera_caterpillar.jpg/640px-Helicoverpa_armigera_caterpillar.jpg',
    symptoms: [
      'Hojas agujereadas de forma irregular con grandes mordeduras.',
      'Perforaciones redondas en tomates y pimientos verdes con excrementos negros dentro.',
      'Tallos principales masticados y capullos florales destruidos.'
    ],
    wateringStatus: 'riego_optimo',
    wateringDiagnosis: 'Riego estándar. Las mariposas nocturnas ponen huevos en follaje denso y vigoroso.',
    wateringAdvice: 'Regar al pie de la planta sin mojar las hojas donde se esconden los huevos.',
    organicTreatment: [
      'Bacillus thuringiensis variedad kurstaki (1-2g por litro): bacteria natural letal para orugas, totalmente inocua para humanos, abejas y mascotas.',
      'Aceite de neem concentrado en pulverización semanal.',
      'Revisión manual al amanecer retirando las orugas visibles a mano.'
    ],
    chemicalTreatment: [
      'Clorantraniliprol o Spinosad (altamente efectivo para lepidópteros con bajo impacto ambiental).',
      'Cipermetrina de choque.'
    ],
    prevention: 'Instalar mallas anti-insectos en huertos y trampas de feromonas para capturar polillas adultas.'
  },
  {
    id: 'caracoles_babosas',
    name: 'Caracoles y Babosas',
    scientificName: 'Cornu aspersum / Deroceras reticulatum',
    category: 'Plagas',
    plantTypes: ['Hortalizas', 'Flores', 'Interior'],
    affectedCrops: ['Lechuga', 'Tomate', 'Hortensias', 'Rosales', 'Fresas', 'Huerto'],
    severity: 'Moderada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cornu_aspersum_on_leaf.jpg/640px-Cornu_aspersum_on_leaf.jpg',
    symptoms: [
      'Mordeduras irregulares y raspaduras en hojas tiernas y fresas a ras de suelo.',
      'Rastros plateados y brillantes de baba seca sobre las hojas y la tierra.',
      'Ataques nocturnos o inmediatamente después de una lluvia intensa o riego por aspersión.'
    ],
    wateringStatus: 'exceso_riego',
    wateringDiagnosis: '🚨 Humedad excesiva en el suelo. Los moluscos necesitan humedad continua y sombra fresca para salir de su letargo.',
    wateringAdvice: 'Evitar regar al atardecer. Regar por la mañana para que la superficie del suelo esté seca durante la noche, dificultando su desplazamiento.',
    organicTreatment: [
      'Trampa de cerveza: Enterrar un vaso a ras de suelo con 3 dedos de cerveza barata; la levadura los atrae y caen dentro.',
      'Barreras de cáscara de huevo triturada, ceniza de madera seca o tierra de diatomeas alrededor del tallo (sus bordes afilados rasgan el cuerpo blando del caracol).',
      'Tiras de cobre adhesivas en el borde de macetas (produce una microcorriente eléctrica que no toleran pasar).'
    ],
    chemicalTreatment: [
      'Cebos de Fosfato Férrico (ecológico y seguro para mascotas).',
      'Metaldehído en gránulos (precaución: tóxico para perros y gatos).'
    ],
    prevention: 'Retirar tablas, macetas rotas y hojarasca húmeda donde se refugian durante el día.'
  },
  {
    id: 'mosca_blanca',
    name: 'Mosca Blanca',
    scientificName: 'Bemisia tabaci / Trialeurodes vaporariorum',
    category: 'Plagas',
    plantTypes: ['Hortalizas', 'Flores', 'Interior'],
    affectedCrops: ['Tomate', 'Pimiento', 'Berenjena', 'Poinsettia', 'Fucsia'],
    severity: 'Moderada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bemisia_tabaci_on_leaf.jpg/640px-Bemisia_tabaci_on_leaf.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tetranychus_urticae_with_silk_threads.jpg/640px-Tetranychus_urticae_with_silk_threads.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Citrus_leafminer_trail.jpg/640px-Citrus_leafminer_trail.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Planococcus_citri_on_citrus.jpg/640px-Planococcus_citri_on_citrus.jpg',
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
    id: 'botrytis',
    name: 'Botrytis (Moho Gris)',
    scientificName: 'Botrytis cinerea',
    category: 'Hongos',
    plantTypes: ['Flores', 'Frutales', 'Hortalizas'],
    affectedCrops: ['Fresas', 'Tomate', 'Rosas', 'Vid', 'Pimiento'],
    severity: 'Alta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Botrytis_cinerea_on_grapes.jpg/640px-Botrytis_cinerea_on_grapes.jpg',
    symptoms: [
      'Moho velloso grisáceo aterciopelado sobre flores, frutos maduros y tallos.',
      'Pudrición acuosa y blanda que arruina cosechas enteras en pocos días.',
      'Cancros marrones en los nudos del tallo tras podas húmedas.'
    ],
    wateringStatus: 'exceso_riego',
    wateringDiagnosis: '🚨 Exceso de humedad y falta de ventilación. El hongo ataca cuando los frutos permanecen mojados.',
    wateringAdvice: 'Suspender riegos inmediatamente. Regar exclusivamente por goteo evitando cualquier salpicadura a frutos o flores.',
    organicTreatment: [
      'Retirar y quemar inmediatamente todos los frutos y flores con moho gris.',
      'Pulverización con decocción concentrada de cola de caballo (Equisetum).',
      'Extracto de semillas de pomelo o bicarbonato potásico.'
    ],
    chemicalTreatment: [
      'Fludioxonil + Ciprodinil o Fenhexamida (botriticidas específicos).'
    ],
    prevention: 'Deshojado selectivo alrededor de los racimos y frutos para que el viento y sol los sequen rápido.'
  },
  {
    id: 'clorosis_ferrica',
    name: 'Clorosis Férrica (Carencia de Hierro)',
    scientificName: 'Deficiencia Nutricional de Micronutrientes (Fe)',
    category: 'Carencias',
    plantTypes: ['Frutales', 'Flores', 'Interior'],
    affectedCrops: ['Limonero', 'Hortensias', 'Rosales', 'Vid', 'Gardenias'],
    severity: 'Moderada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Iron_chlorosis_in_rose_leaves.jpg/640px-Iron_chlorosis_in_rose_leaves.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Root_rot_phytophthora.jpg/640px-Root_rot_phytophthora.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Drought_stressed_plant.jpg/640px-Drought_stressed_plant.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Healthy_green_citrus_leaves.jpg/640px-Healthy_green_citrus_leaves.jpg',
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

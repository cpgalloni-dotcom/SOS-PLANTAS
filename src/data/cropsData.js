export const CROPS_DATABASE = [
  {
    id: 'tomate',
    name: 'Tomate',
    scientific: 'Solanum lycopersicum',
    category: 'Hortalizas',
    icon: '🍅',
    optimalPh: '6.0 - 6.8',
    wateringNeed: 'Moderado a Alto (Suelo húmedo sin encharcar, evitar mojar hojas)',
    wateringFrequency: 'Cada 2 días en calor, diario en fructificación intensa',
    stages: {
      siembra: {
        name: 'Siembra y Enraizamiento',
        description: 'Desarrollo de raíces fuertes y primeros cotiledones',
        npkRatio: { n: 10, p: 25, k: 10 }, // Fósforo dominante
        dosePerM2: 25, // gramos de fertilizante base por m2
        recommendedFormula: 'Fosfato Diamónico (DAP 18-46-0) o Superfosfato triple',
        organicAlternative: 'Harina de hueso (40g/m²) + Micorrizas',
        advice: 'Favorece el crecimiento radicular profundo; no exceder nitrógeno para no debilitar el tallo tierno.'
      },
      crecimiento: {
        name: 'Crecimiento Vegetativo',
        description: 'Generación vigorosa de hojas, ramas y tallos',
        npkRatio: { n: 30, p: 15, k: 20 }, // Nitrógeno dominante
        dosePerM2: 40,
        recommendedFormula: 'Triple 15 (15-15-15) reforzado con Urea (46-0-0)',
        organicAlternative: 'Humus de lombriz (150g/m²) + Purín de ortiga fermentado diluido al 10%',
        advice: 'El nitrógeno acelera el follaje. Riego regular para evitar estrés hídrico que induce trips.'
      },
      floracion: {
        name: 'Floración y Cuajado',
        description: 'Aparición de racimos florales y primeros frutos cuajados',
        npkRatio: { n: 15, p: 30, k: 35 }, // Fósforo y Potasio altos
        dosePerM2: 50,
        recommendedFormula: 'NPK 12-24-12 o Nitrato de Potasio (13-0-44)',
        organicAlternative: 'Té de cáscara de plátano + Harina de roca fosfórica + Calcio quelado',
        advice: 'Crucial aportar Calcio para prevenir la pudrición apical (culo negro del tomate).'
      },
      fructificacion: {
        name: 'Maduración y Cosecha',
        description: 'Llenado y engorde de frutos con color intenso y azúcares',
        npkRatio: { n: 15, p: 10, k: 45 }, // Potasio ultra alto
        dosePerM2: 45,
        recommendedFormula: 'Sulfato de Potasio (0-0-50) o NPK 10-10-30',
        organicAlternative: 'Ceniza de madera tamizada limpia (30g/m²) + Bokashi maduro',
        advice: 'Reducir ligeramente el riego al final para concentrar azúcares y evitar que la piel del fruto se agriete.'
      }
    }
  },
  {
    id: 'limonero',
    name: 'Limonero y Cítricos',
    scientific: 'Citrus × limon',
    category: 'Frutales',
    icon: '🍋',
    optimalPh: '6.0 - 7.0',
    wateringNeed: 'Riego profundo y espaciado (sensible a asfixia radicular)',
    wateringFrequency: '1 a 2 veces por semana en primavera/verano; cada 10-15 días en invierno',
    stages: {
      siembra: {
        name: 'Plantación de Arbolito Joven',
        description: 'Instalación del cepellón y desarrollo de raíces laterales',
        npkRatio: { n: 15, p: 30, k: 15 },
        dosePerM2: 35,
        recommendedFormula: 'Superfosfato simple o Fosfato Monoamónico (MAP)',
        organicAlternative: 'Compost maduro (2kg por hoyo) + Harina de pescado',
        advice: 'Asegurar que el cuello del injerto quede 5cm por encima de la superficie.'
      },
      crecimiento: {
        name: 'Brotación de Primavera',
        description: 'Aparición masiva de ramas tiernas y hojas verdes',
        npkRatio: { n: 35, p: 15, k: 25 },
        dosePerM2: 60,
        recommendedFormula: 'Sulfato de Amonio (21-0-0) + Quelato de Hierro EDDHA',
        organicAlternative: 'Humus de lombriz líquido + Harina de sangre (25g/árbol)',
        advice: 'Los cítricos son devoradores de Hierro, Magnesio y Zinc. Aplicar quelatos si las hojas amarillean con nervios verdes.'
      },
      floracion: {
        name: 'Azahar y Cuajado',
        description: 'Apertura de flores aromáticas y caída de pétalos',
        npkRatio: { n: 20, p: 25, k: 35 },
        dosePerM2: 70,
        recommendedFormula: 'NPK 15-15-15 formulación cítricos + Boro foliar',
        organicAlternative: 'Biol fermentado con melaza + Roca fosfórica',
        advice: 'No suspender el riego de golpe en floración para evitar la caída masiva del cuajado.'
      },
      fructificacion: {
        name: 'Engorde de Fruta y Zumo',
        description: 'Crecimiento de los limones y acumulación de ácido cítrico',
        npkRatio: { n: 20, p: 10, k: 45 },
        dosePerM2: 75,
        recommendedFormula: 'Nitrato de Potasio soluble o NPK 14-7-28',
        organicAlternative: 'Cenizas de leña ricas en potasio (50g/m²) + Sulfato de magnesio natural',
        advice: 'Mantener humedad estable para evitar que la corteza se rompa o se reseque.'
      }
    }
  },
  {
    id: 'naranjo',
    name: 'Naranjo Dulce',
    scientific: 'Citrus sinensis',
    category: 'Frutales',
    icon: '🍊',
    optimalPh: '6.2 - 6.8',
    wateringNeed: 'Riego regular en círculo perimetral de copa',
    wateringFrequency: 'Semanal abundante en verano, quincenal en invierno',
    stages: {
      siembra: {
        name: 'Establecimiento Inicial',
        description: 'Enraizamiento en parcela o macetón grande',
        npkRatio: { n: 15, p: 25, k: 15 },
        dosePerM2: 30,
        recommendedFormula: 'NPK 10-20-10 con azufre',
        organicAlternative: 'Compost orgánico enriquecido + Humus',
        advice: 'Proteger vientos fríos en los dos primeros años.'
      },
      crecimiento: {
        name: 'Fase Vegetativa y Corona',
        description: 'Estructuración de ramas principales y follaje denso',
        npkRatio: { n: 30, p: 15, k: 20 },
        dosePerM2: 55,
        recommendedFormula: 'Urea perlada disuelta + Micronutrientes (Fe, Zn, Mn)',
        organicAlternative: 'Purín de estiércol avícola bien madurado',
        advice: 'Controlar minador de los cítricos en los brotes tiernos.'
      },
      floracion: {
        name: 'Floración (Azahar)',
        description: 'Cuajado de pequeñas naranjas verdes',
        npkRatio: { n: 20, p: 25, k: 30 },
        dosePerM2: 65,
        recommendedFormula: 'Triple 15 enriquecido con Boro y Calcio',
        organicAlternative: 'Extracto de algas marinas ascophyllum nodosum',
        advice: 'Las abejas polinizan; no aplicar insecticidas químicos en plena flor.'
      },
      fructificacion: {
        name: 'Maduración y Endulzado',
        description: 'Conversión de almidón en azúcares y color anaranjado',
        npkRatio: { n: 15, p: 10, k: 45 },
        dosePerM2: 70,
        recommendedFormula: 'Sulfato de Potasio (0-0-50)',
        organicAlternative: 'Té de cenizas y cáscaras vegetales fermentadas',
        advice: 'Cuidado con golpes de sol en fruta expuesta.'
      }
    }
  },
  {
    id: 'rosas',
    name: 'Rosal y Flores de Jardín',
    scientific: 'Rosa spp.',
    category: 'Flores',
    icon: '🌹',
    optimalPh: '6.5 - 7.0',
    wateringNeed: 'Riego a ras de suelo (¡JAMÁS mojar pétalos ni hojas para evitar hongos!)',
    wateringFrequency: '2 a 3 veces por semana; suelo fresco y esponjoso',
    stages: {
      siembra: {
        name: 'Plantación a Raíz Desnuda / Cepellón',
        description: 'Arraigo del pie de injerto y yemas basales',
        npkRatio: { n: 15, p: 35, k: 15 },
        dosePerM2: 25,
        recommendedFormula: 'Fosfato Monoamónico (MAP 12-61-0)',
        organicAlternative: 'Harina de hueso (3 cucharadas por hoyo) + Compost de hojas',
        advice: 'Añadir tierra de diatomeas alrededor para frenar babosas y hormigas.'
      },
      crecimiento: {
        name: 'Brote de Guías y Tallos',
        description: 'Nuevas varas vigorosas con follaje rojizo-verdoso',
        npkRatio: { n: 35, p: 15, k: 25 },
        dosePerM2: 35,
        recommendedFormula: 'Fertilizante especial rosales NPK 14-7-14 con magnesio',
        organicAlternative: 'Humus de lombriz puro + Infusión de ortigas',
        advice: 'Podar ramas secas o cruzadas para maximizar aireación interna.'
      },
      floracion: {
        name: 'Formación de Capullos y Floración',
        description: 'Apertura de rosas continuas, perfume y vigor',
        npkRatio: { n: 20, p: 25, k: 40 },
        dosePerM2: 45,
        recommendedFormula: 'Abono floración NPK 10-20-30 con microelementos',
        organicAlternative: 'Té de plátano con posos de café secos (aportan acidez leve y potasio)',
        advice: 'Cortar las rosas marchitas en diagonal 1cm sobre una yema quíntuple para inducir nueva floración.'
      },
      fructificacion: {
        name: 'Otoño y Letargo Invernal',
        description: 'Maduración de escaramujos y endurecimiento de madera',
        npkRatio: { n: 5, p: 20, k: 35 },
        dosePerM2: 20,
        recommendedFormula: 'Sulfato de potasio bajo en nitrógeno',
        organicAlternative: 'Acolchado (mulch) de corteza de pino y compost superficial',
        advice: 'Detener el aporte de nitrógeno para evitar brotes tiernos que mueran con las heladas.'
      }
    }
  },
  {
    id: 'aguacate',
    name: 'Aguacate / Palto',
    scientific: 'Persea americana',
    category: 'Frutales',
    icon: '🥑',
    optimalPh: '6.0 - 6.5',
    wateringNeed: 'Sensible al exceso de agua (Phytophthora cinammomi)',
    wateringFrequency: 'Riegos ligeros y frecuentes; drenaje perfecto indispensable',
    stages: {
      siembra: {
        name: 'Establecimiento en Camellón',
        description: 'Evitar asfixia en suelos arcillosos',
        npkRatio: { n: 15, p: 30, k: 15 },
        dosePerM2: 30,
        recommendedFormula: 'Fosfito de Potasio (previene hongos de raíz) + DAP',
        organicAlternative: 'Compost aireado con perlita y trichoderma harzianum',
        advice: 'Sembrar siempre sobre montículo elevado si el suelo retiene mucha agua.'
      },
      crecimiento: {
        name: 'Flujo Vegetativo',
        description: 'Expansión de copa y brotación foliar',
        npkRatio: { n: 30, p: 15, k: 20 },
        dosePerM2: 50,
        recommendedFormula: 'Nitrato de Calcio + Sulfato de Magnesio',
        organicAlternative: 'Humus de lombriz + Harina de alfalfa',
        advice: 'Monitorear niveles de Zinc y Boro (clave para hojas completas).'
      },
      floracion: {
        name: 'Floración Dicógama',
        description: 'Cuajado de pequeños aguacates',
        npkRatio: { n: 15, p: 25, k: 35 },
        dosePerM2: 60,
        recommendedFormula: 'NPK 13-10-25 con Boro foliar al 0.1%',
        organicAlternative: 'Extracto de algas marinas bioestimulante',
        advice: 'El Boro es indispensable para la fertilidad del polen en aguacate.'
      },
      fructificacion: {
        name: 'Engorde y Acumulación de Aceites',
        description: 'Crecimiento de la pulpa cremosa y semilla',
        npkRatio: { n: 20, p: 10, k: 45 },
        dosePerM2: 65,
        recommendedFormula: 'Nitrato Potásico (13-0-46) + Sulfato de Potasio',
        organicAlternative: 'Ceniza volcánica / harina de basalto + compost',
        advice: 'Evitar estrés hídrico que provoca caída prematura del fruto.'
      }
    }
  },
  {
    id: 'vid',
    name: 'Vid / Parra de Uva',
    scientific: 'Vitis vinifera',
    category: 'Frutales',
    icon: '🍇',
    optimalPh: '6.5 - 7.5',
    wateringNeed: 'Bajo a Moderado (planta resistente a sequía con raíz profunda)',
    wateringFrequency: 'Cada 7-10 días en secano; riego por goteo medido en espaldera',
    stages: {
      siembra: {
        name: 'Plantación de Sarmientos',
        description: 'Desarrollo del sistema radicular en profundidad',
        npkRatio: { n: 10, p: 35, k: 15 },
        dosePerM2: 25,
        recommendedFormula: 'Superfosfato de Calcio enriquecido',
        organicAlternative: 'Harina de huesos + Estiércol ovino bien curado',
        advice: 'Instalar tutores firmes para guiar el tronco.'
      },
      crecimiento: {
        name: 'Desborre y Crecimiento de Pámpanos',
        description: 'Desarrollo de hojas verdes para fotosíntesis',
        npkRatio: { n: 30, p: 15, k: 25 },
        dosePerM2: 40,
        recommendedFormula: 'NPK 20-10-10 con Hierro quelado',
        organicAlternative: 'Purín de ortiga rico en nitrógeno orgánico',
        advice: 'Realizar deshojado y despunte para que el sol penetre.'
      },
      floracion: {
        name: 'Floración y Cernido',
        description: 'Apertura de racimillos y cuajado de bayas',
        npkRatio: { n: 15, p: 25, k: 35 },
        dosePerM2: 45,
        recommendedFormula: 'NPK 10-15-25 + Magnesio',
        organicAlternative: 'Biol mineralizado + Cenizas tamizadas',
        advice: 'Sensible al mildiu y oídio; aplicar azufre ventilado de prevención.'
      },
      fructificacion: {
        name: 'Envero y Maduración del Racimo',
        description: 'Cambio de color de la uva y acumulación de azúcares',
        npkRatio: { n: 10, p: 10, k: 50 },
        dosePerM2: 50,
        recommendedFormula: 'Sulfato Potásico soluble (0-0-50)',
        organicAlternative: 'Abono de cenizas de poda quemadas y compostadas',
        advice: 'Suspender riegos 15 días antes de la vendimia para maximizar brix de azúcar.'
      }
    }
  },
  {
    id: 'orquideas',
    name: 'Orquídeas',
    scientific: 'Phalaenopsis spp.',
    category: 'Flores',
    icon: '🌸',
    optimalPh: '5.5 - 6.5',
    wateringNeed: 'Riego por inmersión semanal (raíces epífitas grises necesitan agua; verdes no)',
    wateringFrequency: 'Sumergir maceta 10 minutos cada 7 días; escurrir totalmente',
    stages: {
      siembra: {
        name: 'Trasplante a Corteza de Pino',
        description: 'Renovación de sustrato poroso sin tierra',
        npkRatio: { n: 15, p: 30, k: 15 },
        dosePerM2: 5, // dosis ultra baja diluida
        recommendedFormula: 'Abono hidrosoluble orquídeas enraizador (1g por litro de agua)',
        organicAlternative: 'Té de sauce (rico en ácido salicílico enraizador natural)',
        advice: 'Usar macetas transparentes para permitir fotosíntesis radicular.'
      },
      crecimiento: {
        name: 'Emisión de Nuevas Hojas y Raíces',
        description: 'Hojas verdes lustrosas y raíces aéreas plateadas',
        npkRatio: { n: 30, p: 10, k: 10 },
        dosePerM2: 8,
        recommendedFormula: 'NPK 30-10-10 para orquídeas a 1/4 de la dosis comercial',
        organicAlternative: 'Agua de remojo de arroz fermentada 24hs diluida al 50%',
        advice: 'Nunca fertilizar con sustrato seco; regar primero con agua pura.'
      },
      floracion: {
        name: 'Vara Floral y Floración',
        description: 'Apertura de flores vistosas que duran meses',
        npkRatio: { n: 10, p: 30, k: 20 },
        dosePerM2: 8,
        recommendedFormula: 'NPK 10-30-20 potenciador de floración',
        organicAlternative: 'Extracto de plátano muy diluido (1 cucharada por litro)',
        advice: 'No pulverizar agua directamente sobre los pétalos abiertos.'
      },
      fructificacion: {
        name: 'Post-Floración y Reposo',
        description: 'Corte de vara seca y recuperación de energía',
        npkRatio: { n: 20, p: 20, k: 20 },
        dosePerM2: 5,
        recommendedFormula: 'Triple 20 balanceado muy diluido',
        organicAlternative: 'Lixiviado de lombriz diluido 1:20',
        advice: 'Estimular con cambio térmico (noches frescas de 16°C) para inducir nueva vara.'
      }
    }
  },
  {
    id: 'maiz',
    name: 'Maíz y Choclo',
    scientific: 'Zea mays',
    category: 'Hortalizas',
    icon: '🌽',
    optimalPh: '6.0 - 7.2',
    wateringNeed: 'Alto requerimiento hídrico durante la emisión de estigmas (barbas)',
    wateringFrequency: '2 a 3 veces por semana en surco o goteo continuo',
    stages: {
      siembra: {
        name: 'Emergencia y Primeras 4 Hojas',
        description: 'Desarrollo de raíz pivotante y corona',
        npkRatio: { n: 15, p: 35, k: 15 },
        dosePerM2: 30,
        recommendedFormula: 'DAP 18-46-0 al fondo del surco',
        organicAlternative: 'Compost vacuno + Harina de rocas',
        advice: 'Sembrar en bloques cuadrados para favorecer polinización por viento.'
      },
      crecimiento: {
        name: 'Crecimiento Rápido de Caña',
        description: 'Gran absorción de nutrientes y hojas largas',
        npkRatio: { n: 40, p: 15, k: 20 },
        dosePerM2: 60,
        recommendedFormula: 'Urea (46% N) incorporada en aporque lateral',
        organicAlternative: 'Estiércol de gallinaza compostada + Humus',
        advice: 'El maíz es el cultivo que más nitrógeno extrae del suelo.'
      },
      floracion: {
        name: 'Espigado y Emisión de Barbas',
        description: 'Polinización de la mazorca y fecundación de granos',
        npkRatio: { n: 25, p: 20, k: 35 },
        dosePerM2: 60,
        recommendedFormula: 'NPK 15-15-15 + Zinc',
        organicAlternative: 'Biol de frutas y ortiga fermentado',
        advice: 'Si falta agua en esta fase, la mazorca quedará con granos faltantes.'
      },
      fructificacion: {
        name: 'Llenado y Grano Lechoso',
        description: 'Depósito de almidón y azúcares en la mazorca',
        npkRatio: { n: 20, p: 10, k: 40 },
        dosePerM2: 50,
        recommendedFormula: 'Sulfato de Potasio y Magnesio',
        organicAlternative: 'Ceniza de leña + té de compost',
        advice: 'Proteger con aceite mineral en las barbas para evitar oruga del choclo.'
      }
    }
  },
  {
    id: 'pimiento',
    name: 'Pimiento / Morrones',
    scientific: 'Capsicum annuum',
    category: 'Hortalizas',
    icon: '🫑',
    optimalPh: '6.0 - 6.8',
    wateringNeed: 'Riego regular y uniforme, evitar estrés hídrico que induce caída de flor',
    wateringFrequency: 'Cada 2 días en días calurosos; suelo drenado y rico',
    stages: {
      siembra: {
        name: 'Siembra y Enraizamiento',
        description: 'Brote de primeros cotiledones y anclaje',
        npkRatio: { n: 15, p: 30, k: 15 },
        dosePerM2: 30,
        recommendedFormula: 'Fosfato Diamónico (DAP 18-46-0)',
        organicAlternative: 'Harina de hueso (35g/m²) + Humus de lombriz',
        advice: 'Cuidado con temperaturas menores a 15°C durante el enraizamiento.'
      },
      crecimiento: {
        name: 'Desarrollo de Planta y Ramas',
        description: 'Generación de hojas verdes y estructura en horqueta',
        npkRatio: { n: 35, p: 15, k: 25 },
        dosePerM2: 45,
        recommendedFormula: 'Triple 15 + Nitrato de Calcio',
        organicAlternative: 'Purín de ortiga diluido 1:10 + Compost maduro',
        advice: 'Entutorar las ramas para soportar el peso de los pimientos futuros.'
      },
      floracion: {
        name: 'Floración y Cuajado',
        description: 'Aparición de flores blancas y cuaje de frutos',
        npkRatio: { n: 20, p: 30, k: 35 },
        dosePerM2: 50,
        recommendedFormula: 'NPK 12-24-12 + Magnesio foliar',
        organicAlternative: 'Té de cáscara de plátano + Calcio en polvo',
        advice: 'Aporte de calcio indispensable para evitar necrosis apical.'
      },
      fructificacion: {
        name: 'Engorde y Coloración',
        description: 'Frutos carnosos, cambio de color verde a rojo/amarillo',
        npkRatio: { n: 15, p: 10, k: 45 },
        dosePerM2: 50,
        recommendedFormula: 'Sulfato de Potasio soluble',
        organicAlternative: 'Cenizas de madera limpias tamizadas',
        advice: 'Mantener riego parejo para evitar agrietamiento de la piel.'
      }
    }
  },
  {
    id: 'manzano',
    name: 'Manzano',
    scientific: 'Malus domestica',
    category: 'Frutales',
    icon: '🍎',
    optimalPh: '6.0 - 7.0',
    wateringNeed: 'Riego profundo en el radio de copa, tolerante a sequía temporal',
    wateringFrequency: 'Semanal en primavera/verano; espaciado en otoño',
    stages: {
      siembra: {
        name: 'Plantación del Frutal',
        description: 'Establecimiento del cepellón e injerto',
        npkRatio: { n: 15, p: 35, k: 15 },
        dosePerM2: 35,
        recommendedFormula: 'Superfosfato triple',
        organicAlternative: 'Compost maduro aireado (3kg por hoyo) + Harina de roca',
        advice: 'No enterrar el cuello de injerto.'
      },
      crecimiento: {
        name: 'Brotación y Follaje',
        description: 'Desarrollo de ramas mixtas y hojas',
        npkRatio: { n: 35, p: 15, k: 25 },
        dosePerM2: 55,
        recommendedFormula: 'NPK 20-10-10 + Hierro y Zinc',
        organicAlternative: 'Humus de lombriz + Estiércol curado',
        advice: 'Realizar aclareo de brotes cruzados que resten luz al centro.'
      },
      floracion: {
        name: 'Floración Primaveral',
        description: 'Apertura de ramilletes de flor',
        npkRatio: { n: 20, p: 25, k: 35 },
        dosePerM2: 60,
        recommendedFormula: 'NPK 14-14-28 + Boro para polinización',
        organicAlternative: 'Bioestimulante de algas marinas',
        advice: 'El Boro es indispensable para que las flores fecunden correctamente.'
      },
      fructificacion: {
        name: 'Engorde de Manzanas',
        description: 'Crecimiento de la pulpa y síntesis de azúcares',
        npkRatio: { n: 15, p: 10, k: 45 },
        dosePerM2: 65,
        recommendedFormula: 'Sulfato de Potasio y Nitrato de Calcio',
        organicAlternative: 'Ceniza vegetal rica en potasio y calcio',
        advice: 'El calcio previene el Bitter Pit (manchas corchosas en la manzana).'
      }
    }
  }
];

export const FERTILIZER_TYPES = [
  {
    name: 'Triple 15 (NPK 15-15-15)',
    type: 'Químico balanceado',
    composition: '15% N, 15% P2O5, 15% K2O',
    bestFor: 'Mantenimiento general, crecimiento y floración estándar',
    instructions: 'Esparcir en la corona de la planta, enterrar superficialmente y regar abundantemente.'
  },
  {
    name: 'Urea Perlada (46-0-0)',
    type: 'Químico nitrogenado alto',
    composition: '46% Nitrógeno soluble',
    bestFor: 'Estimular brotación vegetativa, follaje verde intenso en primavera',
    instructions: 'Aplicar siempre con suelo húmedo o disuelto en agua. No dejar sobre hojas secas.'
  },
  {
    name: 'Fosfato Diamónico (DAP 18-46-0)',
    type: 'Químico fosforado',
    composition: '18% N, 46% Fósforo',
    bestFor: 'Siembra, trasplante y desarrollo masivo de raíces',
    instructions: 'Colocar cerca de la raíz pero sin contacto directo para evitar quemaduras salinas.'
  },
  {
    name: 'Sulfato de Potasio (0-0-50 + 18% S)',
    type: 'Químico potásico sin cloro',
    composition: '50% Potasio, 18% Azufre',
    bestFor: 'Fructificación, sabor, dulzor y resistencia a sequías y heladas',
    instructions: 'Ideal para frutales en fase de cuajado y llenado de fruto.'
  },
  {
    name: 'Humus de Lombriz Californiana',
    type: 'Orgánico / Ecológico premium',
    composition: 'Materia orgánica viva, bacterias benéficas, ácidos húmicos y fúlvicos',
    bestFor: 'Cualquier planta en cualquier fase. Imposible sobrefertilizar o quemar raíces',
    instructions: 'Mezclar con el sustrato superior o diluir 100g en 1L de agua para riego bioestimulante.'
  },
  {
    name: 'Harina de Hueso',
    type: 'Orgánico rico en Fósforo y Calcio',
    composition: 'Fósforo de lenta liberación y Calcio natural',
    bestFor: 'Rosales, bulbos, tomates y árboles frutales en plantación',
    instructions: 'Mezclar 30-50g en el hoyo de plantación. Se libera gradualmente durante 6 meses.'
  },
  {
    name: 'Ceniza de Madera Limpia Tamizada',
    type: 'Orgánico potásico',
    composition: 'Rica en Potasio, Calcio, Magnesio y Sílice',
    bestFor: 'Estimular flores y frutos, corrige suelos ácidos',
    instructions: 'Usar moderadamente (20-30g/m²). No aplicar en plantas acidófilas como azaleas o arándanos.'
  }
];

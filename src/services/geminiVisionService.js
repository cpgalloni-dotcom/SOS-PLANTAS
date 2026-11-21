/**
 * Servicio de diagnóstico botánico y fitopatológico utilizando Google Gemini Vision
 * Configurado específicamente para identificar la especie y usos en Argentina
 */

export async function analyzePlantWithGemini(imageBase64, apiKey) {
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('API Key no configurada. Ingresa tu Google Gemini API Key o utiliza el modo Experto Offline.');
  }

  const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

  const prompt = `
Actúa como un agrónomo y botánico fitopatólogo experto de la aplicación "SOS Plantas" en Argentina.
Analiza minuciosamente la imagen proporcionada de la planta, flor, fruto u hoja.

REGLAS CRÍTICAS:
1. SI LA PLANTA SE VE SANA O NO TIENE SIGNOS CLAROS DE ENFERMEDAD, NO INVENTES PLAGAS. Diagnostícala como SANA:
   - "isHealthy": true
   - "diseaseName": "Ninguna (Planta Sana y Vigorosa)"
   - "severity": "Ninguna"
2. El "plantName" DEBE contener estrictamente el nombre científico botánico seguido del nombre común en Argentina entre paréntesis.
   Ejemplo: "Monstera deliciosa (Costilla de Adán)" o "Epipremnum aureum (Potus)" o "Citrus × limon (Limonero)" o "Solanum lycopersicum (Tomate Platense)".
3. Evalúa con rigor el ESTADO DE RIEGO (wateringStatus):
   - "necesita_riego" si hay deshidratación o marchitez.
   - "exceso_riego" si hay amarillamiento basal o encharcamiento.
   - "riego_optimo" si está equilibrada y turgente.

Debes responder ÚNICAMENTE con un objeto JSON válido con la siguiente estructura:

{
  "plantName": "Nombre Científico en latín (Nombre común en Argentina entre paréntesis)",
  "scientificName": "Nombre científico botánico en latín",
  "argentineName": "Nombre común en Argentina",
  "plantType": "Interior / Balcón | Frutal | Huerta | Flor | Nativa",
  "isHealthy": true o false,
  "confidenceScore": número entre 85 y 99,
  "diseaseName": "Nombre de la plaga o 'Ninguna (Planta Sana y Vigorosa)'",
  "category": "Planta Sana | Hongos | Plagas | Carencias | Problemas Hídricos",
  "severity": "Ninguna | Leve | Moderada | Crítica",
  "wateringStatus": "necesita_riego | riego_optimo | exceso_riego",
  "wateringDiagnosis": "Explicación detallada del estado hídrico visible para el clima de Argentina",
  "wateringAdvice": "Pauta de riego estacional para verano e invierno en Argentina",
  "symptoms": [
    "Detalle de salud o síntoma visible detectado 1",
    "Detalle 2"
  ],
  "organicTreatment": [
    "Cuidado ecológico o preventivo 1 (mencionar marcas o recetas comunes en Argentina)",
    "Cuidado 2"
  ],
  "chemicalTreatment": [
    "Tratamiento fitosanitario comercial disponible en Argentina (Mamboretá, Fertifox, etc.) solo si está enferma"
  ],
  "recoveryCare": "Consejo agronómico de mantenimiento o recuperación para los próximos 15 días"
}

Devuelve estrictamente el JSON sin ningún texto markdown alrededor.
`;

  const requestBody = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: "image/jpeg",
              data: cleanBase64
            }
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.1,
      topP: 0.8,
      maxOutputTokens: 1024
    }
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Error en la solicitud a Gemini API (${response.status})`);
  }

  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    throw new Error('No se recibió respuesta válida del modelo de visión.');
  }

  const cleanedText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();

  try {
    const parsedJson = JSON.parse(cleanedText);
    return parsedJson;
  } catch (err) {
    console.error('Error al parsear respuesta JSON de Gemini:', rawText);
    throw new Error('La respuesta del modelo de IA no tuvo el formato esperado.');
  }
}

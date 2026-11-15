/**
 * Servicio de diagnóstico botánico y fitopatológico utilizando Google Gemini Vision
 */

export async function analyzePlantWithGemini(imageBase64, apiKey) {
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('API Key no configurada. Ingresa tu Google Gemini API Key o utiliza el modo Experto Offline.');
  }

  // Limpiar el prefijo data:image/...;base64, si existe
  const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');

  const prompt = `
Actúa como un agrónomo y fitopatólogo experto de la aplicación "SOS Plantas".
Analiza minuciosamente la imagen proporcionada de la planta, flor o frutal.
Debes responder ÚNICAMENTE con un objeto JSON válido con la siguiente estructura exacta:

{
  "plantName": "Nombre común de la planta en español (ej. Tomate, Limonero, Rosa)",
  "scientificName": "Nombre científico botánico en latín",
  "plantType": "Frutal | Flor | Hortaliza | Interior | Ornamental",
  "isHealthy": true o false,
  "confidenceScore": número entre 60 y 99,
  "diseaseName": "Nombre de la enfermedad, plaga o 'Ninguna (Planta sana)'",
  "category": "Hongos | Plagas | Carencias | Problemas Hídricos | Sana",
  "severity": "Ninguna | Leve | Moderada | Crítica",
  "wateringStatus": "necesita_riego | riego_optimo | exceso_riego",
  "wateringDiagnosis": "Explicación detallada del estado hídrico visible (¿hojas caídas por sed? ¿hojas ablandadas o clorosis por encharcamiento? ¿turgencia perfecta?)",
  "wateringAdvice": "Instrucciones precisas de riego: frecuencia, cantidad de agua y técnica para sanar la planta",
  "symptoms": [
    "Síntoma visible 1 detectado en la hoja/tallo/fruto",
    "Síntoma visible 2"
  ],
  "organicTreatment": [
    "Remedio ecológico o casero 1 (ej. aceite de neem, infusión de cola de caballo, humus)",
    "Remedio ecológico 2"
  ],
  "chemicalTreatment": [
    "Tratamiento fitosanitario comercial 1 (ej. oxicloruro de cobre, azufre, abamectina)"
  ],
  "recoveryCare": "Consejo agronómico de recuperación y calendario de cuidados en los próximos 15 días"
}

IMPORTANTE: 
1. Evalúa críticamente el ESTADO DE RIEGO (wateringStatus). Si observas marchitez por deshidratación, indica 'necesita_riego'. Si observas amarillamiento basal o pudrición por exceso de agua, indica 'exceso_riego'. Si está equilibrada, 'riego_optimo'.
2. Devuelve estrictamente el JSON, sin bloques de código markdown (\`\`\`json) adicionales ni texto fuera del objeto.
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
      temperature: 0.2,
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

  // Limpiar posibles delimitadores markdown
  const cleanedText = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();

  try {
    const parsedJson = JSON.parse(cleanedText);
    return parsedJson;
  } catch (err) {
    console.error('Error al parsear respuesta JSON de Gemini:', rawText);
    throw new Error('La respuesta del modelo de IA no tuvo el formato esperado.');
  }
}

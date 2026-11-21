/**
 * Servicio de Identificación Botánica con la API Oficial de Pl@ntNet
 * Documentación oficial: https://my.plantnet.org/
 */

export async function identifyWithPlantNet(imageBase64, apiKey, organ = 'leaf') {
  if (!apiKey || apiKey.trim() === '') {
    throw new Error('API Key de Pl@ntNet no configurada.');
  }

  // Convertir Base64 a Blob para enviarlo como multipart/form-data (como requiere Pl@ntNet)
  const cleanBase64 = imageBase64.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
  const byteCharacters = atob(cleanBase64);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/jpeg' });

  const formData = new FormData();
  formData.append('images', blob, 'plant_scan.jpg');
  formData.append('organs', organ); // 'leaf', 'flower', 'fruit', 'bark'

  const url = `https://my-api.plantnet.org/v2/identify/all?api-key=${apiKey.trim()}&lang=es`;

  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error en Pl@ntNet API (${response.status})`);
  }

  const data = await response.json();
  const bestMatch = data.results?.[0];

  if (!bestMatch) {
    throw new Error('Pl@ntNet no pudo identificar la especie con certeza suficiente.');
  }

  const commonNames = bestMatch.species?.commonNames || [];
  const plantName = commonNames[0] || bestMatch.species?.scientificNameWithoutAuthor || 'Especie Botánica';
  const scientificName = bestMatch.species?.scientificNameWithoutAuthor || 'Plantae';
  const confidenceScore = Math.round((bestMatch.score || 0.85) * 100);

  return {
    plantName,
    scientificName,
    confidenceScore,
    family: bestMatch.species?.family?.scientificNameWithoutAuthor,
    raw: bestMatch
  };
}

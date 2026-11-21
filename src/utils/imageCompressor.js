/**
 * Utilidad de compresión y adaptación de imágenes para celulares (iPhone y Android)
 * Con timeout de seguridad y soporte para formatos HEIC/JPEG de cámara móvil.
 */

export function compressAndProcessImage(file, maxDimension = 1080, quality = 0.82) {
  return new Promise((resolve) => {
    if (!file) {
      resolve(null);
      return;
    }

    let objectUrl = null;
    try {
      objectUrl = URL.createObjectURL(file);
    } catch (e) {
      console.warn('createObjectURL no disponible:', e);
    }

    // Timeout de seguridad: Si la decodificación de canvas tarda más de 500ms, resolver de inmediato
    const timeoutId = setTimeout(() => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result || objectUrl);
      reader.onerror = () => resolve(objectUrl);
      reader.readAsDataURL(file);
    }, 500);

    const img = new Image();

    img.onload = () => {
      clearTimeout(timeoutId);
      try {
        let width = img.width || 800;
        let height = img.height || 600;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(objectUrl);
          return;
        }

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        resolve(dataUrl);
      } catch (err) {
        console.warn('Canvas compresión falló, usando fallback:', err);
        resolve(objectUrl);
      }
    };

    img.onerror = () => {
      clearTimeout(timeoutId);
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result || objectUrl);
      reader.onerror = () => resolve(objectUrl);
      reader.readAsDataURL(file);
    };

    if (objectUrl) {
      img.src = objectUrl;
    } else {
      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}

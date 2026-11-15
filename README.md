# 🌿 SOS Plantas | Diagnóstico Fitosanitario y Salud de Riego

> **Aplicación móvil inteligente para la identificación de plantas, diagnóstico de enfermedades y plagas, evaluación de necesidades hídricas y calculadora de fertilizantes N-P-K (estilo Plantix).**

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)
![Java](https://img.shields.io/badge/Java-21-ED8B00?logo=openjdk&logoColor=white)
![Android](https://img.shields.io/badge/Android-XML%20%26%20CameraX-3DDC84?logo=android&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Características Principales

### 1. 📸 Escáner y Diagnóstico por Foto (Visión Artificial / IA)
- **Captura móvil**: Utiliza la cámara del teléfono o sube una fotografía desde la galería.
- **Reconocimiento botánico**: Identifica especies vegetales, árboles frutales (limonero, naranjo, vid, manzano, aguacate), flores (rosas, orquídeas) y hortalizas (tomate, pimiento, maíz).
- **Ficha clínica de salud**: Detecta patógenos (hongos, bacterias, plagas o carencias nutricionales) con porcentaje de certeza y severidad.
- **🚨 Diagnóstico Obligatorio de Riego**:
  - `💧 Necesita Riego Urgente`: Identifica marchitamiento por deshidratación y aconseja hidratación por inmersión o lenta.
  - `🚨 Alerta de Exceso de Agua / Asfixia`: Detecta encharcamiento, raíces sin oxígeno y hojas amarillas blandas; instruye suspender riegos y revisar orificios de drenaje.
  - `🌿 Riego Óptimo`: Confirma turgencia equilibrada y pautas de mantenimiento.
- **Plan de Curación**:
  - Tratamientos ecológicos (jabón potásico con neem, bicarbonato, infusión de cola de caballo, fungicida de leche).
  - Tratamientos químicos comerciales (cobre, azufre, abamectina).
  - Protocolo de recuperación a 15 días.
- **Motor Dual**: Soporte integrado para **Google Gemini 1.5 Flash Vision** + Motor heurístico experto offline con fotos de muestra para pruebas inmediatas.

### 2. 📗 Manual de Enfermedades y Plagas (Estilo Plantix)
- Catálogo enciclopédico con buscador en tiempo real.
- Filtrado por cultivo (*Frutales, Flores, Hortalizas, Interior*) y agente patógeno (*Hongos, Plagas, Carencias, Riego*).
- Fichas técnicas completas con sintomatología, ciclo de vida y prevención cultural.

### 3. 🧪 Calculadora de Fertilizantes Agronómica (N-P-K)
- Dosificación exacta por cultivo, superficie ($m^2$), hectáreas ($ha$) o número de macetas.
- Adaptada a las 4 etapas fenológicas: *Siembra, Crecimiento Vegetativo, Floración y Fructificación/Maduración*.
- Fórmulas comerciales recomendadas (Triple 15, Urea 46%, Fosfato Diamónico) y alternativas 100% orgánicas (Humus de lombriz, Harina de hueso, Cenizas de madera).
- **Regla de oro de riego para fertilización**: Advertencia para evitar quemaduras salinas en raíces.

### 4. 💡 Consejos de Cultivo y Cuidados Estacionales
- Tabla comparativa visual: Falta de agua vs Exceso de riego.
- Guías estacionales (Primavera, Verano, Otoño, Invierno).
- Recetas agroecológicas caseras paso a paso.

### 5. ☕ Módulo Nativo Android (Java + XML)
Estructura Android nativa en `android-native/`:
- **Layouts XML**: `activity_main.xml`, `activity_scanner.xml`, `activity_fertilizer.xml`.
- **Temas y Colores**: `colors.xml` (paleta verde botánica) y `strings.xml`.
- **Clases Java**: `MainActivity.java`, `ScannerActivity.java` (CameraX), `FertilizerCalculator.java`, `PlantDiagnosis.java`, `DiseaseItem.java`.
- **Base de Datos XML**: `src/data/diseases.xml`.

---

## 🚀 Despliegue en Vivo para el Público

### Opción A: GitHub Pages (Automatizado con GitHub Actions)
Este repositorio incluye un flujo automático en `.github/workflows/deploy.yml`.
1. Sube este repositorio a tu cuenta de GitHub.
2. En GitHub ve a **Settings** > **Pages**.
3. En **Build and deployment** > **Source**, selecciona **GitHub Actions**.
4. ¡Tu aplicación estará publicada con HTTPS en `https://<tu-usuario>.github.io/<nombre-repo>/`!

### Opción B: Vercel (Despliegue Inmediato en 1 Minuto)
1. Instala Vercel CLI o sube tu repositorio a GitHub y conéctalo en [vercel.com](https://vercel.com).
2. O simplemente ejecuta:
   ```bash
   npx vercel
   ```
3. ¡Obtendrás un enlace público instantáneo con soporte para cámara móvil!

---

## 🛠️ Instalación y Desarrollo Local

```bash
# 1. Clonar repositorio
git clone https://github.com/<tu-usuario>/sos-plantas.git
cd sos-plantas

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor local
npm run dev

# 4. Compilar para producción
npm run build
```

---

## 📱 Diseñado como PWA Móvil
SOS Plantas está optimizada para instalarse en cualquier celular Android o iPhone abriendo el navegador y pulsando **"Agregar a la pantalla de inicio"** para usarla como una aplicación nativa.

package com.sosplantas.app;

import android.Manifest;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.widget.ImageButton;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.ImageCapture;
import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.Preview;
import androidx.camera.lifecycle.ProcessCameraProvider;
import androidx.camera.view.PreviewView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.common.util.concurrent.ListenableFuture;
import com.sosplantas.app.model.PlantDiagnosis;

import java.io.File;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * Actividad de Cámara y Escaneo con CameraX en Java.
 * Procesa la imagen vegetal y genera el diagnóstico con informe de riego.
 */
public class ScannerActivity extends AppCompatActivity {

    private static final int CAMERA_REQUEST_CODE = 101;
    private PreviewView viewFinder;
    private ImageCapture imageCapture;
    private ExecutorService cameraExecutor;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_scanner);

        viewFinder = findViewById(R.id.viewFinder);
        FloatingActionButton btnCapture = findViewById(R.id.btn_capture);
        ImageButton btnClose = findViewById(R.id.btn_close);

        btnClose.setOnClickListener(v -> finish());
        cameraExecutor = Executors.newSingleThreadExecutor();

        if (allPermissionsGranted()) {
            startCamera();
        } else {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, CAMERA_REQUEST_CODE);
        }

        btnCapture.setOnClickListener(v -> takePhotoAndDiagnose());
    }

    private boolean allPermissionsGranted() {
        return ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) == PackageManager.PERMISSION_GRANTED;
    }

    private void startCamera() {
        ListenableFuture<ProcessCameraProvider> cameraProviderFuture = ProcessCameraProvider.getInstance(this);

        cameraProviderFuture.addListener(() -> {
            try {
                ProcessCameraProvider cameraProvider = cameraProviderFuture.get();
                Preview preview = new Preview.Builder().build();
                preview.setSurfaceProvider(viewFinder.getSurfaceProvider());

                imageCapture = new ImageCapture.Builder()
                        .setCaptureMode(ImageCapture.CAPTURE_MODE_MINIMIZE_LATENCY)
                        .build();

                CameraSelector cameraSelector = CameraSelector.DEFAULT_BACK_CAMERA;
                cameraProvider.unbindAll();
                cameraProvider.bindToLifecycle(this, cameraSelector, preview, imageCapture);

            } catch (ExecutionException | InterruptedException e) {
                Toast.makeText(this, "Error al iniciar la cámara: " + e.getMessage(), Toast.LENGTH_SHORT).show();
            }
        }, ContextCompat.getMainExecutor(this));
    }

    private void takePhotoAndDiagnose() {
        if (imageCapture == null) return;

        File photoFile = new File(getExternalFilesDir(null), "sos_leaf_scan.jpg");
        ImageCapture.OutputFileOptions outputOptions = new ImageCapture.OutputFileOptions.Builder(photoFile).build();

        imageCapture.takePicture(outputOptions, ContextCompat.getMainExecutor(this), new ImageCapture.OnImageSavedCallback() {
            @Override
            public void onImageSaved(@NonNull ImageCapture.OutputFileResults outputFileResults) {
                // Diagnosticar imagen y evaluar salud vegetal y riego
                PlantDiagnosis diagnosis = analyzePlantImage(photoFile);
                showDiagnosisBottomSheet(diagnosis);
            }

            @Override
            public void onError(@NonNull ImageCaptureException exception) {
                Toast.makeText(ScannerActivity.this, "Error de captura: " + exception.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    /**
     * Motor de diagnóstico botánico en Java con evaluación de riego
     */
    private PlantDiagnosis analyzePlantImage(File imageFile) {
        // En una implementación de producción, aquí se conecta a TensorFlow Lite o Gemini Vision API
        PlantDiagnosis diagnosis = new PlantDiagnosis();
        diagnosis.setPlantName("Tomate de Huerto");
        diagnosis.setScientificName("Solanum lycopersicum");
        diagnosis.setPlantType("Hortaliza");
        diagnosis.setHealthy(false);
        diagnosis.setConfidenceScore(96);
        diagnosis.setDiseaseName("Mildiu (Tizón foliar)");
        diagnosis.setCategory("Hongos");
        diagnosis.setSeverity("Alta");

        // EVALUACIÓN DE RIEGO OBLIGATORIA
        diagnosis.setWateringStatus("exceso_riego");
        diagnosis.setWateringDiagnosis("Alerta de exceso de humedad: Se observan hojas con manchas aceitosas " +
                "y ambiente sobresaturado. El hongo requiere agua libre en hoja para propagarse.");
        diagnosis.setWateringAdvice("Suspender riegos inmediatamente. Regar solo al pie de la planta a primera " +
                "hora de la mañana y evitar mojar hojas.");

        return diagnosis;
    }

    private void showDiagnosisBottomSheet(PlantDiagnosis diagnosis) {
        Toast.makeText(this, "Diagnóstico: " + diagnosis.getPlantName() + " - " + 
                diagnosis.getDiseaseName() + " | Riego: " + diagnosis.getWateringStatus(), Toast.LENGTH_LONG).show();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        cameraExecutor.shutdown();
    }
}

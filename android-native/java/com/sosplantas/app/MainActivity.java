package com.sosplantas.app;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.floatingactionbutton.FloatingActionButton;

/**
 * Actividad Principal en Java para SOS Plantas en Android.
 * Coordina la barra inferior de navegación y el botón central SOS de escaneo.
 */
public class MainActivity extends AppCompatActivity {

    private BottomNavigationView bottomNavigationView;
    private FloatingActionButton fabScan;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initViews();
        setupListeners();
    }

    private void initViews() {
        bottomNavigationView = findViewById(R.id.bottom_navigation);
        fabScan = findViewById(R.id.fab_scan);
    }

    private void setupListeners() {
        // Botón Flotante Central: Inicia la cámara y escáner fitosanitario
        fabScan.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, ScannerActivity.class);
            startActivity(intent);
        });

        // Navegación por pestañas inferiores
        bottomNavigationView.setOnItemSelectedListener(item -> {
            int itemId = item.getItemId();
            if (itemId == R.id.nav_home) {
                // Cargar Fragmento de Inicio
                return true;
            } else if (itemId == R.id.nav_manual) {
                // Cargar Fragmento de Manual de Plagas
                return true;
            } else if (itemId == R.id.nav_calculator) {
                // Abrir Actividad de la Calculadora de Fertilizantes
                Intent calcIntent = new Intent(MainActivity.this, FertilizerCalculatorActivity.class);
                startActivity(calcIntent);
                return true;
            } else if (itemId == R.id.nav_tips) {
                // Cargar Consejos de Riego y Poda
                return true;
            }
            return false;
        });
    }
}

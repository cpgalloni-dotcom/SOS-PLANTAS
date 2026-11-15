package com.sosplantas.app;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;
import android.widget.Spinner;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

/**
 * Actividad Android de la Calculadora de Fertilizantes en Java.
 */
public class FertilizerCalculatorActivity extends AppCompatActivity {

    private Spinner spinnerCrop;
    private EditText etArea;
    private RadioGroup rgStage;
    private Button btnCalc;
    private TextView tvResultNpk;
    private TextView tvResultFormula;

    private final String[] crops = {"Tomate", "Limonero", "Naranjo", "Rosas", "Aguacate", "Vid", "Orquídeas", "Maíz"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fertilizer);

        initViews();
        setupSpinner();
        setupListeners();
    }

    private void initViews() {
        spinnerCrop = findViewById(R.id.spinner_crop);
        etArea = findViewById(R.id.et_area);
        rgStage = findViewById(R.id.rg_stage);
        btnCalc = findViewById(R.id.btn_calc);
        tvResultNpk = findViewById(R.id.tv_result_npk);
        tvResultFormula = findViewById(R.id.tv_result_formula);
    }

    private void setupSpinner() {
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_dropdown_item, crops);
        spinnerCrop.setAdapter(adapter);
    }

    private void setupListeners() {
        btnCalc.setOnClickListener(v -> {
            String selectedCrop = spinnerCrop.getSelectedItem().toString().toLowerCase();
            double area = 20.0;
            try {
                area = Double.parseDouble(etArea.getText().toString());
            } catch (Exception ignored) {}

            FertilizerCalculator.Stage stage = FertilizerCalculator.Stage.CRECIMIENTO;
            int checkedId = rgStage.getCheckedRadioButtonId();
            if (checkedId == R.id.rb_siembra) stage = FertilizerCalculator.Stage.SIEMBRA;
            else if (checkedId == R.id.rb_floracion) stage = FertilizerCalculator.Stage.FLORACION;
            else if (checkedId == R.id.rb_fructificacion) stage = FertilizerCalculator.Stage.FRUCTIFICACION;

            FertilizerCalculator.NpkResult result = FertilizerCalculator.calculateDose(selectedCrop, area, stage);

            tvResultNpk.setText(String.format("N: %.0fg | P: %.0fg | K: %.0fg", 
                    result.nitrogenGrams, result.phosphorusGrams, result.potassiumGrams));
            tvResultFormula.setText("Fórmula: " + result.commercialRecommendation + "\nOrgánico: " + result.organicAlternative);
        });
    }
}

import express from 'express';

const router = express.Router();

/**
 * Logistics Accessibility & Disruption Prediction Engine
 * Prototype fusion model for SIH26002
 * Factors: Rainfall, Soil/Slope, Historical disruption, Road condition, Congestion
 */

router.post('/predict', (req, res) => {
  try {
    const {
      rainfall24h = 0,
      rainfall72h = 0,
      soilMoisture = 30,
      terrainRisk = 50,
      historicalFrequency = 30,
      roadCondition = 50,      // 0=excellent … 100=severe damage
      congestionIndex = 20,    // 0–100
      elevation = 500,
    } = req.body;

    // Normalize inputs (0-100)
    const rainScore = Math.min(100, ((rainfall24h || 0) / 120) * 100);
    const soilScore = Math.min(100, ((soilMoisture || 30) / 85) * 100);
    const terrainScore = Math.min(100, terrainRisk);
    const histScore = Math.min(100, historicalFrequency);
    const roadScore = Math.min(100, roadCondition);
    const congScore = Math.min(100, congestionIndex);

    // Weighted fusion (prototype)
    // Rain 28% | Soil/Slope 22% | Road Condition 20% | Historical 15% | Congestion 15%
    const finalScore = Math.round(
      rainScore * 0.28 +
      soilScore * 0.22 +
      roadScore * 0.20 +
      histScore * 0.15 +
      congScore * 0.15
    );

    let level = "LOW";
    if (finalScore >= 75) level = "EXTREME";
    else if (finalScore >= 58) level = "HIGH";
    else if (finalScore >= 38) level = "MODERATE";

    const factors = [
      { factor: "Rainfall Intensity (24h)", contribution: `${Math.round(rainScore * 0.28)} pts` },
      { factor: "Soil / Slope Saturation", contribution: `${Math.round(soilScore * 0.22)} pts` },
      { factor: "Road / Bridge Condition", contribution: `${Math.round(roadScore * 0.20)} pts` },
      { factor: "Historical Disruption Frequency", contribution: `${Math.round(histScore * 0.15)} pts` },
      { factor: "Congestion Index", contribution: `${Math.round(congScore * 0.15)} pts` },
    ];

    // Simple alternate route suggestion logic (mocked)
    const suggestAlternate = finalScore >= 50;
    const estimatedDelayMin = finalScore >= 75 ? 120 + Math.round(finalScore * 0.8)
      : finalScore >= 58 ? 60 + Math.round(finalScore * 0.5)
      : finalScore >= 38 ? 20 + Math.round(finalScore * 0.3)
      : 0;

    res.json({
      success: true,
      data: {
        score: finalScore,
        level,
        factors,
        suggestAlternate,
        estimatedDelayMin,
        model: "EvoGuard Logistics Disruption Fusion Engine (Deterministic Prototype)",
        modelStatus: "DERIVED PROTOTYPE",
        timestamp: new Date().toISOString(),
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Keep legacy /score endpoint for compatibility
router.post('/score', (req, res) => {
  res.json({
    success: true,
    data: {
      overallScore: 62,
      overallLevel: "MODERATE",
      accessibilityScore: 58,
      message: "Use /api/risk/predict for full logistics disruption prediction",
    },
  });
});

export default router;
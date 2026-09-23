"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import styles from "./calculator.module.css";

const TABS = ["BMI", "BMR", "Sleep", "Target Heart Rate & Zones", "Biological Age", "Biological Age (ec.com)"];

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState("BMI");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  const calculateBmi = () => {
    const feet = parseFloat(heightFeet);
    const inches = parseFloat(heightInches);
    const w = parseFloat(weight);

    if (isNaN(feet) || isNaN(inches) || isNaN(w)) return;

    const totalInches = (feet * 12) + inches;
    if (totalInches <= 0) return;

    const bmi = (w / (totalInches * totalInches)) * 703;
    setBmiResult(bmi);
  };

  return (
    <>
      <Navbar />
      <main id="main" className={styles.containerWrapper}>
        <div className="container">
          <div className={styles.calcContainer}>
            <div className={styles.tabs}>
              {TABS.map(tab => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "BMI" && (
              <div className={styles.grid}>
                <div>
                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                      <label>Height (feet) <span>*</span></label>
                      <input 
                        type="number" 
                        className={styles.inputField} 
                        value={heightFeet} 
                        onChange={e => setHeightFeet(e.target.value)}
                        placeholder="feet"
                      />
                    </div>
                    <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                      <label>Height (inches) <span>*</span></label>
                      <input 
                        type="number" 
                        className={styles.inputField} 
                        value={heightInches} 
                        onChange={e => setHeightInches(e.target.value)}
                        placeholder="inches"
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Weight <span>*</span></label>
                    <input 
                      type="number" 
                      className={styles.inputField} 
                      value={weight} 
                      onChange={e => setWeight(e.target.value)}
                      placeholder="Weight"
                    />
                  </div>
                  <button className={styles.calcBtn} onClick={calculateBmi}>
                    Calculate BMI
                  </button>
                  
                  {bmiResult !== null ? (
                    <div className={styles.resultWrapper}>
                      <div className={styles.result}>{bmiResult.toFixed(1)}</div>
                      <div className={styles.resultLabel}>Your Body Mass Index</div>
                    </div>
                  ) : (
                    <div className={styles.resultWrapper}>
                      <div className={styles.result}>BMI</div>
                      <div className={styles.resultLabel}>Use this tool to calculate your Body Mass Index (BMI)</div>
                    </div>
                  )}
                </div>

                <div className={styles.rightColumn}>
                  <h3>Body Mass Index</h3>
                  <p>
                    Body Mass Index (BMI) is a commonly used measurement that assesses a person&apos;s body weight in relation to their height, providing an estimate of body composition and potential health risks associated with weight.
                  </p>
                  <div className={styles.chart}>
                    <div className={styles.chartRow}>
                      <span>BMI &lt; 18.5 :</span>
                      <span className={styles.blueText}>Underweight</span>
                    </div>
                    <div className={styles.chartRow}>
                      <span>18.6 - 24.9 :</span>
                      <span className={styles.greenText}>Healthy Weight</span>
                    </div>
                    <div className={styles.chartRow}>
                      <span>25.0 - 29.9 :</span>
                      <span className={styles.yellowText}>Overweight</span>
                    </div>
                    <div className={styles.chartRow}>
                      <span>30.0 - 39.9 :</span>
                      <span className={styles.redText}>Obese</span>
                    </div>
                    <div className={styles.chartRow}>
                      <span>40 &lt; BMI :</span>
                      <span className={styles.darkRedText}>Severely Obese</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab !== "BMI" && (
              <div style={{ textAlign: "center", padding: "4rem", color: "#555" }}>
                Calculator for {activeTab} is coming soon.
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

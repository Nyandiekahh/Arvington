import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

const DataSimulation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [codeLines, setCodeLines] = useState([]);
  const [showGraphs, setShowGraphs] = useState(false);
  const [graphProgress, setGraphProgress] = useState(0);

  const codeSteps = [
    "import pandas as pd",
    "import numpy as np",
    "from analysis import PolicyImpact",
    "",
    "# Load healthcare data",
    "data = pd.read_csv('health_data.csv')",
    "",
    "# Calculate impact metrics",
    "impact = PolicyImpact.analyze(data)",
    "coverage = impact.universal_coverage()",
    "",
    "# Generate insights",
    "results = {",
    "  'coverage_increase': '+23%',",
    "  'cost_reduction': '-15%',",
    "  'beneficiaries': '2.5M'",
    "}",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeStep < codeSteps.length) {
        setCodeLines(prev => [...prev, codeSteps[activeStep]]);
        setActiveStep(prev => prev + 1);
      } else if (!showGraphs) {
        setShowGraphs(true);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [activeStep]);

  useEffect(() => {
    if (showGraphs && graphProgress < 100) {
      const timer = setInterval(() => {
        setGraphProgress(prev => Math.min(prev + 2, 100));
      }, 30);
      return () => clearInterval(timer);
    }
  }, [showGraphs, graphProgress]);

  // Reset animation
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      setActiveStep(0);
      setCodeLines([]);
      setShowGraphs(false);
      setGraphProgress(0);
    }, 12000);

    return () => clearTimeout(resetTimer);
  }, [activeStep === codeSteps.length && showGraphs]);

  return (
    <section style={{ padding: '6rem 2rem', backgroundColor: '#f8f9fa', color: '#1a1a1a', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              backgroundColor: 'rgba(31, 66, 121, 0.1)',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(31, 66, 121, 0.2)',
            }}
          >
            <Activity size={18} style={{ color: '#1F4279' }} />
            <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#1F4279' }}>Live Data Analysis</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              letterSpacing: '-1px',
            }}
          >
            From Data to Impact
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#6a6a6a',
              maxWidth: '750px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Watch how we transform complex datasets into actionable insights that drive policy decisions.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '2rem',
            alignItems: 'start',
          }}
        >
          {/* Code Editor */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '2px solid #e5e5e5',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(31, 66, 121, 0.1)',
            }}
          >
            <div
              style={{
                backgroundColor: '#f8f9fa',
                padding: '0.75rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: '2px solid #e5e5e5',
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#28ca42' }} />
              </div>
              <span style={{ marginLeft: '1rem', fontSize: '0.85rem', color: '#6a6a6a' }}>policy_analysis.py</span>
            </div>
            <div
              style={{
                padding: '1.5rem',
                fontFamily: 'Monaco, Menlo, "Courier New", monospace',
                fontSize: '0.9rem',
                lineHeight: '1.8',
                minHeight: '400px',
                backgroundColor: '#ffffff',
              }}
            >
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  style={{
                    opacity: 0,
                    animation: 'fadeIn 0.3s ease forwards',
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  <span style={{ color: '#999', marginRight: '1rem', userSelect: 'none' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      color: line.startsWith('#') ? '#6a9955' :
                             line.includes('import') || line.includes('from') ? '#af00db' :
                             line.includes('def') || line.includes('=') ? '#0070c1' :
                             line.includes("'") || line.includes('"') ? '#a31515' :
                             '#1a1a1a',
                    }}
                  >
                    {line || '\u00A0'}
                  </span>
                </div>
              ))}
              {activeStep >= codeSteps.length && (
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 122, 51, 0.1)',
                    borderLeft: '3px solid #007A33',
                    borderRadius: '4px',
                  }}
                >
                  <span style={{ color: '#007A33', fontWeight: '600' }}>✓ Analysis Complete</span>
                  <div style={{ color: '#6a6a6a', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    Generating visualizations...
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Data Visualizations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Line Chart */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '2px solid #e5e5e5',
                padding: '1.5rem',
                opacity: showGraphs ? 1 : 0,
                transform: showGraphs ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <TrendingUp size={20} style={{ color: '#1F4279' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>Healthcare Coverage Growth</h3>
              </div>
              <div style={{ position: 'relative', height: '200px', padding: '1rem 0' }}>
                {/* Y-axis labels */}
                <div style={{ position: 'absolute', left: '-30px', top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999' }}>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>
                
                {/* Grid lines */}
                <div style={{ position: 'absolute', left: '10px', right: '10px', top: 0, bottom: '30px' }}>
                  {[0, 1, 2, 3, 4].map(i => (
                    <div key={i} style={{ 
                      position: 'absolute', 
                      left: 0, 
                      right: 0, 
                      top: `${i * 25}%`, 
                      height: '1px', 
                      backgroundColor: '#e5e5e5' 
                    }} />
                  ))}
                </div>

                {/* SVG Line Chart */}
                <svg style={{ width: '100%', height: 'calc(100% - 30px)', position: 'relative' }} viewBox="0 0 400 170">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#1F4279', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#007A33', stopOpacity: 1 }} />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#1F4279', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#1F4279', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Data points */}
                  {[
                    { x: 50, y: 170 - (45 / 80 * 170), label: '2020', value: 45 },
                    { x: 150, y: 170 - (52 / 80 * 170), label: '2021', value: 52 },
                    { x: 250, y: 170 - (61 / 80 * 170), label: '2022', value: 61 },
                    { x: 350, y: 170 - (68 / 80 * 170), label: '2023', value: 68 },
                  ].map((point, idx, arr) => {
                    const progress = Math.min(graphProgress / 100, 1);
                    const visibleIdx = Math.floor(progress * arr.length);
                    const isVisible = idx <= visibleIdx;
                    const animProgress = idx === visibleIdx ? (progress * arr.length - visibleIdx) : 1;
                    
                    return (
                      <g key={idx}>
                        {/* Line segment */}
                        {idx > 0 && isVisible && (
                          <line
                            x1={arr[idx - 1].x}
                            y1={arr[idx - 1].y}
                            x2={arr[idx - 1].x + (point.x - arr[idx - 1].x) * animProgress}
                            y2={arr[idx - 1].y + (point.y - arr[idx - 1].y) * animProgress}
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        )}
                        
                        {/* Area fill */}
                        {idx === visibleIdx && idx > 0 && (
                          <path
                            d={`M ${arr[0].x} 170 ${arr.slice(0, idx + 1).map((p, i) => {
                              if (i === idx) {
                                const partialX = arr[idx - 1].x + (p.x - arr[idx - 1].x) * animProgress;
                                const partialY = arr[idx - 1].y + (p.y - arr[idx - 1].y) * animProgress;
                                return `L ${partialX} ${partialY}`;
                              }
                              return `L ${p.x} ${p.y}`;
                            }).join(' ')} L ${arr[idx - 1].x + (point.x - arr[idx - 1].x) * animProgress} 170 Z`}
                            fill="url(#areaGradient)"
                          />
                        )}
                        
                        {/* Data point */}
                        {isVisible && animProgress > 0.5 && (
                          <>
                            <circle cx={point.x} cy={point.y} r="6" fill="#ffffff" stroke="#1F4279" strokeWidth="3" />
                            <circle cx={point.x} cy={point.y} r="3" fill="#1F4279" />
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* X-axis labels */}
                <div style={{ position: 'absolute', bottom: 0, left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between' }}>
                  {['2020', '2021', '2022', '2023'].map((label, idx) => (
                    <span key={idx} style={{ fontSize: '0.8rem', color: '#6a6a6a', fontWeight: '500' }}>{label}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                opacity: showGraphs ? 1 : 0,
                transform: showGraphs ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease 0.2s',
              }}
            >
              {[
                { icon: <TrendingUp size={24} />, label: 'Coverage Increase', value: '+23%', color: '#007A33' },
                { icon: <BarChart3 size={24} />, label: 'Cost Reduction', value: '-15%', color: '#1F4279' },
                { icon: <PieChart size={24} />, label: 'Beneficiaries', value: '2.5M', color: '#D4AF37' },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '2px solid #e5e5e5',
                    padding: '1.5rem 1rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: metric.color, marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                    {metric.icon}
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '700', color: metric.color, marginBottom: '0.25rem' }}>
                    {graphProgress > 80 ? metric.value : '...'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6a6a6a' }}>{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            {showGraphs && graphProgress < 100 && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '2px solid #e5e5e5',
                  padding: '1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#6a6a6a' }}>Processing data...</span>
                  <span style={{ fontSize: '0.85rem', color: '#1F4279' }}>{graphProgress}%</span>
                </div>
                <div style={{ width: '100%', height: '4px', backgroundColor: '#e5e5e5', borderRadius: '2px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${graphProgress}%`,
                      height: '100%',
                      backgroundColor: '#1F4279',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <style>
          {`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateX(-10px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @media (max-width: 1100px) {
              [style*="gridTemplateColumns: repeat(auto-fit, minmax(500px, 1fr))"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
};

export default DataSimulation;

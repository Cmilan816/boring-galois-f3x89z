// App.js - Código completo para visualizaciones
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

// Datos para la visualización 1: Ambigüedades RACI
const raciAmbiguitiesData = [
  { proceso: "ZF-C-RETAIL-COTIZACIÓN Y VENTA", ambiguedades: 2 },
  { proceso: "ZF-C-AUTOS-VENTA VEHÍCULOS", ambiguedades: 1 },
  { proceso: "ZF Y ZE-AD-FINIQUITO", ambiguedades: 1 },
  { proceso: "ZF Y ZE-AD-DECLARACIONES TRIBUTARIAS", ambiguedades: 2 },
  { proceso: "ZE-AD-NATALES-REPUESTO-APOYO", ambiguedades: 1 },
];

// Datos para la visualización 2: Distribución de procesos
const processDistributionData = [
  { name: "ZF-RETAIL", value: 10, color: "#0088FE" },
  { name: "ZE-REP/OTROS", value: 6, color: "#00C49F" },
  { name: "ZF/ZE-ADMIN", value: 14, color: "#FFBB28" },
  { name: "SUCURSALES", value: 3, color: "#FF8042" },
  { name: "ZF-AUTOS", value: 4, color: "#8884D8" },
];

// Datos para la visualización 3: Priorización de mejoras
const improvementPrioritizationData = [
  {
    categoria: "Matrices RACI",
    inmediato: 5,
    cortoplazo: 3,
    medioplazo: 1,
  },
  {
    categoria: "Controles de Autorización",
    inmediato: 4,
    cortoplazo: 4,
    medioplazo: 2,
  },
  {
    categoria: "Gestión Documental",
    inmediato: 3,
    cortoplazo: 5,
    medioplazo: 2,
  },
  {
    categoria: "Implementación KPIs",
    inmediato: 2,
    cortoplazo: 4,
    medioplazo: 4,
  },
  {
    categoria: "Compliance Normativo",
    inmediato: 4,
    cortoplazo: 3,
    medioplazo: 3,
  },
];

// Datos para la visualización 4: Análisis de KPIs
const kpiAnalysisData = [
  {
    area: "Comercial",
    cantidad: 4,
    implementacion: 2,
    impacto: 4,
  },
  {
    area: "Operaciones",
    cantidad: 3,
    implementacion: 3,
    impacto: 5,
  },
  {
    area: "Finanzas",
    cantidad: 2,
    implementacion: 3,
    impacto: 5,
  },
  {
    area: "RRHH",
    cantidad: 1,
    implementacion: 2,
    impacto: 3,
  },
];

// Componente principal que contiene todas las visualizaciones
function AnalisisProcesosVisualizations() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];
  const total = processDistributionData.reduce(
    (sum, entry) => sum + entry.value,
    0
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Dashboard de Análisis de Procesos
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px", color: "#666" }}>
        Visualizaciones para el Informe Ejecutivo - Abril 2025
      </p>

      {/* Fila 1: Visualizaciones 1 y 2 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {/* Visualización 1: Ambigüedades RACI */}
        <div
          style={{
            flex: "1 1 calc(50% - 20px)",
            minWidth: "500px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Ambigüedades en Matrices RACI por Proceso
          </h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={raciAmbiguitiesData}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="proceso"
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  label={{
                    value: "Cantidad",
                    angle: -90,
                    position: "insideLeft",
                    offset: -5,
                  }}
                  tickCount={3}
                  domain={[0, 3]}
                />
                <Tooltip />
                <Bar dataKey="ambiguedades" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visualización 2: Distribución de Procesos */}
        <div
          style={{
            flex: "1 1 calc(50% - 20px)",
            minWidth: "500px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Distribución de Procesos Analizados por Área
          </h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={processDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, value }) =>
                    `${name}: ${value} (${Math.round((value / total) * 100)}%)`
                  }
                >
                  {processDistributionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value) => [`${value} procesos`, "Cantidad"]}
                />
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "12px",
              color: "#666",
            }}
          >
            Total: 37 procesos analizados en 5 áreas
          </div>
        </div>
      </div>

      {/* Fila 2: Visualizaciones 3 y 4 */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {/* Visualización 3: Priorización de Mejoras */}
        <div
          style={{
            flex: "1 1 calc(50% - 20px)",
            minWidth: "500px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Priorización de Mejoras Recomendadas
          </h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={improvementPrioritizationData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categoria" />
                <YAxis
                  label={{
                    value: "Número de Acciones",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="inmediato"
                  name="Acción Inmediata"
                  stackId="a"
                  fill="#ff8042"
                />
                <Bar
                  dataKey="cortoplazo"
                  name="Corto Plazo"
                  stackId="a"
                  fill="#82ca9d"
                />
                <Bar
                  dataKey="medioplazo"
                  name="Medio Plazo"
                  stackId="a"
                  fill="#8884d8"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Visualización 4: Análisis de KPIs */}
        <div
          style={{
            flex: "1 1 calc(50% - 20px)",
            minWidth: "500px",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Análisis de KPIs por Áreas Funcionales
          </h2>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={kpiAnalysisData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis
                  label={{
                    value: "Valoración (1-5)",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="cantidad"
                  name="Cantidad de KPIs"
                  fill="#8884d8"
                />
                <Bar
                  dataKey="implementacion"
                  name="Complejidad de Implementación"
                  fill="#82ca9d"
                />
                <Bar
                  dataKey="impacto"
                  name="Impacto Potencial"
                  fill="#ff8042"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
          borderTop: "1px solid #eee",
          paddingTop: "20px",
        }}
      >
        <p>
          Informe de Análisis de Procesos y Recomendaciones de Mejora - Abril
          2025
        </p>
      </div>
    </div>
  );
}

export default AnalisisProcesosVisualizations;

const nodes = [
  { x: 20, title: "query", sub: "technician input", cx: 90 },
  { x: 180, title: "retrieval", sub: "dense + BM25", cx: 250 },
  { x: 340, title: "orchestration", sub: "LangGraph agents", cx: 410 },
  { x: 500, title: "safety layer", sub: "Model Armor", cx: 570 },
  { x: 660, title: "generation", sub: "grounded response", cx: 730 },
];

const HeroPipeline = () => (
  <div className="hero-card">
    <div className="hero-card-label">
      A REQUEST MOVING THROUGH A PRODUCTION RAG + AGENT PIPELINE
    </div>
    <svg
      id="pipe"
      viewBox="0 0 820 140"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram of a query flowing through hybrid retrieval, agent orchestration, safety layer, and response generation"
    >
      <path className="flow-line" d="M 90 70 L 730 70" />
      <circle
        className="pulse"
        r="4"
        style={{ offsetPath: "path('M 90 70 L 730 70')" }}
      />

      {nodes.map((node) => (
        <g key={node.title}>
          <rect
            className="node-box"
            x={node.x}
            y="40"
            width="140"
            height="60"
            rx="10"
          />
          <text className="node-title" x={node.cx} y="66" textAnchor="middle">
            {node.title}
          </text>
          <text className="node-sub" x={node.cx} y="82" textAnchor="middle">
            {node.sub}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

export default HeroPipeline;

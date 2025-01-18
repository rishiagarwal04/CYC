import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

// Nodes and edges for the flowchart
const nodes = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 0, y: 0 } },
  { id: '2', data: { label: 'Step 1' }, position: { x: 200, y: 100 } },
  { id: '3', data: { label: 'Step 2' }, position: { x: 400, y: 200 } },
  { id: '4', type: 'output', data: { label: 'End' }, position: { x: 600, y: 300 } },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '1', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
];

// Main Component
const Flowchart = () => {
  const [selectedElement, setSelectedElement] = useState(null);

  // Handle click on a node
  const handleNodeClick = (event, node) => {
    console.log('Node clicked:', node);
    setSelectedElement(node); // Update the state with the clicked node
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* Display the selected element */}
      {selectedElement && (
        <div style={{ marginTop: 20 }}>
          <h3>Selected Node:</h3>
          <p>Id: {selectedElement.id}</p>
          <p>Label: {selectedElement.data.label}</p>
        </div>
      )}
    </div>
  );
};

export default Flowchart;

// import React from 'react';
// // import './App.css'; // Importing the CSS file
// import milestone1eng from './milestone1eng';

// class Milestone2eng extends React.Component {
//   componentDidMount() {
//     this.init();
//   }

//   init() {
//     const $ = go.GraphObject.make;

//     const diagram = $(go.Diagram, "diagramDiv", {
//       "undoManager.isEnabled": true, // Enable undo and redo
//       layout: $(go.TreeLayout, { angle: 90, layerSpacing: 40 }) // Vertical layout
//     });

//     // Define a simple node template
//     diagram.nodeTemplate = $(
//       go.Node, "Auto",
//       $(go.Shape, "RoundedRectangle", {
//         fill: "lightblue",
//         strokeWidth: 0
//       }),
//       $(go.TextBlock, {
//         margin: 8,
//         font: "bold 12pt sans-serif",
//         stroke: "black",
//         wrap: go.TextBlock.WrapFit,
//         textAlign: "center"
//       }, new go.Binding("text", "name"))
//     );

//     // Define the link template
//     diagram.linkTemplate = $(
//       go.Link,
//       { routing: go.Link.Orthogonal, corner: 5 },
//       $(go.Shape, { strokeWidth: 2, stroke: "#555" }),
//       $(go.Shape, { toArrow: "Standard", stroke: null })
//     );

//     // The model data with Olympiads and Skills
//     diagram.model = new go.GraphLinksModel(
//       [
//         { key: 1, name: "Start" },
//         { key: 2, name: "Specialization" },
//         { key: 3, name: "Career Change" },
//         { key: 4, name: "Higher Studies" },
//         { key: 5, name: "Engineering Career Options" },
//         { key: 6, name: "Campus Placements" },
//         { key: 7, name: "Become an Expert" },
//         { key: 8, name: "Look for Internships" },
//         { key: 9, name: "Business Development" },
//         { key: 10, name: "M.Tech & GATE" },
//         { key: 11, name: "Master of Science (M.S.)" },
//         { key: 12, name: "Game Designing" },
//         { key: 13, name: "Public Service Undertakings (PSUs)" },
//         { key: 14, name: "Management" },
//         { key: 15, name: "Civil Services" },
//         { key: 16, name: "Join the Indian Armed Forces" },
//         { key: 17, name: "Entrepreneurship" },
//         { key: 18, name: "Olympiads" },
//         { key: 19, name: "Mathematics" },
//         { key: 20, name: "Chemistry" },
//         { key: 21, name: "Physics" },
//         { key: 22, name: "Science Olympiads" },
//         { key: 23, name: "Technology & Computing" },
//         { key: 24, name: "General Knowledge & Miscellaneous" },
//         { key: 25, name: "Programming Basics" },
//         { key: 26, name: "Web Development" },
//         { key: 27, name: "Mobile App Development" },
//         { key: 28, name: "Game Development" }
//       ],
//       [
//         { from: 1, to: 2 },
//         { from: 2, to: 3 },
//         { from: 2, to: 4 },
//         { from: 2, to: 5 },
//         { from: 5, to: 6 },
//         { from: 5, to: 7 },
//         { from: 5, to: 8 },
//         { from: 5, to: 9 },
//         { from: 4, to: 10 },
//         { from: 4, to: 11 },
//         { from: 3, to: 12 },
//         { from: 3, to: 13 },
//         { from: 3, to: 14 },
//         { from: 3, to: 15 },
//         { from: 3, to: 16 },
//         { from: 3, to: 17 },
//         { from: 1, to: 18 },
//         { from: 18, to: 19 },
//         { from: 18, to: 20 },
//         { from: 18, to: 21 },
//         { from: 18, to: 22 },
//         { from: 18, to: 23 },
//         { from: 23, to: 25 },
//         { from: 23, to: 26 },
//         { from: 23, to: 27 },
//         { from: 23, to: 28 }
//       ]
//     );
//   }

//   render() {
//     return (
//       <div>
//         <h2>Career Path Flowchart After Engineering</h2>
//         <div id="diagramDiv" style={{ width: "100%", height: "600px", border: "1px solid lightgray" }}></div>
//       </div>
//     );
//   }
// }

// export default Milestone2eng;

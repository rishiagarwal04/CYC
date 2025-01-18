// /* global go */
// import React, { useEffect } from 'react';
// import Data from '../Data/Engineer/ninthAnd10/Data';
// import Skill9and10 from '../Data/Cooking/Skills9and10';
// import CollegeList from '../Data/Engineer/College';
// import CareerOptions from '../Data/Engineer/Specializations';
// import EngineeringData from '../Data/Engineer/MarketTrends';
// const CareerPathFlowchart = () => {
//     useEffect(() => {
//         // Dynamically load the GoJS script
//         const script = document.createElement('script');
//         script.src = "https://unpkg.com/gojs/release/go-debug.js";
//         script.async = true;
//         document.body.appendChild(script);

//         // Initialize GoJS once the script is loaded
//         script.onload = () => {
//             const $ = window.go.GraphObject.make;

//             const myDiagram = $(go.Diagram, "myDiagramDiv", {
//                 "undoManager.isEnabled": true,
//                 layout: $(go.TreeLayout, { angle: 90, layerSpacing: 40 }),
//             });

     


//             myDiagram.nodeTemplate = $(
//                 go.Node, "Auto",
//                 $(go.Shape, "RoundedRectangle", { fill: "#f2e3ff", strokeWidth: 0 }),
//                 $(go.TextBlock, { margin: 8, font: "bold 12pt sans-serif", stroke: "black", textAlign: "center" }, new go.Binding("text", "name"))
//             );

//             myDiagram.linkTemplate = $(
//                 go.Link,
//                 { routing: go.Link.Orthogonal, corner: 5 },
//                 $(go.Shape, { strokeWidth: 2, stroke: "#555" }),
//                 $(go.Shape, { toArrow: "Standard", stroke: null })
//             );

//             myDiagram.zoomToFit()

//             myDiagram.model = new go.GraphLinksModel(
//                 [
                    
//                     { key: 2, name: "9th & 10th" },
//                     { key: 3, name: "Olympiads" },
//                     { key: 4, name: "Skills" },

//                     { key: 5, name: "Mathematics" },
//                     { key: 6, name: "Chemistry" },
//                     { key: 7, name: "Physics" },
//                     { key: 8, name: "Science Olympiads" },
//                     { key: 9, name: "Technology and Computing" },
                    
//                     { key: 10, name: "Programming & Development" },
//                     { key: 11, name: "Hardware & Electronics" },
//                     { key: 12, name: "Data & Analytics" },
//                     { key: 13, name: "Creative & Design Tools" },
//                     { key: 14, name: "Cybersecurity & Cloud" },
//                     { key: 15, name: "Emerging Technologies" },
//                     { key: 16, name: "Collaboration & Version Control" },
//                     { key: 17, name: "Competitions & Challenges" },
//                     { key: 18, name: "General knowledge and Miscellaneous" },
//                 ],
//                 [
                   
//                     { from: 2, to: 3 },
//                     { from: 2, to: 4 },
        
//                     { from: 4, to: 10 },
//                     { from: 4, to: 11 },
//                     { from: 4, to: 12 },
//                     { from: 4, to: 13 },
//                     { from: 4, to: 14 },
//                     { from: 4, to: 15 },
//                     { from: 4, to: 16 },
//                     { from: 4, to: 17 },
//                     { from: 3, to: 5 },
//                     { from: 3, to: 6 },
//                     { from: 3, to: 7 },
//                     { from: 3, to: 8 },
//                     { from: 3, to: 9 },
//                     { from: 3, to: 18 }
//                 ]
//             );

//             myDiagram.zoomToFit();

//             // Optional: Set a minimum and maximum scale
//             myDiagram.scale = Math.min(myDiagram.scale, 1);

    
//         };

//         // Clean up script when component unmounts
//         return () => {
//             document.body.removeChild(script);
//         };
//     }, []);

//     return (
//         <>
//         <div>
//             <h2>Career Path Flowchart After Engineering</h2>
//             <div id="myDiagramDiv" style={{ width: '100%',height:'1000px'}}/>
//         </div>

//         <EngineeringData/>
//         {/* <Data/> */}
// {/* 
//         <div className='absolute w-[200px] h-[100px] bg-white top-5 left-0 z-10'>

//         </div> */}
//         </>
//     );
// };

// export default CareerPathFlowchart;





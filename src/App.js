import React from "react";
import Chating from "./components/chating";
import Chatting from "./components/Chatting";
import Friend from "./components/Friend";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Chatting />} />
        <Route path="/Friend" element={<Friend />} />
        <Route path="/chat" element={<Chating />} />
      </Routes>
    </BrowserRouter>
  );
}
// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Chatting />} />
//           <Route path="/Friend" element={<Friend />} />
//           <Route path="/chat" element={<Chating />} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">
//             <Chatting />
//           </Route>
//           <Route path="/Friend">
//             <Friend />
//           </Route>
//           <Route path="/chat">
//             <Chating />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

export default App;

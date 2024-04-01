import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join  from './components/Join/Join';
import Chat  from './components/Chat/Chat';
const App =() =>(
    <Router>
        <Routes>
            <Route path="/" element={<Join />} />
            <Route path="/chat" element={<Chat />} />
        </Routes>
    </Router>
);
export default App;


// import React from 'react';

// import Chat from './components/Chat/Chat';
// import Join from './components/Join/Join';

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//         <Routes>
//             <Route path="/" exact component={Join} />
//             <Route path="/chat" component={Chat} />
//         </Routes>
      
//     </Router>
//   );
// }

// export default App;
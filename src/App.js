import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main'
import FamilyPage from "./Components/FamilyPage";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/family/:familyId" element={<FamilyPage/>}/>
            <Route path="/hello" element={<>hello word</>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;

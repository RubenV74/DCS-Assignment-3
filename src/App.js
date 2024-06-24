import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main'
import FamilyPage from "./Components/FamilyPage";
import CreateFamilyPage from "./Components/CreateFamilyPage";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/family/:familyId" element={<FamilyPage/>}/>
          <Route path="/family/create" element={<CreateFamilyPage/>}/>
        </Routes>

      </BrowserRouter>
  );
}

export default App;

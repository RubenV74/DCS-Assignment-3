import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main'
import FamilyPage from "./Components/FamilyPage";
import CreateFamilyPage from "./Components/CreateFamilyPage";
import Layout from "./Components/Layout";

function App() {

  return (
      <BrowserRouter>
          <Layout>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/family/:familyId" element={<FamilyPage/>}/>
          <Route path="/family/create" element={<CreateFamilyPage/>}/>
            <Route path="*" element={<><h1>404</h1><p>Page Not Found</p></>}/>
        </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App;

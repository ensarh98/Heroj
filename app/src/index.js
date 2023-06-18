import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz";
import Forum from "./pages/forum";
import NoPage from "./pages/nopage";
import IndexApp from "./pages/index/components/IndexApp";
import Template from "./pages/template/template.jsx";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Topic from "./pages/forum/Topic";
import ForumRegisterId from "./pages/forum/ForumRegisterId";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
//import "./pages/index/css/index.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/:id" element={<Topic />} />
        <Route path="/forum/register/:id" element={<ForumRegisterId />} />
        <Route path="/template/:id" element={<Template />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

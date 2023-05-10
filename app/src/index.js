import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/quiz";
import Forum from "./pages/forum";
import NoPage from "./pages/nopage";
import IndexApp from "./pages/index/components/indexApp";


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<IndexApp/>} />
            <Route path="forum" element={<Forum />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

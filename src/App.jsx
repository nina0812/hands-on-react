import "./index.scss";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Coursee from "./pages/Coursee";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<Coursee />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

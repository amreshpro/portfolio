import { BrowserRouter } from "react-router-dom";
import About from "./components/about";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { ThemeProvider } from "./provider/ThemeProvider";
import Profiles from "./components/profiles";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <main className="py-20">
          <Skills />
          <Projects />
          <Profiles/>
          <Blogs />
          <About />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

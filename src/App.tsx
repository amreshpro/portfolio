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
import Hero from "./components/hero";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <main className="py-20 px-4 flex flex-col gap-16 items-center ">
          <Hero />
          <Skills />
          <Projects />
          <Profiles />
          <Blogs />
          <About />
          <Contact />
        </main>
        <Footer />

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

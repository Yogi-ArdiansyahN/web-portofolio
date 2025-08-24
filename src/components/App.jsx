// src/components/App.jsx
import { useState } from "react";
import Home from "./Home.jsx"; // Pastikan nama file sesuai (Home.jsx, bukan Welcome.jsx)
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";



export default function App() {
  const [activePage, setActivePage] = useState("home"); // Ubah inisial state ke "home" agar sesuai dengan navbar

function Navbar() {
    return (
      <>
      <nav className="pt-2 md:pt-5  ">
        <div className="text-lg font-bold text-center">YOGIAN</div>
        </nav>
       <div className="sticky bg-dark max-w-screen-xl mx-auto px-4 py-3 flex justify-center items-center">
          <ul className="flex gap-6 font-medium">
            <li>
              <button
                onClick={() => setActivePage("home")}
                className={`hover:text-gray-500 dark:hover:text-gray-300 ${
                  activePage === "home" ? "border-b-1 border-white" : ""
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("project")}
                className={`hover:text-gray-500 dark:hover:text-gray-300 ${
                  activePage === "project" ? "border-b-1 border-white" : ""
                }`}
              >
                Project
              </button>
            </li>
            {/* <li>
              <button
                onClick={() => setActivePage("contact")}
                className={`hover:text-gray-500 dark:hover:text-gray-300 ${
                  activePage === "contact" ? "border-b-1 border-white" : ""
                }`}
              >
                Contact
              </button>
            </li> */}
          </ul>
        </div>
      </>
      
    )
}

  return (
    <div>
     <Navbar />
      <div id="app" className="mt-6">
        {activePage === "home" ? (
          <Home />
        ) : activePage === "project" ? (
          <Project />
        ) : (
          <Home /> // Fallback ke Home jika state tidak valid
        )}
      </div>
    </div>
  );
}   
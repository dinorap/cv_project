import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import SidebarAvatar from './components/Sidebar/SidebarAvatar'
import SidebarContact from './components/Sidebar/SidebarContact'
import SidebarSkills from './components/Sidebar/SidebarSkills'
import SidebarAwards from './components/Sidebar/SidebarAwards'
import SidebarHobit from './components/Sidebar/SidebarHobit'
import "./App.css";

function App() {
  return (
    <div className="cv">
      <aside className="resume-sidebar">
        <SidebarAvatar />
        <SidebarContact />
        <SidebarSkills />
        <SidebarAwards />
        <SidebarHobit />
      </aside>
      <main className="cv__main">
        <section className="resume-section"><About /></section>
        <section className="resume-section"><Education /></section>
        <section className="resume-section"><Projects /></section>
        <section className="resume-section"><Skills /></section>
      </main>
    </div>
  );
}

export default App;

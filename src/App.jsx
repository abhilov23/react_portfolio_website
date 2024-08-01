import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contract from "./components/contract/Contract";
import "./app.scss"


function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contract/>
     </div>
    </div>
  );
}

export default App;

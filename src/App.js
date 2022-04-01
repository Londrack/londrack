import { DataProvider } from "./Context";

import { Menu } from "./components/Menu";
import { Title } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Skills } from "./pages/Skills";
import { RecentWorks } from "./pages/RecentWorks";
import { Laboratory } from "./pages/Laboratory";
import { Networks } from "./pages/Networks";
import { SkillsRadar } from "./pages/SkillsRadar";


function App() {

  return (
    <DataProvider>
        <div id="well">
          <Title />
          <AboutMe />
          {/* <Skills /> */}
          <SkillsRadar />
          <Laboratory />
          <RecentWorks />
          <Networks />
        </div>
        <Menu />
    </DataProvider>
  );
}

export default App;

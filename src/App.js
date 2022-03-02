import { DataProvider } from "./Context";

import { Menu } from "./components/Menu";
import { Title } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Skills } from "./pages/Skills";
import { RecentWorks } from "./pages/RecentWorks";
import { Laboratory } from "./pages/Laboratory";
import { Networks } from "./pages/Networks";


function App() {

  return (
    <DataProvider>
        <Menu />
        <div id="well">
          <Title />
          <AboutMe />
          <Skills />
          <Laboratory />
          <RecentWorks />
          <Networks />
        </div>
    </DataProvider>
  );
}

export default App;

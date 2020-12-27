import {Header} from "./components/Header/index";
import Box from "@material-ui/core/Box";
import {BaristaPageMain} from "./modules/BaristaPage/BaristaPageMain";
import {AppDrawer} from "./components/Drawer";


function App() {
    return (
    <div className="mainWrap">
      <Header />
          <Box py={6}>
              <BaristaPageMain />
              <AppDrawer />
          </Box>
    </div>
  );
}

export default App;

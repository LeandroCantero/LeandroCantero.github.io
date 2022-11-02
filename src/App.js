import "./App.css";
import Body from "./components/body/Body";
import { LanguageProvider } from "./context/language/LanguageProvider";

function App() {
  return (
    <LanguageProvider>
      <Body/>
    </LanguageProvider>
  );
}

export default App;

import { LocalStorageProvider } from "./contexts/localStorage";
import { AppRouter } from "./routes";


function App() {
  return (
    <>
    <LocalStorageProvider>
      <AppRouter />
    </LocalStorageProvider>
    </>
  );
}

export default App;

// src/App.tsx
import Home from "./pages/home";
import { MainLayout } from "./layout/main-layout";

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;

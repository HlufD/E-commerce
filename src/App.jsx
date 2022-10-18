import Home from "./routes/home/Home.com";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/navigation.com";
import SignIn from "./routes/sing-in/sign-in.comp";

function Shop() {
  return <p>I am shop page</p>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="shop" element={<Shop />} />
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;

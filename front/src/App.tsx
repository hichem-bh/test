import "./App.css";
import { Login } from "./pages/login";
import auth from "./actions/auth";
import { In } from "./pages/in";

function App() {
  console.log(auth.isLogin())
  return <div className="App">{auth.isLogin() ? <In /> : <Login />}</div>;
}

export default App;

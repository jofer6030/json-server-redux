import { Provider } from "react-redux";
import FormUsers from "./components/FormUsers";
import ListUsers from "./components/ListUsers";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Lista de Usuarios
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <ListUsers />
          <FormUsers />
        </div>
      </div>
    </Provider>
  );
}

export default App;

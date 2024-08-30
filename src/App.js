import { Provider } from "react-redux";
import Body from "../src/component/Body";
import appStore from "./redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;

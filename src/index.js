import ReactDOM from "react-dom/client";
import { items } from "./data";
import ListComponent from "./WrappedListComponent";

//import List from "./List.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ListComponent items={items} />);

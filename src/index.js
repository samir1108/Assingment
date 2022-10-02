import ReactDOM from "react-dom/client";
import { items } from "./data";
import WrappedListComponent from "./List";

//import List from "./List.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<WrappedListComponent items={items} />);

import React from "react";
import { Provider } from "react-redux";

import store from "./store/index";

import CourseList from "./components/CourseList/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CourseList />
      </div>
    </Provider>
  );
}

export default App;

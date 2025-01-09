/**
 * Exapmle of creating simple HTML tag using React's Create Element that generates JavaScript Object.
 **/
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);

/** 
 * Exapmle of creating Structure of DOM using React's Create Element that generates JavaScript Object.
 * <div id="parent">
    <div id="child">
      <div>
        <h1>Here is h1 tag</h1>
      </div>
    </div>
  </div>
**/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Here is h1 tag")
  )
);

/** 
 * Exapmle of creating sibling inside Structure of DOM using React's Create Element that generates JavaScript Object.
 * <div id="parent">
    <div id="child">
      <div>
        <h1>Here is h1 tag</h1>
        <h1>Here is h2 tag</h1>
      </div>
    </div>
  </div>
**/
const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Here is h1 tag"),
    React.createElement("h2", {}, "Here is h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Here is h1 tag"),
    React.createElement("h2", {}, "Here is h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Here root.render() renders and converts the React Element object into HTML DOM tag that is understande by Web browser.
 */
root.render(parent1);

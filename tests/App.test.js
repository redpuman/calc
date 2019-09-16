import React from "react";
import rendered from "react-test-renderer";
import App from "../src/App";

test('Render ok', () => {
    const component = rendered.create(<App/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
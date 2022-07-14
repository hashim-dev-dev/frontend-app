// import { render, screen } from "@testing-library/react";
import ShallowRenderer from 'react-test-renderer/shallow';
import App from "./App";

test("renders learn react link", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
  // render(<App />);
  // const linkElement = screen.getByText(/React yet again!/i);
  // expect(linkElement).toBeInTheDocument();
});

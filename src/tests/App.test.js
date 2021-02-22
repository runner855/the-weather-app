import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { location, forecasts } from "../data/forecast.json";

test("renders Weather App", () => {
  render(<App forecasts={forecasts} location={location} />);
  const app_head = screen.getByText(/Weather App/i);
  expect(app_head).toBeInTheDocument();
});

describe("ForecastSummary", () => {
  it("renders", () => {});
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { location, forecasts } from "../data/forecast.json";

test("renders Weather App", () => {
  render(<App forecasts={forecasts} location={location} />);
  const AppTitle = screen.getByText(/Weather App/i);
  expect(AppTitle).toBeInTheDocument();
});

describe("ForecastSummary", () => {
  it("renders", () => {});
});

import ReactGA from "react-ga";

export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

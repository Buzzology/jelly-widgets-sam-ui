import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { EnumWidgetId } from './@types/Widget';
import ScrollToTop from './routes/RoutesScrollToTop';
import ViewContact from './views/generic/ViewContact';
import ViewHome from './views/generic/ViewHome';
import ViewAustralianCompanyNumberGenerator from './views/widgets/ViewAustralianCompanyNumberGenerator';
import ViewAustralianCompanyNumberValidator from './views/widgets/ViewAustralianCompanyNumberValidator';
import ViewWidgetsList from './views/widgets/ViewWidgetsList';
import ReactGA from 'react-ga';

function App() {
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);

  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route index element={<ViewHome />} />
            <Route path="contact" element={<ViewContact />} />
            <Route path="widgets">
              <Route path={`${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR}/*`} element={<ViewAustralianCompanyNumberGenerator />} />
              <Route path={`${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_VALIDATOR}/*`} element={<ViewAustralianCompanyNumberValidator />} />
              <Route path={``} element={<ViewWidgetsList />} />
              {/* <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

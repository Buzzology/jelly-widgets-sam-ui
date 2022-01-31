import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnumWidgetId } from './@types/Widget';
import ScrollToTop from './routes/RoutesScrollToTop';
import ViewContact from './views/generic/ViewContact';
import ViewHome from './views/generic/ViewHome';
import ViewAustralianCompanyNumberGenerator from './views/widgets/ViewAustralianCompanyNumberGenerator';
import ViewAustralianCompanyNumberValidator from './views/widgets/ViewAustralianCompanyNumberValidator';
import ViewAustralianTaxFileNumberGenerator from './views/widgets/ViewAustralianTaxFileNumberGenerator';
import ViewAustralianTaxFileNumberValidator from './views/widgets/ViewAustralianTaxFileNumberValidator';
import ViewWidgetsList from './views/widgets/ViewWidgetsList';

function App() {
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
              <Route path={`${EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_GENERATOR}/*`} element={<ViewAustralianTaxFileNumberGenerator />} />
              <Route path={`${EnumWidgetId.AUSTRALIAN_TAX_FILE_NUMBER_VALIDATOR}/*`} element={<ViewAustralianTaxFileNumberValidator />} />
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

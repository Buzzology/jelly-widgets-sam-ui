import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EnumWidgetId } from './@types/Widget';
import ViewHome from './views/generic/ViewHome';
import ViewAustralianCompanyNumberGenerator from './views/widgets/ViewAustralianCompanyNumberGenerator';
import ViewAustralianCompanyNumberValidator from './views/widgets/ViewAustralianCompanyNumberValidator';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<ViewHome />} />
        {/* <Route path="widgets" element={<Teams />}> */}
        <Route path="widgets">
          <Route path={`${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_GENERATOR}/*`} element={<ViewAustralianCompanyNumberGenerator />} />
          <Route path={`${EnumWidgetId.AUSTRALIAN_COMPANY_NUMBER_VALIDATOR}/*`} element={<ViewAustralianCompanyNumberValidator />} />
          {/* <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
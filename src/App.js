import React from 'react';
import Loading from './component/ui-components/loading/loading';
import { ToastNotify } from './component/ui-components/toast-notify/toast-notify';
import ParentRoute from './routes/parent-route';

// create context
export const AppContext = React.createContext({});
const App = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <AppContext.Provider value={{ setLoading }}>
      {loading ? <Loading /> : ''}
      <ParentRoute />
      <ToastNotify />
    </AppContext.Provider>
  );
};

export default App;
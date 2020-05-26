import React from 'react';
import { IonApp } from '@ionic/react';

import Conference from './pages/Conference';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import DataProvider from './context/DataContext';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const App: React.FC = () => (
  <DataProvider>
    <IonApp>
      <Conference></Conference>
    </IonApp>
  </DataProvider>
);

export default App;

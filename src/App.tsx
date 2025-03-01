import { IonApp, IonPage, IonRouterOutlet, IonSplitPane, IonContent, IonItem, IonLabel, IonInput, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';

setupIonicReact();

const SignIn: React.FC = () => {
const [username, setUsername] = useState<string>('');
const [password, setPassword] = useState<string>('');

  return (
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput value={username} onIonChange={(e)=> setUsername(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput value={password} onIonChange={(e)=> setPassword(e.detail.value!)}></IonInput>
      </IonItem>
    </IonContent>
  );
}

const App: React.FC = () => {
  return (
    <IonApp>

      <IonReactRouter>
        <IonSplitPane contentId="main">

          <Menu></Menu>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/folder/Inbox" />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/signin" exact={true}>
              <SignIn></SignIn>
        </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

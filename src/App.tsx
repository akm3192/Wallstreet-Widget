import { IonApp, IonPage, IonRouterOutlet, IonSplitPane, IonContent, IonItem, IonLabel, IonInput, setupIonicReact, IonButton } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
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

const SignIn: React.FC<{setUsername: (value: string) => void; setPassword: (value: string) => void}> = ({setUsername, setPassword}) => {
  const history = useHistory();
  const [inputUsername, setInputUsername] = useState<string>('');
  const [inputPassword, setInputPassword] = useState<string>('');

  const signIn = () => {
    if (inputUsername && inputPassword){
      history.push('/folder/Inbox');
      setUsername(inputUsername);
      setPassword(inputPassword);
    }
  }

  return (
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput value={inputUsername} onIonChange={(e)=> setInputUsername(e.detail.value!)}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput value={inputPassword} type="password" onIonChange={(e)=> setInputPassword(e.detail.value!)}></IonInput>
      </IonItem>
      <IonButton expand="full" onClick={signIn}>Sign In</IonButton>
    </IonContent>
  );
}

const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  if (username!='' && password!=''){
    return(
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

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
    );
  }else{
  return (
    <IonApp>

      <IonReactRouter>
          <IonRouterOutlet id="main">
            <Route path="/SignIn" exact={true}>
              <SignIn setUsername={setUsername} setPassword={setPassword}></SignIn>
        </Route>

          </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
};

export default App;

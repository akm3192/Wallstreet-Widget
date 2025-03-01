import { IonContent, IonInput, IonItem, IonLabel} from '@ionic/react';
import './Page.css';
import { useState } from 'react';

const SignIn: React.FC = () => {

  const [username, setUsername] = useState<string>('');

  return (
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Enter Username</IonLabel>
        <IonInput value={username} onIonChange={(e)=> setUsername(e.detail.value!)}></IonInput>
      </IonItem>
    </IonContent>
  );
};

export default SignIn;

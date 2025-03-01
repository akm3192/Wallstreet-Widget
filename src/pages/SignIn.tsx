import { IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { useState } from 'react';

const SignIn: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [username] = useState<string>('');

  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel position = "floating">Enter username</IonLabel>
          <IonInput type="text" value={username} ></IonInput>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;

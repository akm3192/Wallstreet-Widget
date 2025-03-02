import './ExploreContainer.css';
import Dashboard from './Dashboard';
import Invest from './Invest';
import { IonButton } from '@ionic/react';
import Chatbot from '../chatbot/Chatbot';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      {name === 'Dashboard' && <Dashboard />}
      {name === 'Invest' && <Invest />}
      <Chatbot/>
    </div>
  );
};//add any more pages here

export default ExploreContainer;

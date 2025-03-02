import './ExploreContainer.css';
import Dashboard from './Dashboard';
import Invest from './Invest';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      {name === 'Dashboard' && <Dashboard />}
      {name === 'Invest' && <Invest />}
    </div>
  );
};//add any more pages here

export default ExploreContainer;

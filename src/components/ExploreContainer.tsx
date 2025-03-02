import './ExploreContainer.css';
import Badge from './Badge';
import Dashboard from './Dashboard';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <Dashboard/>
      
    </div>
  );
};

export default ExploreContainer;

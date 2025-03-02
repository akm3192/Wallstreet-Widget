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
    
      <p>Here's a small text description for the content. Nothing more, nothing less.</p>
      <Dashboard/>
      
    </div>
  );
};

export default ExploreContainer;

import './ExploreContainer.css';
import Badge from './Badge';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
    
      <p>Here's a small text description for the content. Nothing more, nothing less.</p>
      <Badge/>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      
    </div>
  );
};

export default ExploreContainer;

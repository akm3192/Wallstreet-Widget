import { IonButton, IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton, IonToolbar } from '@ionic/react';
import './ExploreContainer.css';
import { useState } from 'react';
import { Redirect } from 'react-router';
import companies from '../companies.json';
interface ContainerProps {
  text: string;
}

const EarningsContainer: React.FC<ContainerProps> = ({ text }) => {
  const [selectedTab, setSelectedTab] = useState<string>('earnings');
  return (
    <div id="box">
    <IonToolbar id="tabs">
      <IonSegment value={selectedTab} onIonChange={(e) => setSelectedTab(e.detail.value!.toString())}>
        <IonSegmentButton value="earnings">
          <IonLabel>
            Your Earnings
          </IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="projected">
          <IonLabel>
            Projected
          </IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </IonToolbar>

      {selectedTab === 'earnings' &&(
        <>
        <br></br>
        <div id="inline-container"><strong>${text}</strong><IonButton id="button" onClick={() => { }}>Invest</IonButton></div>
        Start investing to earn!
        </>
      )}
      {selectedTab === 'projected' &&(
        <>
        <br></br>
        <div id="inline-container"><strong>${((companies[0].stock_trends["2024"][11]-companies[0].stock_trends["2024"][0])/12).toPrecision(3)}</strong></div>
        <br></br>
        Projected monthly earnings based off of stock trends.
        </>
      )}

    </div>
  );
};

export default EarningsContainer;

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Template: React.FC = () => {
  return (
    <IonPage>
        
      <IonHeader>
        <IonToolbar>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonButton expand="full" onClick={() => alert('Login')}>
          Login
        </IonButton>


      </IonContent>
    </IonPage>
  );
};

export default Template;

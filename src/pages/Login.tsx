import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Login: React.FC = () => {
    const navigation = useIonRouter();
    
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

export default Login;

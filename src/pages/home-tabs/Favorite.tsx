import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Favorite: React.FC = () => {
  return (
    <IonPage>
        
      <IonHeader>
        <IonToolbar>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Favorite</h1>
      </IonContent>
    </IonPage>
  );
};

export default Favorite;

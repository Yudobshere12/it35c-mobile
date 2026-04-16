import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
        
      <IonHeader>
        <IonToolbar>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Search</h1>
      </IonContent>
    </IonPage>
  );
};

export default Search;

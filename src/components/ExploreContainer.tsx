import React from 'react';
import { IonBadge, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem, IonList } from '@ionic/react';
import { heart, calendar, musicalNote } from 'ionicons/icons';

function Example() {
  return (
    <>
      <IonTabBar color="light">
        <IonTabButton tab="tab1">
          <IonIcon icon={heart} />
          <IonLabel>Favorites</IonLabel>
          <IonBadge color="danger"></IonBadge>
        </IonTabButton>
        <IonTabButton tab="tab2">
          <IonIcon icon={musicalNote} />
          <IonLabel>Music</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3">
          <IonIcon icon={calendar} />
          <IonLabel>Calendar</IonLabel>
          <IonBadge color="danger">47</IonBadge>
        </IonTabButton>
      </IonTabBar>
       <IonList>
      <IonItem>
        <IonLabel>Followers</IonLabel>
        <IonBadge color="primary">22k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Likes</IonLabel>
        <IonBadge color="secondary">118k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Stars</IonLabel>
        <IonBadge color="tertiary">34k</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Completed</IonLabel>
        <IonBadge color="success">80</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Warnings</IonLabel>
        <IonBadge color="warning">70</IonBadge>
      </IonItem>
      <IonItem>
        <IonLabel>Notifications</IonLabel>
        <IonBadge color="danger">1000</IonBadge>
      </IonItem>
    </IonList>
    </>
  );
}
export default Example;
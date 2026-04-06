import { IonHeader, IonMenu, IonPage, IonSplitPane, IonToolbar, IonRouterOutlet, IonContent, IonMenuToggle, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Home from './Home';


const Menu: React.FC = () => {
  const paths = [
    { name: 'Home', url: '/app/home', icon: homeOutline }

  ];


  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar />
          </IonHeader>
          <IonContent>
            {paths.map((item, index) => (

              <IonMenuToggle key={index} autoHide={false}>

                <IonItem routerLink={item.url} routerDirection="forward">

                  <IonIcon slot="start" icon={item.icon} />

                  <IonLabel>{item.name}</IonLabel>

                </IonItem>
              </IonMenuToggle>
            ))}
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>

  );
};

export default Menu;
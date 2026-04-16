import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import { homeOutline, logOutOutline } from 'ionicons/icons';
import Page1 from './page1';
import Page2 from './page2';

const Menu: React.FC = () => {

    const path = [
        { name: 'Home', url: '/app/home', icon: homeOutline },
        { name: 'Page1', url: '/app/page1', icon: homeOutline },
        { name: 'Page2', url: '/app/page2', icon: homeOutline }
    ]

    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu content='main'>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>

                        {path.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection='forward'>
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                </IonItem>
                            </IonMenuToggle>
                        ))}

                        <IonButton expand= "full" routerLink="/">
                        <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                        Logout

                        </IonButton>
                    </IonContent>

                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/app/home" component={Home} />
                    <Route exact path="/app">
                        <Redirect to="/app/home" />

                    </Route>

                    <Route exact path="/app/page1" component={Page1} />
                    <Route exact path="/app/page2" component={Page2} />

                </IonRouterOutlet>
            </IonSplitPane>

        </IonPage>

    );
};

export default Menu;
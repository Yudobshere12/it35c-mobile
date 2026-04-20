import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import { chatboxEllipses, chatboxEllipsesOutline } from 'ionicons/icons';

const Feed: React.FC = () => {
  const games =[
  {name:"Pokémon Yellow"},
  {name:"Mega Man X"},
  {name:"The Legend of Zelda"},
  {name:"Pac-Man"},
  {name:"Super Mario World"}
  
]
  return (
    <IonPage>
        
      <IonHeader>
         <IonToolbar>
           <IonTitle>login</IonTitle>
              </IonToolbar>
                  </IonHeader>
                       <IonContent className="ion-padding">

                         <IonList>
                          {games.map((item,index)=>(
                            <IonItem key={index}>
                              <IonLabel>{item.name}</IonLabel>
                            </IonItem>
                          ))}
                          
               </IonList>

               <IonCard>
                   <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                      <IonCardHeader>
                        <IonCardTitle>YUDOBSHERE</IonCardTitle>
                          <IonCardSubtitle>YAPHETS</IonCardSubtitle>
                             </IonCardHeader>

                                  <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                                    </IonCard>

                               <IonGrid>
                                 <IonRow>
                                   <IonCol>
                                    <IonButton fill="clear" expand="full">
                                      <IonIcon icon={chatboxEllipsesOutline} ></IonIcon>
                                        <IonLabel style={{marginLeft:'5px'}}>Comment</IonLabel>
                                    </IonButton>
                                   </IonCol>

                                    <IonButton fill="clear" expand="full">
                                      <IonIcon icon={chatboxEllipsesOutline} ></IonIcon>
                                        <IonLabel style={{marginLeft:'5px'}}>LIKE</IonLabel>
                                    </IonButton>

                                      <IonButton fill="clear" expand="full">
                                      <IonIcon icon={chatboxEllipsesOutline} ></IonIcon>
                                        <IonLabel style={{marginLeft:'5px'}}>share</IonLabel>
                                    </IonButton>

                                    

                                   
                                     <IonCol></IonCol>
                                       <IonCol></IonCol>
                                           </IonRow>
                                                </IonGrid>





               </IonContent>
         </IonPage>
   );
};

export default Feed;

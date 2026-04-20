import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonSearchbar} from '@ionic/react';
import { chatboxEllipses, chatboxEllipsesOutline, filter } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const Feed: React.FC = () => {
  const games =[
  {name:"Pokémon Yellow"},
  {name:"Mega Man X"},
  {name:"The Legend of Zelda"},
  {name:"Pac-Man"},
  {name:"Super Mario World"}
  
]

    const [searchText, setSearchText] = useState("");
    const [filtered, setFilteredGames] = useState(games);


    useEffect(()=>{
      const debounce = setTimeout(()=>{
        const filteredGames = games.filter((game)=> 
          game.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredGames(filteredGames);
      }, 400);
      
      return () => clearTimeout(debounce);
    }, [searchText]);

    
  return (
    <IonPage>
        
      <IonHeader>
         <IonToolbar>
           <IonTitle>SEARCH</IonTitle>
              </IonToolbar>
                  </IonHeader>
                       <IonContent className="ion-padding">

                         
                            <IonSearchbar
                              placeholder="Search games..."
                              value={searchText}
                              debounce ={0}
                              onIonInput={(e) => setSearchText(e.detail.value!)}
                            />
                            



                         <IonList>
                          {filtered.map((item,index)=>(
                            <IonItem key={index}>
                              <IonLabel>{item.name}</IonLabel>
                            </IonItem>
                          ))}
                          
               </IonList>

              


               </IonContent>
         </IonPage>
   );
};

export default Feed;

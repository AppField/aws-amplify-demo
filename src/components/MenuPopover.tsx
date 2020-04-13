import React from "react";
import { IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import { settingsOutline, personOutline } from "ionicons/icons";

interface MenuPopoverProps {
  onClick: () => any;
}

const MenuPopover: React.FC<MenuPopoverProps> = ({ onClick }) => {
  return (
    <IonList>
      <IonItem
        button
        onClick={() => {
          onClick();
        }}
      >
        <IonIcon slot="start" icon={personOutline} />
        <IonLabel>Account</IonLabel>
      </IonItem>
      <IonItem
        button
        onClick={() => {
          onClick();
        }}
      >
        <IonIcon slot="start" icon={settingsOutline} />
        <IonLabel>Settings</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default MenuPopover;

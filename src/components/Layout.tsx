import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  isPlatform,
  IonButtons,
  IonButton,
  IonIcon,
  IonPopover,
} from "@ionic/react";
import styled from "styled-components";
import { ellipsisVertical } from "ionicons/icons";
import MenuPopover from "./MenuPopover";

const StyledDiv = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledToolbar = styled(IonToolbar)`
  ${() => isPlatform("ios") && `--background: translucent`}
`;

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const [showPopover, setShowPopover] = useState<{
    isOpen: boolean;
    event: MouseEvent | undefined;
  }>({
    isOpen: false,
    event: undefined,
  });

  return (
    <>
      <IonPopover
        isOpen={showPopover.isOpen}
        event={showPopover.event}
        translucent={true}
        onDidDismiss={() => setShowPopover({ isOpen: false, event: undefined })}
      >
        <MenuPopover
          onClick={() => setShowPopover({ isOpen: false, event: undefined })}
        />
      </IonPopover>
      <IonPage>
        <IonHeader>
          <StyledToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton
                onClick={(event) =>
                  setShowPopover({ isOpen: true, event: event.nativeEvent })
                }
              >
                <IonIcon
                  color="primary"
                  slot="icon-only"
                  icon={ellipsisVertical}
                />
              </IonButton>
            </IonButtons>
          </StyledToolbar>
        </IonHeader>
        <IonContent>
          <StyledDiv>
            <IonHeader collapse="condense">
              <StyledToolbar>
                <IonTitle size="large">{title}</IonTitle>
              </StyledToolbar>
            </IonHeader>
            {children}
          </StyledDiv>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Layout;

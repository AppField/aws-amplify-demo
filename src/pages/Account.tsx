import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Auth } from 'aws-amplify';
import { mapUser } from '../models';
import User from '../models/user';
import { IonItem, IonList, IonLabel, IonButton, IonButtons, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';

interface AccountProps extends RouteComponentProps<any> {}

const Account: React.FC<AccountProps> = ({ history }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getUser() {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        const user = mapUser(cognitoUser);
        setUser(user);
      } catch (error) {
        console.log('Error getting the user', error);
      }
    }
    getUser();
  }, []);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('Could not sign out', error);
    }
  };

  return (
    <Layout title="Account" backButtonDefaultHref="/">
      {user && (
        <>
          <IonList>
            <IonItem>
              <IonLabel>E-Mail Address</IonLabel>
              <IonLabel>{user.email}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Phone Number</IonLabel>
              <IonLabel>{user.phoneNumber}</IonLabel>
            </IonItem>
          </IonList>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton fill="clear" onClick={() => signOut()}>
                Sign Out
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </>
      )}
    </Layout>
  );
};

export default Account;

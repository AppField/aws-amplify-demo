import React, { useEffect } from 'react';
import Layout from '../components/Layout';

import { listTalks as ListTalks } from '../graphql/queries';
import { deleteTalk as DeleteTalk } from '../graphql/mutations';
import { onCreateTalk as OnCreateTalk, onDeleteTalk as OnDeleteTalk } from '../graphql/subscriptions';

import { API, graphqlOperation } from 'aws-amplify';
import { ListTalksQuery, OnCreateTalkSubscription, OnDeleteTalkSubscription } from '../API';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/react';
import CreateTalk from '../components/CreateTalk';
import { useDataContext, Types } from '../context/DataContext';
import Talk, { mapTalks } from '../models/talk';
import { trashOutline } from 'ionicons/icons';

const Conference: React.FC = () => {
  const { state, dispatch } = useDataContext();

  useEffect(() => {
    async function getData() {
      try {
        const talkData = (await API.graphql(graphqlOperation(ListTalks))) as { data: ListTalksQuery };
        const talks = mapTalks(talkData.data);
        dispatch({ type: Types.SetTalks, talks: talks });
      } catch (error) {
        console.error('Error fetching talks...', error);
      }
    }

    getData();
  }, [dispatch]);

  useEffect(() => {
    // @ts-ignore
    const subscriptionCreate = API.graphql(graphqlOperation(OnCreateTalk)).subscribe({
      next: ({ value: { data } }: { value: { data: OnCreateTalkSubscription } }) => {
        const talk = data.onCreateTalk;

        talk?.clientId === state.clientId
          ? dispatch({ type: Types.UpdateTalk, talk })
          : dispatch({ type: Types.AddTalk, talk });
      },
    });

    // @ts-ignore
    const subscriptionDelete = API.graphql(graphqlOperation(OnDeleteTalk)).subscribe({
      next: ({ value: { data } }: { value: { data: OnDeleteTalkSubscription } }) => {
        const talk = data.onDeleteTalk;
        dispatch({ type: Types.RemoveTalk, talk });
      },
    });
    return () => {
      subscriptionCreate.unsubscribe();
      subscriptionDelete.unsubscribe();
    };
  });

  const deleteTalk = async (talk: Talk) => {
    const { id, clientId } = talk;
    const input = id ? { id } : { clientId };
    try {
      await API.graphql(graphqlOperation(DeleteTalk, { input }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="AWS Amplify Conference Demo App">
      {state.talks?.map((talk, index) => (
        <IonCard key={index}>
          <IonCardHeader>
            <IonCardTitle>{talk.name}</IonCardTitle>
            <IonCardSubtitle>
              By {talk.speakerName}, {talk.speakerBio}
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{talk.description}</p>
          </IonCardContent>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton color="danger" fill="clear" onClick={() => deleteTalk(talk)}>
                Delete <IonIcon slot="end" icon={trashOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonCard>
      ))}
      <CreateTalk />
    </Layout>
  );
};

export default Conference;

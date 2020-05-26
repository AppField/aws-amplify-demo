import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';

import { listTalks as ListTalks } from '../graphql/queries';

import { API, graphqlOperation } from 'aws-amplify';
import { ListTalksQuery } from '../API';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';

const Conference: React.FC = () => {
  const [talks, setTalks] = useState<any[] | undefined>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const talkData = (await API.graphql(graphqlOperation(ListTalks))) as { data: ListTalksQuery };
      console.log('talkData:', talkData);
      setTalks(talkData.data.listTalks?.items as any[]);
    } catch (err) {
      console.error('Error fetching talks...', err);
    }
  }

  return (
    <Layout title="AWS Amplify Conference Demo App">
      {talks?.map((talk, index) => (
        <IonCard key={index}>
          <IonCardHeader>
            <IonCardTitle>{talk.name}</IonCardTitle>
            <IonCardSubtitle>By {talk.speakerName}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>{talk.description}</p>
          </IonCardContent>
        </IonCard>
      ))}
    </Layout>
  );
};

export default Conference;

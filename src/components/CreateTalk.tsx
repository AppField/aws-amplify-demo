import React, { useState, useRef } from 'react';
import {
  IonGrid,
  IonRow,
  IonButton,
  IonModal,
  IonToolbar,
  IonFooter,
  IonTitle,
  IonHeader,
  IonButtons,
  IonIcon,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';

import { API, graphqlOperation } from 'aws-amplify';

import { v4 as uuid } from 'uuid';

import { createTalk as CreateTalkMutation } from '../graphql/mutations';
import { useDataContext, Types } from '../context/DataContext';
import Talk from '../models/talk';
import ErrorMessage from './ErrorMessage';

const initialFormValues: Talk = {
  name: '',
  description: '',
  speakerBio: '',
  speakerName: '',
};

const minLength = 3;
const maxLength = 100;

const validators = {
  required: {
    value: true,
    message: <ErrorMessage message="Required" />,
  },
  minLength: {
    value: minLength,
    message: <ErrorMessage message={`Must be at least ${minLength} characters long`} />,
  },
};

export const CreateTalk: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { state, dispatch } = useDataContext();
  const formRef = useRef<HTMLFormElement>(null);

  const { control, handleSubmit, errors, reset } = useForm({
    defaultValues: initialFormValues,
  });

  const onSubmit = async (values: Talk) => {
    const clientId = uuid();

    const talk: Talk = {
      clientId,
      name: values.name,
      description: values.description,
      speakerName: values.speakerName,
      speakerBio: values.speakerBio,
    };
    const talks = [...state.talks, talk];

    dispatch({ type: Types.SetClientId, clientId });
    dispatch({ type: Types.SetTalks, talks });

    try {
      await API.graphql(graphqlOperation(CreateTalkMutation, { input: talk }));
    } catch (error) {
      console.log('error creating talk...', error);
    } finally {
      setShowModal(false);
      reset();
    }
  };

  return (
    <>
      <IonGrid>
        <IonRow>
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton color="primary" fill="solid" onClick={() => setShowModal(true)}>
                Create Talk
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonRow>
      </IonGrid>
      <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Create Talk</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowModal(false)}>
                <IonIcon slot="icon-only" icon="close" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
            <IonList>
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <Controller
                  name="name"
                  as={IonInput}
                  maxlength={maxLength}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => selected.detail.value}
                  rules={validators}
                />
                {errors.name?.message}
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Description</IonLabel>
                <Controller
                  name="description"
                  as={IonInput}
                  maxlength={maxLength}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => selected.detail.value}
                  rules={validators}
                />
                {errors.name?.message}
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Speaker Name</IonLabel>
                <Controller
                  name="speakerName"
                  as={IonInput}
                  maxlength={maxLength}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => selected.detail.value}
                  rules={validators}
                />
                {errors.name?.message}
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Speaker Bio</IonLabel>
                <Controller
                  name="speakerBio"
                  as={IonInput}
                  maxlength={maxLength}
                  control={control}
                  onChangeName="onIonChange"
                  onChange={([selected]) => selected.detail.value}
                  rules={validators}
                />
                {errors.name?.message}
              </IonItem>
            </IonList>
          </form>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton color="medium" fill="outline" onClick={() => setShowModal(false)}>
                Cancel
              </IonButton>
              <IonButton
                color="primary"
                fill="solid"
                onClick={() => formRef.current?.dispatchEvent(new Event('submit', { cancelable: true }))}
              >
                Save Talk
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      </IonModal>
    </>
  );
};

export default CreateTalk;

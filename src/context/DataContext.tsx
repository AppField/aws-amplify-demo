import React, { useContext, createContext, useReducer } from 'react';
import { Dispatch } from 'react';
import Talk from '../models/talk';

export type DataType = string;

interface DataContextI {
  clientId: string;
  talks: Talk[];
}

const initialState: DataContextI = {
  clientId: '',
  talks: [],
};

export const DataContext = createContext<{
  state: DataContextI;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

type Action =
  | { type: Types.SetClientId; clientId: string }
  | { type: Types.ResetClientId }
  | { type: Types.SetTalks; talks: Talk[] }
  | { type: Types.AddTalk; talk: Talk }
  | { type: Types.UpdateTalk; talk: Talk }
  | { type: Types.RemoveTalk; talk: Talk };

enum Types {
  SetClientId = 'SET_CLIENT_ID',
  ResetClientId = 'RESET_CLIENT_ID',
  SetTalks = 'SET_TALKS',
  AddTalk = 'ADD_TALK',
  UpdateTalk = 'UPDATE_TALK',
  RemoveTalk = 'REMOVE_TALK',
}

function updateTalkHandler(state: DataContextI, talk: Talk): DataContextI {
  const updated = state.talks.map((t) => {
    if (t.id === talk.id) return talk;
    if (t.clientId === talk.clientId) return talk;
    return t;
  });
  return {
    ...state,
    talks: updated,
  };
}

function removeTalkHandler(state: DataContextI, talk: Talk): DataContextI {
  return {
    ...state,
    talks: state.talks.filter((t) => t.id !== talk.id),
  };
}

function reducer(state: DataContextI, action: Action) {
  switch (action.type) {
    case Types.SetClientId:
      return { ...state, clientId: action.clientId };
    case Types.ResetClientId:
      return { ...state, clientId: '' };
    case Types.SetTalks:
      return { ...state, talks: action.talks };
    case Types.AddTalk:
      return { ...state, talks: [...state.talks, action.talk] };
    case Types.UpdateTalk:
      return updateTalkHandler(state, action.talk);
    case Types.RemoveTalk:
      return removeTalkHandler(state, action.talk);
    default:
      return state;
  }
}

const useDataContext = (): { state: DataContextI; dispatch: Dispatch<any> } => {
  return useContext(DataContext);
};

const DataProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <DataContext.Provider value={{ state, dispatch }}>{children}</DataContext.Provider>;
};

export default DataProvider;
export { Types, useDataContext };

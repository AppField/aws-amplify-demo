import React, { useContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export type DataType = string;

interface AnnotateContextI {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}

const initialState: AnnotateContextI = {
  data: "Initial State",
  setData: (): void => {},
};

export const DataContext = React.createContext<AnnotateContextI>(initialState);

export const useDataContext = (): AnnotateContextI => {
  return useContext(DataContext);
};

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<DataType>("My State");

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;

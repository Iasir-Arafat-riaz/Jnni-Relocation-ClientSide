import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const ContexApi = createContext()

const ContextApiProvider = ({children}) => {
    const allData = useFirebase()
    return (
      <ContexApi.Provider value={allData}>
             {children}
      </ContexApi.Provider>
    );
};

export default ContextApiProvider;
import React, { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext()

const AuthProvide = ({ children }) => {
      const allcontext = useFirebase()
      return (
            <AuthContext.Provider value={allcontext}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvide;
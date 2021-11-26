import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useProducts from '../hooks/useProducts';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    const { products, setProducts } = useProducts();

    const data = {
        allContexts,
        products,
        setProducts
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { useState, useEffect } from 'react';
import firebaseInitialize from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile,  signOut, sendEmailVerification } from "firebase/auth";

//initialize firebase
firebaseInitialize();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
   
    const [admin, setAdmin] = useState(false);
    
    //global auth
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
   

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                saveUser(result.user.email, result.user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

   
    // get current logged in user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
   
    

    // create account & sign in with Email & Password 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
               
                
                const newUser = { email, displayName: name };
                setUser(newUser);
                
                // verfiy your email address 
                sendEmailVerification(auth.currentUser).then(() => {
                   alert(`Check email for verify your account  ${email}`);
                })
                    
                alert('user has been created');
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                setIsLoading(true);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                })
                        ;
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
     //login with email & pass
    const loginEmail = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                
                const destination = location?.state?.from || '/';
                history.replace(destination);
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    //sign out 
    const logOut = () => {
        signOut(auth).then((result) => {
            setUser({});
        }).catch((error) => {
            setAuthError(error.message);
        })
    }
    
    //save user information to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://aqueous-dusk-98125.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    //setAdmin
    useEffect(() => {
       
        fetch(`https://aqueous-dusk-98125.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
           
    }, [user.email])
     

    // reset error
    useEffect(() => {
        setTimeout(() => {
            setAuthError("");
        }, 3000);
    }, [authError]);




    return {
        user,
        isLoading,
        authError,
        signInWithGoogle,
        logOut,
        registerUser,
        loginEmail,
        admin

    };
};

export default useFirebase;
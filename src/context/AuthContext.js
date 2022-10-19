import { createContext, useState , useEffect, useContext} from "react";
import { Auth , DataStore } from "aws-amplify";
import { User } from "../models";

export const AuthContext = createContext({
    authUser:null,
    setAuthUser:() => {},
    dbUser:null,
    setDbUser:() => {},


})

 const AuthContextProvider = ({children}) => {
     const [authUser, setAuthUser] = useState(null);
     const [dbUser, setDbUser] = useState(null);
     const sub = authUser?.attributes?.sub;

     useEffect(() => {
         Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
     }, []);



     useEffect(() => {
         DataStore.query(User, (user) =>  user.sub('eq', sub)).then((users) => setDbUser(users[0]))
     }, [sub])
    //  const sub = authUser?.attributes?.sub
    const value ={
            authUser, dbUser , sub , setDbUser
    }

    return(
         <AuthContext.Provider value={value}>
          {children}
          
          </AuthContext.Provider>
         )
}

export default AuthContextProvider


export const useAuthContext = () => useContext(AuthContext)
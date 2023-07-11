import { createContext } from "react";


const UserContext = createContext({
    profile :{
        name : "Dummy Name",
        Email : "support.dev@gamil.com",
    }
});

export default UserContext;
import * as actionTypes from "./actionTypes";

export const signIn = (userId) => {
    return {
        type: actionTypes.SIGNED_IN,
        userId : userId
   }
}

export const signOut = () => {
    return {
        type: actionTypes.SIGNED_OUT,
    }
}


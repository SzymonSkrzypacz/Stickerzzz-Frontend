export const BAN_USER = 'BAN_USER';
export const GIVE_ADMIN = 'GIVE_ADMIN';
export const CHANGE_USER_DATA = 'CHANGE_USER_DATA';


export function banUser(userName) {
  return {
    type: 'BAN_USER',
    userName
  };
}

export function giveAdmin(userName) {
  return {
    type: 'GIVE_ADMIN',
    userName
  };
}

export function deleteUser(userName) {
  return {
    type: 'DELETE_USER',
    userName
  };
}

export function changeUserData(userName, data) {
  return {
    type: 'CHANGE_USER_DATA',
    userName,
    data,
  };
}




  

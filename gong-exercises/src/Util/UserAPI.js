import LocalStorageApi from "./LocalStorageApi";

export default class UserAPI {

    static signIn = (users, username, password) => {
        return new Promise((resolve, reject) => {
            try {
                if (users[username] !== undefined && users[username].password === password)
                    resolve(true);
                resolve(false);
            } catch (err) {
                reject(err);
            }
        })
    };
}
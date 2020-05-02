class LocalStorageApi {

    static setAsJson = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    static getJson = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };

    static getInt = (key) => {
        return parseInt(localStorage.getItem(key));
    };

    static setInt = (key, value) => {
        localStorage.setItem(key, Number(value).toString());
    }
}

export default LocalStorageApi;


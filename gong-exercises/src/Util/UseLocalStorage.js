import LocalStorageApi from "./LocalStorageApi";
import {useState} from "react";

function UseLocalStorage(key, type) {

    const get = () => type === Number ? LocalStorageApi.getInt(key): LocalStorageApi.getJson(key);
    const [obj, setObj] = useState(get);

    const set = val => {
        setObj(val);
        type === Number ? LocalStorageApi.setInt(key, val): LocalStorageApi.setAsJson(key, val);
    };

    return [obj, set];
}

export default UseLocalStorage;
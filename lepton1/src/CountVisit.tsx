import saveinfo from './saveinfo.json';
import { getDatabase } from "firebase/database";

const CountVisit = (count: any) => {
    const firebaseConfig = {
        databaseURL: "https://lepton-github-default-rtdb.asia-southeast1.firebasedatabase.app/",
    }
    const database = getDatabase();
    if (count === false) {
        return saveinfo.count
    }
    saveinfo.count = count;
    console.log(saveinfo.count);
    
    return saveinfo.count;
};

export default CountVisit;


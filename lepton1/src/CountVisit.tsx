import saveinfo from './saveinfo.json';
import saveAs from 'file-saver';

const CountVisit = (count: any) => {
    if (count === false) {
        return saveinfo.count
    }
    saveinfo.count = count;
    console.log(saveinfo.count);
    const blob = new Blob([JSON.stringify(saveinfo)], {type: "application/json"});
    saveAs(blob, "saveinfo.json");
    return saveinfo.count;
};

export default CountVisit;


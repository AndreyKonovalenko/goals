import dateFns from 'date-fns';

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

export const  checkValidity = (value, rules) => {
    let isValid = true;
    
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;

    }
        
    return isValid;
};

const startDayFormatParser = (startDate) => {
    console.log(startDate);
    const startDateArray = startDate.split('.');
    const parseredDay = new Date(+startDateArray[2], +startDateArray[1] - 1, +startDateArray[0]);
    return parseredDay;
}

export const daysArrayBuilder = (startDate, limitation) => {
    const start = startDayFormatParser(startDate);
    const lastDay = dateFns.addDays(start, limitation - 1);  
    let daysArray = dateFns.eachDay(start, lastDay);
    daysArray = daysArray.map(element => ({"id": dateFns.format(element, 'DD.MM.YYYY'), "success": null, "touched": false})); 
    return daysArray;
}; 

export const checkDaysArrayForUpdate = (daysArray, pickedDay) => {
    let result = null;
    daysArray.forEach(element => {
        if (element.id === pickedDay){
            console.log(daysArray.indexOf(element));
            result = daysArray.indexOf(element);
        }
    });
    return result;

};

export const isDayInDayArray = ( currentDay, daysArray ) => {
    let result = false;
    daysArray.forEach(element => {
        if( element.id === currentDay) {
            result = true;
        }
    });
    console.log(result);
    return result;
}
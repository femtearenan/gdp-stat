export const REQUEST_DATA = "REQUEST_DATA";
export const RESOLVED_GET_DATA = "RESOLVED_GET_DATA";
export const FAILED_GET_DATA = "FAILED_GET_DATA";

export const getGDPData = (dataType) => {

    return function (dispatch) {
        dispatch(requestData());

        return fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
            .then(response => response.json(), error => console.log('An error occured: ', error))
            .then(json => dispatch(resolvedGetData(dataType, json)));
    }
}

export const getRunTypeData = (dataType) => {

    return function (dispatch) {
        dispatch(requestData());

        return fetch('https://femtearenan.se/api/run_types.json')
            .then(response => response.json(), error => console.log('An error occured: ', error))
            .then(json => dispatch(resolvedGetData(dataType, json)));
    }
}

export const requestData = () => {
    return {
        type: REQUEST_DATA
    }
}

export const resolvedGetData = (dataType, json) => {
    return {
        type: RESOLVED_GET_DATA,
        dataType: dataType,
        payload: {
            data: json
        }
    }
}


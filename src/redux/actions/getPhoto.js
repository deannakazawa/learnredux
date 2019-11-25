import axios from "axios";

function getDataBegin() {
    return {
        type: "GET_DATA_BEGIN"
    };
}

function getDataSuccess(result) {
    return {
        type: "GET_DATA_SUCCESS",
        result
    };
}

function getDataFailed(error) {
    return {
        type: "GET_DATA_FAILED",
        error
    };
}

export function getData() {
    return function(dispatch) {
        dispatch(getDataBegin());

        axios
            .get("https://randomuser.me/api/?results=25")

        .then(result => {
                dispatch(getDataSuccess(result.data));
            })
            .catch(error => dispatch(getDataFailed(error.meesage)));
    };
}
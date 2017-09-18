/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */

"use strict";

/**
 * A URL PARSER
 * This function analyses an url.
 * Please refer to the "https://de.wikipedia.org/wiki/Uniform_Resource_Locator"
 */
function analyseUrl(pUrl) {
    let analyseResult = {
       schema: null,
        host: null,
        port: null,
        path: null,
        query: null,
        fragment:null
    }; // and other props.
    //...
    let array = pUrl.split("://");
    analyseResult.schema = array[0];


    if (array[1].indexOf(":") > -1) {
        analyseResult.host = array[1].slice(0, array[1].indexOf(":"));
    } else if (array[1].indexOf("/") > -1) {
        analyseResult.host = array[1].slice(0, array[1].indexOf("/"));
    } else if (array[1].indexOf("?") > -1) {
        analyseResult.host = array[1].slice(0, array[1].indexOf("?"));
    } else if (array[1].indexOf("#") > -1) {
        analyseResult.host = array[1].slice(0, array[1].indexOf("#"));
    } else {
        analyseResult.host = array[1]
    }
    if (array[1].indexOf(":") && array[1].indexOf("/") > -1) {

        analyseResult.port = array[1].slice(array[1].indexOf(":") + 1, array[1].indexOf("/"));
    } else {
        analyseResult.port = null;
    }
    if (array[1].indexOf("/") && array[1].indexOf("?") > -1) {
        analyseResult.path = array[1].slice(array[1].indexOf("/") + 1, array[1].indexOf("?"));
    } else {
        analyseResult.path = null;
    }
    if (array[1].indexOf("?") && array[1].indexOf("#") > -1) {
        analyseResult.query = array[1].slice(array[1].indexOf("?") + 1, array[1].indexOf("#"));
    } else {
        analyseResult.query = null;
    }
    if(array[1].indexOf("#") > -1){
    analyseResult.fragment=array[1].slice(array[1].indexOf("#")+1,array[1].length);
} else{
     analyseResult.fragment = null;
}
    return analyseResult;
}

////////////////////////////////
/**
 * This function creates an array of all possible letter combinations of a given word.
 *
 */
function populateWord(pString) {
    let result = [];

     let array = pString.split("");
    //...
    return result;
}

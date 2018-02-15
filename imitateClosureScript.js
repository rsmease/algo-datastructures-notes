// ;; We can use get-in for reaching into nested maps:
// user=> (def m {:username "sally"
//                :profile {:name "Sally Clojurian"
//                          :address {:city "Austin" :state "TX"}}})
// #'user/m

// user=> (get-in m [:profile :name])
// "Sally Clojurian"
// user=> (get-in m [:profile :address :city])
// "Austin"
// user=> (get-in m [:profile :address :zip-code])
// nil
// user=> (get-in m [:profile :address :zip-code] "no zip code!")
// "no zip code!"

const user = {
    "username": "sally",
    "profile": {
        "name": "Sally Clojurian",
        "address": {
            "city": "Austin",
            "state": "TX"
        }
    }
}

function getInRecursive(mapObject, keySequence, notFoundMessage = null) {
    const currentKey = keySequence[0];
    if (mapObject[currentKey]) {
        if (keySequence.length === 1) {
            return mapObject[currentKey];
        } else {
            return getInRecursive(mapObject[currentKey], keySequence.slice(1), notFoundMessage);
        }
    } else {
        return notFoundMessage;
    }
}

function getInIter(mapObject, keySequence, notFoundMessage = null) {
    for (let i = 0; i < keySequence.length; i++) {
        var currentKey = keySequence[i];
        if (mapObject[currentKey]) {
            mapObject = mapObject[currentKey];
        } else {
            return notFoundMessage;
        }
    }
    return mapObject
}

let res1 = getInIter(user, ["profile", "name"]);
let res2 = getInIter(user, ["profile", "address", "city"]);
let res3 = getInIter(user, ["profile", "address", "zip-code"]);
let res4 = getInIter(user, ["profile", "address", "zip-code"], "no zip code!");

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
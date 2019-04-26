//This resolves the O/1 knapsack problem using dynamic programming techniques
//If you are not facing an 0/1 situation (units may be devided), simply rank all items by their value relative to weight and then progress from most to least valuable by weight, finally splitting the remainder of the last item

//modelled on:
//https://gist.github.com/danwoods/7496329

function knapsackSolver(items, capacity) {
    let oldMax, newMax;
    const numberOfItems = items.length;
    const weightMatrix = new Array(numberOfItems + 1);
    const keepMatrix = new Array(numberOfItems + 1);
    const solution = [];

    for (let i = 0; i < numberOfItems + 1; i++) {
        weightMatrix[i] = new Array(capacity + 1);
        keepMatrix[i] = new Array(capacity + 1);
    }

    //O(number of items * weight)
    for (let item = 0; item <= numberOfItems; item++) {
        for (let weight = 0; weight <= capacity; weight++) {
            if (item === 0 || weight === 0) {
                weightMatrix[item][weight] = 0;
            } else if (items[item - 1].weight <= weight) {
                newMax = items[item - 1].value + weightMatrix[item - 1][weight - items[item - 1].weight];
                oldMax = weightMatrix[item - 1][weight];

                weightMatrix[item][weight] = (newMax > oldMax) ? newMax : oldMax;
                keepMatrix[item][weight] = (newMax > oldMax) ? 1 : 0;
            } else {
                weightMatrix[item][weight] = weightMatrix[item - 1][weight];
            }
        }
    }

    //O(number of items)
    currentWeight = capacity;
    for (let item = numberOfItems; item > 0; item--) {
        if (keepMatrix[item][currentWeight] === 1) {
            solution.push(items[item - 1]);
            currentWeight = currentWeight - items[item - 1].weight;
        }
    }

    return {
        'maximumValue': weightMatrix[numberOfItems][capacity],
        'items': solution
    };
}

let items = [{
        weight: 1,
        value: 5
    },
    {
        weight: 5,
        value: 10
    },
    {
        weight: 2,
        value: 6
    },
    {
        weight: 4,
        value: 8
    }
];

console.log(knapsackSolver(items, 6));
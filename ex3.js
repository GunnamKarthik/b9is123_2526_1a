let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let x of l) {
        if (x % a === 0 || x % b === 0) {
            sum += x;
        }
    }
    alert("Sum of multiples of a or b in list l: " + sum);
}

let listEuler2 = (a, l) => {
    let sum = 0;

    let x = a[0];
    let y = a[1];

    for (let n of l) {
        if (n % x === 0 || n % y === 0) {
            sum += n;
        }
    }

    alert("sum of multiples of elements in list a, found in list l: " + sum);
}

let listEuler3 = (a, l) => {
    let sum = 0;
    for (let x of a) {
        for (let n of l) {
            if (n % x === 0) {
                sum += n;
            }
        }
    }
    alert("sum of multiples of elements in list a, found in list l: " + sum);
};

let eulerlist = () => {
    let a = parseInt(document.getElementById('a1').value);
    let b = parseInt(document.getElementById('b1').value);
    let l = document.getElementById('l').value.split(" ").map((x => parseInt(x)));
    listEuler1(a, b, l);
};

let euler2Lists = () => {
    a = [2, 3]//can un-hardcode
    l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10]
    listEuler2(a, l);
};



let euler2Lists1 = () => {
    let a = document.getElementById('aList').value.split(" ").map((x => parseInt(x)));
    let l = document.getElementById('mList').value.split(" ").map((x => parseInt(x)));
    listEuler3(a, l);
}

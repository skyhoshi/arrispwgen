import {TABLE1, TABLE2, ALPHANUM} from './constants';

const modulus = ALPHANUM.length;

export function list1(date) {
    // Last two digits of the year
    let year = parseInt(date.getFullYear().toString(10).substr(2, 2), 10);

    // Number of the month. The month in a Date object is zero-indexed,
    // i.e., January == 0, so we add 1 to satisfy the algorithm.
    let month = date.getMonth() + 1;

    let day_of_month = date.getDate();

    // Day of the week. Normally 0 would be Sunday but we need it to be Monday.
    let day_of_week = date.getDay() - 1;
    if (day_of_week < 0) {
        day_of_week = 6;
    }

    let list1 = [];

    for (let i = 0; i <= 4; i++) {
        list1[i] = TABLE1[day_of_week][i];
    }

    list1[5] = day_of_month;

    if (((year + month) - day_of_month) < 0) {
        list1[6] = (((year + month) - day_of_month) + modulus) % modulus;
    } else {
        list1[6] = ((year + month) - day_of_month) % modulus;
    }

    list1[7] = (((3 + ((year + month) % 12)) * day_of_month) % 37) % modulus;

    return list1;
}

export function list2(seed) {
    let list2 = [];

    for (let i = 0; i <= 7; i++) {
        list2[i] = (seed.charCodeAt(i)) % modulus;
    }

    return list2;
}

export function num8(l3) {
    return l3[8] % 6;
}

export function list3(l1, l2) {
    let list3 = [];

    for (let i = 0; i <= 7; i++) {
        list3[i] = (((l1[i] + l2[i])) % modulus);
    }

    list3[8] = (list3.reduce((a, b) => { return a + b; }, 0)) % modulus;

    list3[9] = Math.round(Math.pow(num8(list3), 2));

    return list3;
}

export function list4(l3) {
    let list4 = [];

    for (let i = 0; i <= 9; i++) {
        list4[i] = l3[TABLE2[num8(l3)][i]];
    }

    return list4;
}

export function list5(seed, l4) {
    let list5 = [];

    for (let i = 0; i <= 9; i++) {
        list5[i] = (seed.charCodeAt(i) + l4[i]) % modulus;
    }

    return list5;
}

export function indexers(date, seed) {
    let l1 = list1(date);
    let l2 = list2(seed);
    let l3 = list3(l1, l2);
    let l4 = list4(l3);

    return list5(seed, l4);
}

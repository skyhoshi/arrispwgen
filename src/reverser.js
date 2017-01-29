import {ALPHANUM} from './constants';
//import {indexers} from './data';

// This gives us the result of list5() from data.js
export function reverse_indexers(password) {
    return password.split('').map(c => {
        return ALPHANUM.indexOf(c);
    });
}

export function reverse_modulus36(indexers) {
    return indexers.map(e => {
        if (e >= 12 && e <= 35) {
            return e + 36;
        } else if (e >= 0 && e <= 18) {
            return e + 72;
        }
    });
}

/**
 * list5[i] = (seed.charCodeAt(i) + l4[i]) % modulus;
 * or
 * A = (X + Y) % 36
 *
 * Possible values for A and Y:
 * 0 <= 35
 *
 * Possible values for X:
 * 48 <= X <= 57 || 65 <= X <= 90
 */
let x_values = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

export function reverse(password) {
    let list5 = reverse_indexers(password);
    let len = password.length;

    //console.log('list5: ', list5);
    //console.log('indexers: ', indexers(new Date(), 'MPSJKMDHAI'));

    //let found = false;
    let seed = {};

    list5.forEach(function (c) {
        console.log('Searching for "', c, '"');

        for (let y = 35; y >= 0; y--) {
            /*if (found) {
                found = false;
                break; // Move on to the next character.
            }*/

            x_values.reverse().forEach(function (x) {
                let test = (x + y) % 36;
                if (test == c) {
                    //found = true;
                    console.log('found x = ', x, ', y = ', y);
                    seed[String.fromCharCode(x)] = {};
                    //return false;
                }
            });
        }
    });

    return seed;
}

console.log(reverse('7776JZHJCZ'));

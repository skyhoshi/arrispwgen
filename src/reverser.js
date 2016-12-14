import {ALPHANUM} from './constants';

export function reverse_indexers(password) {
    return password.split().map(function (e) {
        return ALPHANUM.indexOf(e);
    });
}

export function reverse_modulus36(indexers) {
    return indexers.map(function (e) {
        if (e >= 12 && e <= 35) {
            return e + 36;
        } else if (e >= 0 && e <= 18) {
            return e + 72;
        }
    });
}

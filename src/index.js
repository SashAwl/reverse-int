module.exports = function reverse(n) {
    s = 0;
    n = Math.abs(n);
    while (n > 0) {
        s = s * 10 + n % 10;
        n = Math.trunc(n / 10);
    }
    return s;
}

'use strict';

module.exports = {

    // Function that tests if an array is Arithmetic
    function isArithmetic(arr) {
        let diff = arr[1] - arr[0];
        let arithm = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if ((arr[i+1] - arr[i]) !== diff) {
            arithm = false;
            }
        }
        return arithm;
    }

    // Function that tests if an array is Geometric
    function isGeometric (arr) {
        let ratio = arr[1]/arr[0];
        let geo = true;
        
        for (let j = 0; j < arr.length - 1; j++) {
            if ((arr[j+1]/arr[j]) !== ratio) {
            geo = false;
            } 
        }
        return geo;
    }

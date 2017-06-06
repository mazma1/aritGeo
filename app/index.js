'use strict';

module.exports = {

    aritGeo: (arr) => {

        let diff = arr[1] - arr[0];
        let ratio = arr[1] / arr[0];

        let arithm = true;
        let geo = true;

        if ((typeof arr === 'object') && (arr instanceof Array)) {
            for(let i = 0; i < arr.length - 1; i++) {
                if( arr[i + 1] - arr[i] !== diff ) {
                    arithm = false;
                }        
                if(arr[i + 1] / ratio !== arr[i]) {
                    geo = false;
                }        
            }

            if (arr.length == 0) {
                return 0;
            }
            else if(arithm === true) {
                return "Arithmetic";
            }        
            else if(geo === true) {
                return "Geometric";
            }      
            else {
                return -1;
            }
        } 
    }
        
}    
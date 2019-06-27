var _ = (function () {
    'use strict';

    // Private Methods -----------
    const private_methods;

// Array Helpers

// ---------------


// Math Helpers

// ---------------


// String Helpers

// ---------------


// Collection Helpers

// ---------------


// Date Helpers

// ---------------


// Object Helpers

// ---------------
// ---------------------------


    // Public, exposed methods ---
    const public_methods = {};
    
// Array Utilities

    /**
     * Returns and object split by true and false values defined by a condition
     * @param array the array we are splitting up
     * @param condition the condition we are checking
     * @returns {'true': trueValues, 'false': falseValues} 
     */
    public_methods.splitArrayBy = function (array, condition) {
        const trueArray = [];
        const falseArray = [];
        
        for(const key in array){
            const item = array[key];
            if(item === condition){
                trueArray.push(item);
            }
            else{
                falseArray.push(item);
            }
        }

        return {
            true: trueArray,
            false: falseArray
        };
    }   
// ---------------


// Math Utilities

// ---------------


// String Utilities

// ---------------


// Collection Utilities

// ---------------


// Date Utilities

// ---------------


// Object Utilities

// ---------------
// ---------------------------

    // Expose the public methods
    return public_methods;
})();
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
     * @param condition [Optional] the condition we are checking, defaults true
     * @returns {'true': trueValues, 'false': falseValues} 
     */
    public_methods.splitArrayBy = function (array, condition = true) {
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
    };

    /**
     * Add commas to a string of numbers how a number should look in US format
     * @param number the number we want to add commas to
     * @param dollarize [Optional] if we want to prepend a dollarsign to the return string, defaults false
     * @returns the string formatted correctly
     */
    public_methods.addCommasToNumber = function (number, dollarize = false) {
        
    };
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
function rightRotate(arr, n) {
    // If n is greater than the length of the array,
    // we can reduce it to the equivalent rotation within the array's length
    n = n % arr.length;

    // Make a copy of the array
    var copy = arr.slice();

    // Splice the last n elements from the copy
    var rotatedPart = copy.splice(-n);

    // Concatenate the rotated part to the beginning of the copy
    var result = rotatedPart.concat(copy);

    return result;
}

var arr = [1, 2, 3, 4, 5];
var n = 3; 
console.log(rightRotate(arr, n)); 
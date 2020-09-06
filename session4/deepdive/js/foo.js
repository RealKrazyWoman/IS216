function foo(n1, n2) {
    // If first number is between 5 and 9 (both inclusive)
    // add 10 to the first number
    if( n1 >= 11 && n1 <= 15 ) {
        n1 += 10; // num1 = num1 + 10;
    }

    // If second number is even
    // multiply the second number by 2
    if( (n2 % 2) == 0 ) {
        n2 *= 2; // num2 = num2 * 2;
    }

    var return_value = n1 * n2; // arithmetic multiplication

    return return_value;
}
import { array } from "fast-check";

/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]

Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
};
// filter((value of key, index)

// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sentence_1, sentence_2) {
    let new_list = [];
    let list_1 = sentence_1.split(' ');
    let list_2 = sentence_2.split(' ');
    if (list_1.length === list_2.length){
        list_1.forEach(function(item, index){
            new_list.push(item);
            new_list.push(list_2[index]);
    });
}
    else {throw 'ValueError'};
    return new_list
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (string) {
    let sentence = string.split("");
    let lowercase_string = sentence.filter( letter => letter.toLowerCase() === letter);
    return lowercase_string.length;
};


// Objects (Dictionary in python)

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (object) {
    let max = Object.keys(object)
    let max_1 = max.reduce(function (previous, current){
        if (previous.length > current.length) return previous;
        else return current })
return max_1
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (value) {
    let even = Object.keys(value)
    let even_1 = even_1.filter()
    let even_2 = even.reduce(function (previous, current){
        if (previous )
        (previous % 2 === 0 > current % 2 === 0) return previous;
        else return current })
    return even_2
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function () {
    return;
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function () {
    return;
};

export default Object.freeze(Exam);

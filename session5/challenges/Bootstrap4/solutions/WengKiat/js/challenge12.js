// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU

console.log('abc');

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    // YOUR CODE GOES HERE
    var input = parseInt(prompt('Enter word length (words longer than this length will be highlighted for you)'));

    var pTag = document.getElementById('book_chapter').getElementsByTagName('p');

    for ( var paragraph of pTag) {
        var text = paragraph.innerText.split(" ");
        var output = ''
        for ( var word of text) {
            if ( word.length >= input) {
                output += `<span style= "background-color:yellow;">${word}</span> `;
            } else {
                output += `${word} `;
            }
        }

        paragraph.innerHTML = output;
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    // YOUR CODE GOES HERE
    var pTag = document.getElementById('book_chapter').getElementsByTagName('p');
    var spanTag = document.getElementById('book_chapter').getElementsByTagName('span');
    var spanCounter = 0;

    for ( var paragraph of pTag) {
        if (spanTag[spanCounter].innerText.indexOf('words') > 0) {
            spanTag[spanCounter].innerHTML = '';
            spanCounter++;
            continue;
        }
        var counter = paragraph.innerText.split(" ").length;
        spanTag[spanCounter].innerHTML = `<b>(${counter} words)</b>`;
        spanCounter++;
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    // YOUR CODE GOES HERE
    var pTag = document.getElementById('book_chapter').getElementsByTagName('p');

    for ( var paragraph of pTag) {
        var text = paragraph.innerText;
        if (text.indexOf('⭐') > 0 || text.indexOf('❗') > 0 || text.indexOf('❓') > 0) {
            let output = [];
            for (const word of text) {
                if(word === '⭐') {
                    output.push(',');
                } else if (word === '❓') {
                    output.push('?')
                } else if (word === '❗') {
                    output.push('!')
                } else {
                    output.push(word);
                }
            }
            paragraph.innerHTML = output.join('');;
            continue;
        }
        var output = '';
        output = text.replace(/\,/g, '&#11088;');
        output = output.replace(/\?/g, '&#10067;');
        output = output.replace(/\!/g, '&#10071;');

        paragraph.innerHTML = output;
    }
}
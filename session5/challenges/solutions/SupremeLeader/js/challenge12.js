// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    // Check if this button has been pressed before
    if( document.getElementById("button_pressed1") ) {
        // This button has been pressed before
        // Clear highlights
        var paras = document.querySelectorAll('#book_chapter p');

        paras.forEach( function(para) {

            if( para.getElementsByTagName("span") ) {
                // This para has <span> inside
                // Remove <span>
                //console.log(para.innerHTML);

                para.innerHTML = para.innerHTML
                .replaceAll(`<span style="background-color: yellow">`, "").replace("</span>", "");

                //console.log("======================\n" + para.innerHTML);
            }

        });

        // Reset button innerHTML (remove <span>)
        var button = (document.getElementsByTagName("button"))[0];
        button.innerHTML = "Highlight Words";
    }
    else {
        var word_length = prompt("Enter word length (words longer than this length will be highlighted for you)");

        var paras = document.querySelectorAll('#book_chapter p');

        paras.forEach( function(para) {

            para.innerHTML = para.innerText
                .split(' ')
                .map(word => word.length > Number(word_length) ? `<span style="background-color: yellow">${word}</span>` : word)
                .join(' ');
        });

        // Insert <span id="button_pressed1"></span>
        // under this <button> element
        var button = (document.getElementsByTagName("button"))[0];
        //console.log(button);
        button.innerHTML = button.innerText + `<span id="button_pressed1"></span>`;
    }

    
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {

    var paras = document.querySelectorAll('#book_chapter p');

    paras.forEach( function(para) {

        // Check if this button has been pressed before
        if( para.parentElement.children[0].innerText == "" ) {
            // <span></span> no text inside

            let num_words = para.innerText.split(' ').length;

            //console.log(para.parentElement.children[0]);
            para.parentElement.children[0].innerHTML = `<strong>(${num_words} words)</strong>`;
        }
        else {
            // <span> num words inside here </span>
            // Remove the text inside
            para.parentElement.children[0].innerHTML = "";
        }
        
    });
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {

    var paras = document.querySelectorAll('#book_chapter p');

    paras.forEach( function(para) {

        // Check if para contains any of these 3 emoticons
        // If so, replace them with corresponding text
        if( para.innerHTML.includes("⭐") || para.innerHTML.includes("❓") || para.innerHTML.includes("❗") ) {
            //console.log(para.innerHTML);
            para.innerHTML = para.innerHTML
            .replaceAll(" ⭐", ",")
            .replaceAll(" ❓", "?")
            .replaceAll(" ❗", "!");
        }
        else {
            para.innerHTML = para.innerHTML
                .replace(/\,/g, ' &#11088')
                .replace(/\?/g, ' &#10067')
                .replace(/\!/g, ' &#10071');
        }
    });
}
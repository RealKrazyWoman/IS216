// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU

function isValid(x) {
    return !isNaN(x);

}


var highlight_status = false;
var showword_status = false;
var emo_click_status = false;
var emo_orig_data = [];

// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {

    if (highlight_status) {
        let list = document.getElementsByClassName("list-unstyled");

        for (let i = 0; i < list.length; i++) {
            let para = list[i].getElementsByTagName("p")[0].innerText;
            let words = para.split(" ");
            let output = [];

            for (word of words) {
                output.push(word);
            }
            // console.log(output);

            list[i].getElementsByTagName("p")[0].innerHTML = output.join(" ");
        }
        highlight_status = !highlight_status;
        return;
    }

    var input = parseInt(prompt("enter word length"));
    while (!isValid(input)) {
        input = parseInt(prompt("Please enter a valid word length in number"));
    }

    var list = document.getElementsByClassName("list-unstyled");
    for (let i = 0; i < list.length; i++) {
        let para = list[i].getElementsByTagName("p")[0].innerText;
        let words = para.split(" ");
        let output = [];

        for (word of words) {
            // console.log(word, word.length);
            if (word.length >= input) {
                output.push("<span class='bg-warning'>" + word + "</span>");
            } else {
                output.push(word);
            }
        }
        // console.log(output);

        list[i].getElementsByTagName("p")[0].innerHTML = output.join(" ");
    }
    highlight_status = !highlight_status;
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {
    var list = document.getElementsByClassName("list-unstyled");
    if (showword_status) {
        for (let i = 0; i < list.length; i++) {
            list[i].getElementsByTagName("span")[0].innerHTML = "";
        }
        showword_status = !showword_status;
        return;
    }

    for (let i = 0; i < list.length; i++) {
        let para = list[i].getElementsByTagName("p")[0].innerText;
        let len = para.split(" ").length;
        list[i].getElementsByTagName("span")[0].innerHTML = "<span class='font-weight-bold'>{" + len + " words}</span>";
    }
    showword_status = !showword_status;
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {
    var list = document.getElementsByClassName("list-unstyled");

    if (emo_click_status) {
        console.log(emo_orig_data);
        for (let i = 0; i < list.length; i++) {
            list[i].getElementsByTagName("p")[0].innerHTML = emo_orig_data[i];
        }
        emo_click_status = !emo_click_status;
        return;
    }

    var emoji = {
        ",": "&#11088;",
        "?": "&#10067;",
        "!": "&#10071;"
    };

    for (let i = 0; i < list.length; i++) {
        let para = list[i].getElementsByTagName("p")[0].innerText;
        if (!emo_click_status) {
            emo_orig_data.push(para);
        }
        para = para.replace(/,/g, emoji[","]);
        para = para.replace(/\?/g, emoji["?"]);
        para = para.replace(/!/g, emoji["!"]);
        // console.log(para);
        list[i].getElementsByTagName("p")[0].innerHTML = para;

    }

    emo_click_status = !emo_click_status;
    // console.log(emo_click_status);
}
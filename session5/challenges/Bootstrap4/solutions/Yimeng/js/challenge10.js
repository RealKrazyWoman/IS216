//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];


// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE

    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)


    var male_or_female = Math.round(Math.random());

    console.log(male_or_female);

    if (male_or_female == 0){
        show_male_stars();

        var get_element_button = document.getElementById("male_button");
        get_element_button.disabled = true;

    }
    else{

        show_female_stars();

        var get_element_button = document.getElementById("female_button");
        get_element_button.disabled = true;
    }


}



// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

    // YOUR CODE GOES HERE

    var male_star_list = stars_dataset[0];
    console.log(male_star_list);
    var counter = 0;
   
    for (var name in male_star_list){
        counter++;

        console.log("#################")
        console.log(name);

        //console.log(male_star_list[name]);

        var male_star_img = male_star_list[name][0];
        var male_star_msg = male_star_list[name][1];
        var male_star_wiki = male_star_list[name][2];

        console.log(male_star_img);
        console.log(male_star_msg);
        console.log(male_star_wiki);

        // Update the menu bar data
        var get_element = document.getElementById("wiki" + counter)
        get_element.innerText = name;
        get_element.href = male_star_wiki

        // Update the images and messages
        var get_element_carousel = document.getElementById("image" + counter)
        get_element_carousel.src = "images/" + male_star_img;

        var get_element_h2_msg = document.getElementById("slide_heading" + counter)
        get_element_h2_msg.innerText = name;

        var get_element_slide_title = document.getElementById("slide_title" + counter)
        get_element_slide_title.innerText = male_star_msg;

    }

    var get_element_button = document.getElementById("male_button");
    get_element_button.disabled = true;
    var get_element_button = document.getElementById("female_button");
    get_element_button.disabled = false;

}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE

    var female_star_list = stars_dataset[1];
    console.log(female_star_list);
    var counter = 0;
   
    for (var name in female_star_list){
        counter++;

        console.log("#################")
        console.log(name);

        //console.log(male_star_list[name]);

        var female_star_img = female_star_list[name][0];
        var female_star_msg = female_star_list[name][1];
        var female_star_wiki = female_star_list[name][2];

        console.log(female_star_img);
        console.log(female_star_msg);
        console.log(female_star_wiki);

        // Update the menu bar data
        var get_element = document.getElementById("wiki" + counter)
        get_element.innerText = name;
        get_element.href = female_star_wiki

        // Update the images and messages
        var get_element_carousel = document.getElementById("image" + counter)
        get_element_carousel.src = "images/" + female_star_img;

        var get_element_h2_msg = document.getElementById("slide_heading" + counter)
        get_element_h2_msg.innerText = name;

        var get_element_slide_title = document.getElementById("slide_title" + counter)
        get_element_slide_title.innerText = female_star_msg;


    }

    var get_element_button = document.getElementById("female_button");
    get_element_button.disabled = true;
    var get_element_button = document.getElementById("male_button");
    get_element_button.disabled = false;
}
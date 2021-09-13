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


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // Randomly determine male or female
    var gender_index = 0; // male
    if( Math.random() < 0.5 ) {
        gender_index = 1; // female
    }

    // Call display_by_gender(gender_index) function
    display_by_gender(gender_index);
}


// gender_index: valid values are
//      0 ("male")
//      1 ("female")
function display_by_gender(gender_index) {

    // Retrieve star data
    var star_object = stars_dataset[gender_index];
    console.log(star_object);
 
    var count = 1;
    for( var star_array of Object.entries(star_object) ) {

        console.log("======================================");
        console.log(star_array);

        // Retrieve info
        let name = star_array[0];
        let image_src = "images/" + star_array[1][0];
        let quote = star_array[1][1];
        let wiki_url = star_array[1][2];

        console.log(name);
        console.log(image_src);
        console.log(quote);
        console.log(wiki_url);

        // Retrieve img
        // 1) Update src
        // 2) Update alt
        document.getElementById("image" + count).setAttribute("src", image_src);
        document.getElementById("image" + count).setAttribute("alt", name);

        // Retrieve carousel slide
        // 1) Update slide_heading
        // 2) Update slide_title
        document.getElementById("slide_heading" + count).innerText = name;
        document.getElementById("slide_title" + count).innerText = quote;

        // Retrieve wiki links <a> tags
        // 1) Update URL
        // 2) Update link text
        document.getElementById("wiki" + count).setAttribute("href", wiki_url);
        document.getElementById("wiki" + count).innerText = name;

        // Disable the other gender button
        // Enable the current gender button
        if( gender_index == 0 ) {
            // current gender is male
            document.getElementById("male_button").disabled = true;
            document.getElementById("female_button").disabled = false;
        }
        else {
            // current gender is female
            document.getElementById("male_button").disabled = false;
            document.getElementById("female_button").disabled = true;
        }

        count++;
    }
}

function show_male_stars() {
    display_by_gender(0);
}

function show_female_stars() {
    display_by_gender(1);
}
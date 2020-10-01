// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // Make a call to http://krazywoman.com/krazystars/api/star/search.php?g=m   (or f for female)

    // Randomly determine male or female
    var gender = 'm'; // male
    if( Math.random() < 0.5 ) {
        gender = 'f'; // female
    }

    // Call display_by_gender(gender_index) function
    //display_by_gender(gender_index);

    // Call API and get star data
    call_api('', gender);
    process_buttons(gender);
}


// Active/Disable buttons
function process_buttons(gender) {
    // Disable the other gender button
    // Enable the current gender button
    if( gender == 'm' ) {
        // current gender is male
        document.getElementById("male_button").disabled = true;
        document.getElementById("female_button").disabled = false;
    }
    else {
        // current gender is female
        document.getElementById("male_button").disabled = false;
        document.getElementById("female_button").disabled = true;
        console.log("Hello");
    }
}


function call_api(name, gender) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if( this.readyState == 4 && this.status == 200 ) {
            //document.getElementById("api_call_result").innerHTML = this.responseText;
            extract_display_data(this); // This is called only after API returns a result
        }

    }; // End-of-function

    var url = 'http://krazywoman.com/krazystars/api/star/';

    if (!name && !gender ) {
        url += "read.php";
    }
    else if( !name && gender ) {
        // Gender only
        url += "search.php?g=" + gender;
    }
    else if( name && !gender ) {
        url += "search.php?n=" + encodeURI(name);
    }
    else {
        // Name and Gender
        url += "search.php?n=" + encodeURI(name) + "&g=" + gender;
    }

    console.log(url);

    request.open("GET", url, true);
    request.send();
}


function extract_display_data(xml) {
    //console.log(xml.responseText);
    var output = JSON.parse(xml.responseText);
    //console.log(ouptut);

    var wiki_links_str = '';
    var imdb_links_str = '';
    var slide_show_str = '';

    var records = output.records;
    console.log(records);
    counter = 1;
    for(record of records) {
        console.log(record.fullname);

        // wiki_links
        wiki_links_str += `
            <a id="wiki${counter}" class="dropdown-item" href="${record.wikipedia_url}" target="_blank">${record.fullname}</a>
        `;

        // imdb_links
        imdb_links_str += `
            <a id="imdb${counter}" class="dropdown-item" href="${record.imdb_url}" target="_blank">${record.fullname}</a>
        `;

        var active = " active";
        if( counter > 1 ) {
            active = "";
        }
        // slide_show
        slide_show_str += `
            <div class="carousel-item${active}">
                <img id="image${counter}" src="${record.photo_background_url}" alt="${record.fullname}">
                <div class="carousel-caption">
                    <h2 class="star_h${counter}" id="slide_heading${counter}" style="padding: 5px; background-color: grey; color: white">${record.fullname}</h2>
                    <p id="slide_title${counter}" style="padding: 5px; background-color: black; color: white">${record.quote}</p>
                </div>
            </div>
        `;

        counter++;
    }

    // wiki_links
    // <a id="wiki1" class="dropdown-item" href="https://en.wikipedia.org/wiki/Solar_System" target="_blank">Default Wiki Page</a>

    // imdb_links
    // <a id="imdb1" class="dropdown-item" href="https://en.wikipedia.org/wiki/Solar_System" target="_blank">Default IMDB Page</a>

    // slide_show
    /*
        <div class="carousel-item active">
            <img id="image1" src="images/sm_bg_default1.jpg" alt="">
            <div class="carousel-caption">
                <h2 class="star_h2" id="slide_heading1">Nothing here</h2>
                <p id="slide_title1">Nothing here</p>
            </div>
        </div>
    */

    document.getElementById("wiki_links").innerHTML = wiki_links_str;
    document.getElementById("imdb_links").innerHTML = imdb_links_str;
    document.getElementById("slide_show").innerHTML = slide_show_str;
}

function show_male_stars() {
    // Call API and get star data
    var gender = 'm';
    call_api('', gender);
    process_buttons(gender);
}

function show_female_stars() {
    // Call API and get star data
    var gender = 'f';
    call_api('', gender);
    process_buttons(gender);
}
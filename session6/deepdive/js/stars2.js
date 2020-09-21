function call_api(gender) {
    // Step 1
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    // Step 2
    request.onreadystatechange = function() {

        if( this.readyState == 4 && this.status == 200 ) {
            
            // Step 5
            // call div2 function
            extract_display_div2(this);

            // call div1 function
            extract_display_div1(this);           
        }

    }

    // Step 3

    var url = '';

    if( gender == 'all' ) {
        url = "http://krazywoman.com/krazystars/api/star/read.php"; // all stars
    }
    else {
        url = "http://krazywoman.com/krazystars/api/star/search.php?g=" + gender; // 'm' or 'f'
    }

    console.log(url);
    
    request.open("GET", url, true);

    // Step 4
    request.send();
}


function get_all_stars() {
    call_api('all');
}


function get_male_stars() {
    call_api('m');
}

function get_female_stars() {
    call_api('f');
}


function extract_display_div2(xml) {
    //======== 2nd div ========
    // JSON + render as HTML tags
    // JSON object containing "records" and "info"
    var response_json = JSON.parse(xml.responseText);

    // Array of Star objects
    var star_array = response_json.records; // Array

    var str = '';
    for(var star_object of star_array) {
        //console.log(star_object);

        str += `
            <div class="container" style="background-color: yellow; margin: 10px">
                <h3>${star_object.fullname}</h3>
                
                <img src="${star_object.photo_profile_url}">
                
                <p>
                    ${star_object.quote}
                </p>

                <ul>
                    <li><a href="${star_object.wikipedia_url}" target="_blank">Wikipedia Page</a></li>
                    <li><a href="${star_object.imdb_url}" target="_blank">IMDB Page</a></li>
                    <li><a href="${star_object.photo_background_url}" target="_blank">Photo Background Image</a></li>
                </ul>
            </div>
        `;
        
    }

    document.getElementById("api_response_records_div").innerHTML = str;
}


function extract_display_div1(xml) {
    //======== 1st div ========
    // JSON object containing "records" and "info"
    var response_json = JSON.parse(xml.responseText);

    // Array of Star objects
    var star_array = response_json.records; // Array

    var info = response_json.info;

    var str2 = `
        <p>
            <b>Author</b>: ${info.author}
        </p>

        <p>
            <b>Datetime (SG)</b>: ${info.response_datetime_singapore}
        </p>
    `;

    document.getElementById("api_response_info_div").innerHTML = str2;
}
function get_all_stars() {

    // Step 1 - Create a new Request
    var request = new XMLHttpRequest(); // Prep to make an HTTP request

    // Step 2 - Register a function with the Request
    // This function is called 4 times!
    /*
    Ref: https://www.w3schools.com/js/js_ajax_http_response.asp

    readyState
        Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready

    status
        200: "OK"
        403: "Forbidden"
        404: "Page not found"
    */
    request.onreadystatechange = function() {

        // Step 5 - Check if response is ready!
        if( this.readyState == 4 && this.status == 200 ) {
            
            // Convert responseText to JSON
            var response_json = JSON.parse(this.responseText);
            document.getElementById("api_response_text").innerHTML = response_json.info.author;

            // Retrieve records (there are 20 items inside)
            var star_array = response_json.records; // Array
            

            // <p id="api_response_records_list"> innerHTML to 20 lists
            // 1 list per star (there are 20 of them)
            var str = '';
            for(var star_object of star_array) {
                console.log(star_object);

                // HTML list <ul></ul>
                str += `
                    <ul>
                `;

                // Loop through the object (star_object), retrieve key/value
                for( var [key, value] of Object.entries(star_object) ) {
                    str += `
                        <li>
                            <b>${key}</b>: ${value}
                        </li>
                    `;
                }

                str += `
                    </ul>
                `;

            }
            // 2nd <div>'s <p>
            document.getElementById("api_response_records_list").innerHTML = str;


            // 3rd <div>
            // JSON + render as HTML tags
            str = '';
            for(var star_object of star_array) {
                console.log(star_object);

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
    }

    // Step 3
    // Specify method: GET for retrieval
    // 3rd argument
    //      true (asynchronous) or false (synchronous)
    // We want "asynchronous"
    // --> the user's web browser doesn't need to reload the entire page 
    //     when only a small bit of data on the page has changed
    var url = "http://krazywoman.com/krazystars/api/star/read.php";
    request.open("GET", url, true);

    // Step 4
    // Haha! We haven't called the API endpoint yet
    // We will now
    request.send();
}
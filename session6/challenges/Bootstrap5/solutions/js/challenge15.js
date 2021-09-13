const YOUTUBE_API_KEY = '';

// When the webpage loads
// Display all heroes
function display_default() {
    call_krazymlbb_api('all');
}


// Call YouTube API
// Ref: https://medium.com/@cmurphy580/a-quick-walkthrough-of-the-youtube-api-javascript-4f0b0a13f988
function call_youtube_api(hero_name) {

    var search_term = encodeURI("mlbb " + hero_name + " gameplay");
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${search_term}&key=${YOUTUBE_API_KEY}`;

    //fetch function following the aforementioned process
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.items[0].id.videoId);
        //console.log above is to help access proper data in the JSON
        //object
        //set iframe source to proper URL (notice same dynamic strings 
        //used above)
        document.getElementById("iframe_" + hero_name).setAttribute("src", `https://www.youtube.com/embed/${data.items[0].id.videoId}`);
    });
}


// Call KrazyMLBB API
function call_krazymlbb_api(hero_class) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if( this.readyState == 4 && this.status == 200 ) {
            //document.getElementById("api_call_result").innerHTML = this.responseText;
            extract_display_data(this); // This is called only after API returns a result
            //console.log(this.responseText);
        }

    }; // End-of-function

    var url = 'http://krazywoman.com/krazymlbb/api/hero/';

    if( hero_class == 'all' ) {
        url += "read.php"; // retrieve ALL heroes
    }
    else {
        url += "search.php?c=" + hero_class;
    }

    console.log(url);

    request.open("GET", url, true);
    request.send();
}


function show_heroes(hero_class) {
    call_krazymlbb_api(hero_class);
}


function extract_display_data(xml) {
    //console.log(xml.responseText);
    var output = JSON.parse(xml.responseText);
    //console.log(output);

    var hero_cards_str = '';

    var records = output.records;
    
    counter = 1;
    for(record of records) {
        console.log(record.name);

        hero_cards_str += `
            <div class="card mb-3 mx-auto">
                <div class="row no-gutters">
                    <div class="col-md-3">
                        <img src="${record.img_profile_url}" class="card-img" width="100%" alt="${record.name}">
                    </div>
                    <div class="col-md-9">
                        <!-- Hero -->
                        <div class="card-body">
                            <h5 class="card-title">${record.name}</h5>

                            
                            <!-- YouTube Model -->
                            <p>
                                <span class="badge rounded-pill bg-secondary" data-bs-toggle="modal" 
                                    data-bs-target="#youtube_modal${counter}" onClick="call_youtube_api('${record.name}')">YouTube Videos</span>
                            </p>

                            
                            <div class="modal" id="youtube_modal${counter}">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">

                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">${record.name} Gameplay</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal">&times;</button>
                                        </div>
                                        
                                        <!-- Modal body -->
                                        <div class="modal-body mx-auto">
                                            <iframe id="iframe_${record.name}" width="560" height="315" src="" frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                                                                
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- YouTube Modal Ends Here -->


                            <p class="card-text">${record.description}</p>
                            
                            <p class="text-center">
                                <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                    Battlepoint Cost <span class="badge bg-light text-dark">${record.purchase.battlepoint_cost}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                    Diamond Cost <span class="badge bg-light text-dark">${record.purchase.diamond_cost}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Movement Speed <span class="badge bg-light text-dark">${record.stats.movement_speed}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Physical Attack <span class="badge bg-light text-dark">${record.stats.physical_attack}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Physical Defense <span class="badge bg-light text-dark">${record.stats.physical_defense}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Magic Power <span class="badge bg-light text-dark">${record.stats.magic_power}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Armor <span class="badge bg-light text-dark">${record.stats.armor}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Magic Resistance <span class="badge bg-light text-dark">${record.stats.magic_resistance}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    HP <span class="badge bg-light text-dark">${record.stats.hp}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Mana <span class="badge bg-light text-dark">${record.stats.mana}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Attack Speed <span class="badge bg-light text-dark">${record.stats.attack_speed}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    HP Regen Rate <span class="badge bg-light text-dark">${record.stats.hp_regen_rate}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Mana Regen Rate <span class="badge bg-light text-dark">${record.stats.mana_regen_rate}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                    Class <span class="badge bg-light text-dark">${record.class}</span>
                                </button>

                            </p>
                        </div> <!-- end of card-body -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of card (one hero) -->
        `;

        counter++;
    }

    document.getElementById("hero_cards").innerHTML = hero_cards_str;
}
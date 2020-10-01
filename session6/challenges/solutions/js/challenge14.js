// When the webpage loads
// Display all heroes
function display_default() {
    call_api('all');
}

function call_api(hero_class) {
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
    call_api(hero_class);
}


function extract_display_data(xml) {
    //console.log(xml.responseText);
    var output = JSON.parse(xml.responseText);
    //console.log(output);

    var hero_cards_str = '';

    var records = output.records;
    
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

                            <p class="card-text">${record.description}</p>
                            
                            <p class="text-center">
                                <button type="button" class="btn mb-1" style="background-color:#ff7002; color: white; width: 220px">
                                    Battlepoint Cost <span class="badge badge-light">${record.purchase.battlepoint_cost}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#1326ff; color: white; width: 220px">
                                    Diamond Cost <span class="badge badge-light">${record.purchase.diamond_cost}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Movement Speed <span class="badge badge-light">${record.stats.movement_speed}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Physical Attack <span class="badge badge-light">${record.stats.physical_attack}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Physical Defense <span class="badge badge-light">${record.stats.physical_defense}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Magic Power <span class="badge badge-light">${record.stats.magic_power}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Armor <span class="badge badge-light">${record.stats.armor}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Magic Resistance <span class="badge badge-light">${record.stats.magic_resistance}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    HP <span class="badge badge-light">${record.stats.hp}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Mana <span class="badge badge-light">${record.stats.mana}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Attack Speed <span class="badge badge-light">${record.stats.attack_speed}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    HP Regen Rate <span class="badge badge-light">${record.stats.hp_regen_rate}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#03f433; width: 220px">
                                    Mana Regen Rate <span class="badge badge-light">${record.stats.mana_regen_rate}</span>
                                </button>

                                <button type="button" class="btn mb-1" style="background-color:#3e3b3a; color: white; width: 220px">
                                    Class <span class="badge badge-light">${record.class}</span>
                                </button>

                            </p>
                        </div> <!-- end of card-body -->
                    </div> <!-- end of col -->
                </div> <!-- end of row -->
            </div> <!-- end of card (one hero) -->
        `;
    }

    document.getElementById("hero_cards").innerHTML = hero_cards_str;
}
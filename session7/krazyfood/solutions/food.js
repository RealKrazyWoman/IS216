function do_things() {

    // 1. Order Food
    console.log("[do_things()] order food");
    order_food();
    // UNTIL order_food is DONE

    // wait ah... for food to come

    // 2. Do Laundry
    console.log("[do_things()] do laundry");
    do_laundry();
}

// Sleep function (milliseconds), e.g. 3000 is 3 seconds
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function do_laundry() {

    console.log("[do_laundry()] I'm gonna do laundry now... wait ah...");

    // Do laundry (4 seconds)
    sleep(4000); // ms

    // <div class="container" id="laundry_status"
    // Done with laundry
    document.getElementById("laundry_status").innerText = "Done with laundry";

    console.log("[do_laundry()] Phew... I'm done with laundry");

}

function order_food() {

    //console.log("[order_food()] I'm inside");

    // Step 1
    var request = new XMLHttpRequest(); // Prep to make an API call

    // Step 2
    request.onreadystatechange = function() {

        // Check whether a response came back from KrazyFood API
        if( this.readyState == 4 && this.status == 200 ) {
            // Wahh we have food from API
            // Do other things
            // Verify the response
            console.log(this.responseText);
            console.log("=================================");
            console.log("Done with processing response");

            // <div class="container" id="order_status"
            // Display food, chef, delivery_datetime

            var obj = JSON.parse(this.responseText); // JS JSON object

            // mala cooked by Gordon Ramsay arrived at ...
            var msg = obj.name + " cooked by " + obj.chef + " delivered at " + obj.delivery_datetime;

            document.getElementById("order_status").innerText = msg;

        }

    }

    // Step 3
    // var zx = document.getElementById("food_item_name").value;
    // console.log(zx);
    // return;

    // What is the data type of zx?
    var food_item_name = document.getElementById("food_item_name").value;

    var url = "http://localhost/krazyfood/api/food/order.php?f=" + food_item_name;
    // console.log(url);
    // return;

    request.open("GET", url, false); // synchronous

    // Step 4
    request.send();
}
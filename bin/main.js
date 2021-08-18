//#region is even and odd
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(num) {
    if (num % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

//#endregion

//#region 3 x + 1 rules
function odd(num) {
    return num * 3 + 1
}

function even(num) {
    return num / 2
}
//#endregion

/**
 * 
 * @param {max number to choose from starting from 0} max 
 * @returns random number chosen 
 */
function random(max) {
    return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

// refresh the html document
function refresh() {
    setTimeout(function () {
        location.reload()
    }, 100);
}

/**
 * 
 * @param {num to turn to interget} NUM 
 * @returns NUM as interger
 */
function toInt(NUM) {
    return parseInt(NUM);
}

var ctx = document.getElementById('myChart').getContext('2d'); // where it's displayed

var Data = [] // storing the data to be used in the chart

var max_color = 255; // choosing random colors everytime the page reloads

// returning the information stored the Data array
function getData() {
    try {
        for (var i = 0; i < Data.length; i++) {
            return parseInt(data[i]); // returning the data
        }
    } catch (error) {
        console.log(`Error getting data: ${error}`);
    }
}

try {
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            // labels: [num], // changes the more the longer it is
            datasets: [{
                label: '3 x + 1',
                data: [
                    getData()
                ],
                backgroundColor: [
                    `rgba(${random(max_color)}, ${random(max_color)}, ${random(max_color)}, ${random(max_color)})`,
                ],
                borderColor: [
                    `rgba(${random(max_color)}, ${random(max_color)}, ${random(max_color)}, ${random(max_color)})`,
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    beginAtZero: true
                }
            }
        }
    });
} catch (error) {
    alert("A bug with a chart api\nClick ok to refresh the screen");
    console.log(`${error}`);
    refresh(); // refreshing the window if there's an error
}

/**
 * running the 3x + 1 problem
 */
function running() {
    try {
        var num_chosen = toInt(
            $("#number-choose").val()
            // random(500)
        ); // getting the value

        var new_html_show = $("#new");
        var old_html_show = $("#old");
        var numChosen_html_show = $("#num-chosen");

        const final = 1; // set how many times to run 

        var iseven = isEven(num_chosen); // check once if its even
        var isodd = isEven(num_chosen); // check once if its odd

        // store new and old data
        var data_Track = {
            "old": num_chosen,
            "new": 0
        }

        numChosen_html_show.html(num_chosen);
        console.log(`Number chosen by the computer ${num_chosen}`);

        // if the number does not equal 1 it'll continue the loop
        while (data_Track.new != final || data_Track.old != final) {


            // if there's no new number saved
            if (data_Track.new == 0) {

                // if the number chosen is true 
                if (iseven == true) {
                    old_html_show.html(data_Track.old); // showing the old number
                    console.log(`number chosen before a new number is saved ${data_Track.old}`);
                    var NEW = even(data_Track.old); // dividing by 2
                    data_Track.new = NEW; // keeping track of the new num

                    new_html_show.html(NEW); // showing the number being saved
                    console.log(`new number saved ${data_Track.new}`);
                    Data.push(NEW);

                    // if the number chosen is odd
                } else if (isodd == true) {
                    old_html_show.html(data_Track.old);
                    console.log(`number chosen before a new number is saved ${data_Track.old}`);
                    var new_odd = odd(data_Track.old); // dividing by 2
                    data_Track.new = new_odd;

                    new_html_show.html(new_odd);
                    console.log(`new number saved ${data_Track.new}`);
                    Data.push(new_odd);


                } else {
                    numChosen_html_show.html("Number neither even nor odd\nOdd bug but it doesn't seem to show");
                }

            } else {

                // if the number chosen is true 
                if (iseven == true) {
                    new_html_show.html(data_Track.new); // showing the old number
                    console.log(`after a new number is saved ${data_Track.new}`);
                    var NEW = even(data_Track.new); // dividing by 2
                    data_Track.new = NEW; // keeping track of the new num

                    new_html_show.html(NEW); // showing the number being saved
                    console.log(`after a new number is saved ${data_Track.new}`);
                    Data.push(NEW);


                    // if the number chosen is odd
                } else if (isodd == true) {
                    new_html_show.html(data_Track.new);
                    console.log(`after a new number is saved ${data_Track.new}`);
                    var new_odd = odd(data_Track.new); // dividing by 2
                    data_Track.new = new_odd;

                    new_html_show.html(new_odd);
                    console.log(`after a new number is saved ${data_Track.new}`);
                    Data.push(new_odd);


                } else {
                    numChosen_html_show.html("Number neither even nor odd\nOdd bug but it doesn't seem to show");
                }

            }


        }

    } catch (err) {
        console.log(`${err}`);
    }
}
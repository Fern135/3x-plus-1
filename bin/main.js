//#region is even and odd
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isOdd(num) {
    if (num % 3 === 0) {
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

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: [num], // changes the more the longer it is
        datasets: [{
            label: '3 x + 1',
            data: [Data],
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

/**
 * running the 3x + 1 problem
 */
function running() {
    try {
        var num_chosen = toInt(
            random(500)
        ); // getting the value
        // $("#number-choose").val()
            
        var new_html_show = $("#new");
        var old_html_show = $("#old");

        const final = 1; // set how many times to run 

        var iseven = isEven(num_chosen); // check once if its even
        var isodd = isEven(num_chosen); // check once if its odd

        // store new and old data
        var data_Track = {
            "old": num_chosen,
            "new": 0
        }

        console.log(`Number chosen by the computer ${num_chosen}`)


        if (Number.isInteger(num_chosen)) {

            // run while the new number or old number is not equal to 1
            while (data_Track.old != final || data_Track.new != final) {

                // set the first set
                if (iseven == true) {
                    var addEven = even(data_Track.old); // dividing by 2 and setting it as old to start
                    Data.push(addEven); // add to the chart
                    data_Track.old = addEven // setting the new begining
                } else if (isodd == true) {
                    var addOdd = odd(data_Track.old); // multiplying 3 + 1 and setting it as old to start
                    Data.push(addOdd); // add to the chart
                    data_Track.old = addOdd; // setting the new begining
                }
                // else{
                //     console.log("can't begin cause number neither even or odd which is weird");
                // }



                // if no new data is set
                if (data_Track.new == 0) {
                    if (isEven(data_Track.old) == true) {
                        old_html_show.html(data_Track.old); // printing out the old on a DOM 
                        console.log(`old before setting new: ${data_Track.old}`) // printing out to the console to see

                        var New = even(data_Track.old); // getting the previous
                        console.log(`new data being saved${New}`) // printing out to the console to see

                        data_Track.new = New; // keeping track of the new data
                        Data.push(New); // add to array to show to screen
                        new_html_show.html(New);

                    } else if (isOdd(data_Track.old) == true) {
                        old_html_show.html(data_Track.old); // printing out the old on a DOM 
                        console.log(`old before setting new: ${data_Track.old}`) // printing out to the console to see

                        var New = odd(data_Track.old); // getting the previous
                        console.log(`new data being saved${New}`) // printing out to the console to see

                        data_Track.new = New; // keeping track of the new data
                        Data.push(New); // add to array to show to screen
                        new_html_show.html(New);

                    }else{
                        console.log("neither even or odd which is weird\nbefore setting new value");
                    }

                } else { // if a new value is set

                    if (isEven(data_Track.new) == true) {
                        console.log(`new data after setting the new: ${data_Track.new}`) // printing out to the console to see

                        var Newer = even(data_Track.new); // getting the previous
                        data_Track.old = data_Track.new; // replacing the old 
                        old_html_show.html(data_Track.old); // printing out the old on a DOM 
                        data_Track.new = Newer; // replacing the new
                        Data.push(Newer); // adding to array to show to screen
                        new_html_show.html(Newer); // printing out the new on a DOM 

                    } else if (isOdd(data_Track.new) == true) {
                        console.log(data_Track.new) // printing out to the console to see

                        var Newer = odd(data_Track.new); // getting the previous
                        data_Track.old = data_Track.new; // replacing the old 
                        old_html_show.html(data_Track.old); // printing out the old on a DOM 
                        data_Track.new = Newer; // replacing the new
                        Data.push(Newer); // adding to array to show to screen
                        new_html_show.html(Newer); // printing out the new on a DOM 
                    }else{
                        console.log("neither even or odd which is weird\nafter setting new value");
                    }
                }
            }

        } else {
            alert(`${num_chosen} is not an integer`);
            refresh(); // so the input is cleared
        }

    }catch(err){
        console.log(`${err}`)
    }
}
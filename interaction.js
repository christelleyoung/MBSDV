var data_url ="https://raw.githubusercontent.com/IsaKiko/D3-visualising-data/gh-pages/code/nations.json"
d3.json(data_url, function(data){
    var regionAmerica = data.filter(function(nation){
            return nation.region == "America";
    });
    console.log(regionAmerica);

    var recentLife = regionAmerica.map(function(e){
        return e.lifeExpectancy[e.lifeExpectancy.length-1];
    });

    console.log(recentLife);

    var copyofAmericanNations = regionAmerica;
    copyofAmericanNations[0].name = 'WEsteros';

    console.log(regionAmerica[0])

//        console.log(data);
//        var someoftheData = data.slice(0,5);
//        console.log(someoftheData);
//
//        var names = someoftheData.map(function(nation){
//            return nation.name;
//        });
//
//        console.log(names)
//
//        var numbers =[1,2,3,4,5];
//        var smallNumbers = numbers.filter(function(number){
//            return number <=3;
//        });
//        console.log(smallNumbers);
        //do things with the data
});
//anonymous callback function



var cat_image = document.getElementById('cat');
cat_image.addEventListener("click", function() {
    meow();
    purr();
});

function meow() {
    alert("Meow!");
};

var feed_button = document.getElementById('feed_button');

feed_button.addEventListener("click", feed);
function feed() {
    cat_image.style.width = (cat_image.offsetWidth + 30.0) + 'px';
    alert("Thank You!")
};

var run_button = document.getElementById('run_button');

run_button.addEventListener("click", run);
function run() {
    cat_image.style.width = (cat_image.offsetWidth - 30.0) + 'px';
    alert("Stop making me run!")
};


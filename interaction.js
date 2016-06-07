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


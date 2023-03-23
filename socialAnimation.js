var head = document.getElementsByTagName("head")[0];
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://code.jquery.com/jquery-3.6.1.slim.min.js";
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

var animationIsOnGoing = {};

function handler() {
  $(document).ready(function () {
    // add class on hover
    $(document).ready(function () {
      $("#socialGrid")
        .children()
        .hover(async function () {
          const ownText = $(this).html();
          if (animationIsOnGoing[ownText] != NaN) {
            animationIsOnGoing[ownText] = true;
            $(this).addClass("animated");
            let delayres = await delay(1500);
            $(this).removeClass("animated");
            animationIsOnGoing[ownText] = NaN;
          }
        });
    });
  });
}

const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

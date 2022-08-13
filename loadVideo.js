function displayIframe(id) {
  document.getElementById("iframeDisplay").innerHTML =
    '<iframe src="https://www.youtube.com/embed/' +
    id +
    '" title="Erklärvideo" loading="lazy" frameborder="0"></iframe>';
}

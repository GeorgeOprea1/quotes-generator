let btn = document.querySelector("#btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".person");

btn.addEventListener("click", getQuotes);

const category = "happiness";
function getQuotes() {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": "QtnQeT+hf4tdt110xpJ9sw==irniLogc7vj01QWt" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      quote.innerText = ` " ${result[0].quote} "`;
      author.innerText = `- ${result[0].author} -`;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
}

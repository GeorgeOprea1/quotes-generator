let btn = document.querySelector("#btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".person");
let category;
btn.addEventListener("click", getQuotes);

const quoteCategory = [
  "age",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

function getQuotes() {
  getRandomCategory();
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

function getRandomCategory() {
  const RandomCategory =
    quoteCategory[Math.floor(Math.random() * quoteCategory.length)];
  console.log(RandomCategory);
  category = RandomCategory;
}

function searchReplace() {
  let article = document.querySelector("article");
  const searchInput = (
    document.getElementById("search-input") as HTMLInputElement
  ).value;

  if (article && searchInput) {
    article.innerHTML = article?.innerText.replaceAll(
      searchInput,
      `<span class = "highlight">${searchInput}</span>`
    );
  }
}

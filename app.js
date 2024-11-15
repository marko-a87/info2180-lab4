let form = document.getElementById("form");
let input = document.querySelector("input");
let super_name = document.getElementById("sup_name");
let super_alias = document.getElementById("sup_alias");
let biography = document.getElementById("biography");
let result = document.getElementById("result");
let php_name = document.getElementById("name");
let button = document.getElementById("search-button");
let query;
const santizeInput = () => {
  php_name.value = DOMPurify.sanitize(php_name.value.trim());
  query = php_name.value;
};
const getSuperHeroes = async () => {
  santizeInput();
  const resp = await fetch(
    `http://localhost/info2180-lab4/superheroes.php?query=${query}`
  );
  //trigger search button with click
  const superhero = await resp.text();
  return superhero;
};

const search = async () => {
  const superheroes = await getSuperHeroes();
  result.innerHTML = `
  <div class= "result_header">
    <h5> RESULT </h5>
  </div>
  <div class= "superheroes">
    ${superheroes}
  </div>
`;
  console.log("Successfully submitted");
  history.pushState({}, "", `?query=${query}`);
};

button.addEventListener("click", () => {
  search();
});

//create a function that triggers when the search button is clicked.

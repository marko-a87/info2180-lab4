let button = document.querySelector("button");

const getSuperHeroes = async () => {
  const resp = await fetch("http://localhost/info2180-lab4/superheroes.php");
  //trigger search button with click
  const superhero = resp.text();
  return superhero;
};

const search = async () => {
  const superheroes = await getSuperHeroes();
  alert(superheroes);
};
button.addEventListener("click", search);

//create a function that triggers when the search button is clicked.

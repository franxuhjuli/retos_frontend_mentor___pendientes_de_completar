const submitButton = document.getElementById("submit-button");

function submitRate() {
  const mainContent = document.querySelector('#rating-state-content');
  const thankYouContent = document.querySelector('#thank-you-state-content');
  thankYouContent.classList.remove("hidden");
  mainContent.classList.add("hidden");
}

submitButton.addEventListener("click", submitRate);




const oneStar = document.getElementById("1-star");
const twoStars = document.getElementById("2-star");
const threeStars = document.getElementById("3-star");
const fourStars = document.getElementById("4-star");
const fiveStars = document.getElementById("5-star");


const rateNumber = document.getElementById("rate-number");


function rate(num) {
  let rated = num.textContent;
  rateNumber.textContent = rated;
  rateNumber.style.color = "hsl(0, 0%, 100%)";
  rateNumber.style.backgroundColor = "hsl(217, 12%, 63%)";
}

oneStar.addEventListener("click", rate(oneStar));
twoStars.addEventListener("click", rate(twoStars));
threeStars.addEventListener("click", rate(threeStars));
fourStars.addEventListener("click", rate(fourStars));
fiveStars.addEventListener("click", rate(fiveStars));
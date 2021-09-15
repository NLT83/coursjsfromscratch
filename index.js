// document.querySelector(`h4`).style.background = "yellow";  ceci montre qu'avec json peut donner les mêmes ordre que css !
// const balisehtml = document.querySelector(`h4`); on enferme ce qu'on pointe dans une variable , ou const (const la plupart du temps)

// click event
const questioncontainer = document.querySelector(`.click-event.box`);
const btn1 = document.querySelector(`#btn-1`);
const btn2 = document.getElementById(`btn-2`);
const response = document.querySelector(`p`);

questioncontainer.addEventListener("click", () => {
  questioncontainer.classList.toggle("question-clicked");
});

btn1.addEventListener(`click`, () => {
  response.classList.add(`showresponse`);
  response.style.background = "green";
});

btn2.addEventListener(`click`, () => {
  response.classList.add(`showresponse`);
  response.style.background = "red";
});
//-------------------------------------------------------------------------

// mouse events -------------------------------------------------------------

const mousemove = document.querySelector(`.mousemove`);

window.addEventListener(`mousemove`, (e) => {
  mousemove.style.left = e.pageX + `px`;
  mousemove.style.top = e.pageY + `px`;
});

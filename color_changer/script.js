<<<<<<< HEAD
const body = document.body;
const buttons = document.querySelectorAll('.button');

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.id === "grey")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "white")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "blue")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "yellow")
    {
      body.style.backgroundColor = e.target.id;
    }

  })
=======
const body = document.body;
const buttons = document.querySelectorAll('.button');

buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.id === "grey")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "white")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "blue")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "yellow")
    {
      body.style.backgroundColor = e.target.id;
    }

  })
>>>>>>> 4449f13946608dca761cf2405dadfd08b5662f59
})
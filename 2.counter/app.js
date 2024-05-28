<<<<<<< HEAD
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>
{//e is event object
  btn.addEventListener("click",(e)=>{
      const styles =  e.currentTarget.classList;
      if(styles.contains("decrease"))
      {
        count--;
      }
      else if(styles.contains("increase"))
      {
        count++;
      }
      else
      {
        count = 0;
      }
      if(count<0)
      {
        value.style.color = "red"
      }
      else if(count > 0 )
      {
        value.style.color = "green"
      }
      else if(count === 0){
        value.style.color = "#222"
      }
      value.textContent = count;
      
  })
})
=======
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>
{//e is event object
  btn.addEventListener("click",(e)=>{
      const styles =  e.currentTarget.classList;
      if(styles.contains("decrease"))
      {
        count--;
      }
      else if(styles.contains("increase"))
      {
        count++;
      }
      else
      {
        count = 0;
      }
      if(count<0)
      {
        value.style.color = "red"
      }
      else if(count > 0 )
      {
        value.style.color = "green"
      }
      else if(count === 0){
        value.style.color = "#222"
      }
      value.textContent = count;
      
  })
})
>>>>>>> 4449f13946608dca761cf2405dadfd08b5662f59

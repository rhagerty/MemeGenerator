document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    const memeLocation = document.getElementById("location");
  
``

   
  
    form.addEventListener("submit", function(e){
        e.preventDefault();

        const meme = document.createElement("li");
        const textTop= document.createElement("div");
        const textBottom = document.createElement("div");
        const img = document.createElement("img");

      
        img.src = document.getElementById("imageUrl").value;
        textTop.classList.add("textTop");
        textTop.innerHTML = document.getElementById("topText").value;
    
        textBottom.classList.add("textBottom");
          textBottom.innerHTML = document.getElementById("bottomText").value;
          
        
        meme.classList.add("meme");
      
        meme.appendChild(textTop);
        meme.appendChild(textBottom);
        meme.appendChild(img);
        
        memeLocation.appendChild(meme);

        let removeDiv = document.createElement('button');
        removeDiv.classList.add("deleteMeme");
        removeDiv.innerText = "X";
        meme.appendChild(removeDiv);
        form.reset();
  
        removeDiv.addEventListener('click', function(event){
            event.target.parentNode.remove();
        
    })  })
})

       
        

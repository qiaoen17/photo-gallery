function upDate(previewPic){
    /* In this function:
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

       document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
       document.getElementById("image").style.backgroundSize = "cover";
       document.getElementById("image").innerText = null;
       document.getElementById("photoTitle").innerText = previewPic.alt;
     
}
   
function undo(previewPic){
    /* In this function:
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

       document.getElementById("image").style.backgroundImage = null;
       document.getElementById("image").innerText = "Hover over to see your photos";
       document.getElementById("photoTitle").innerText = "Photo Title"
     
}
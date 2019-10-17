var messagecount=document.getElementsByTagName("p").length

document.getElementById("count").textContent=messagecount;

for(var i=0;i<document.getElementsByTagName("p").length;i++){

    document.getElementsByClassName("trash")[i].addEventListener("click",function(){
        this.parentNode.remove();
        messagecount=document.getElementsByTagName("p").length;
        document.getElementById("count").textContent=messagecount;
    });
}

var wordcount=document.getElementsByTagName("p").textContent.split("").length

document.getElementsByClassName("cnword").textContent=wordcount




var xhr = new XMLHttpRequest()
xhr.open("GET","https://randomuser.me/api/", true)
xhr.send()
xhr.onreadystatechange = function(){
    if(xhr.readyState ==4 && xhr.status ==200){
        console.log(xhr);
    }
}
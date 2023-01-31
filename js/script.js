$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        let elemento = document.getElementById("text");
        let data2 = JSON.stringify(data);
        //document.getElementById("test").innerHTML = data2;

        // document.getElementById("test2").innerHTML= data.results[0].id.name;
        //document.getElementById("test3").innerHTML= "email: " +data.results[0].email; -->
        document.getElementById("fotoThumb").src = data.results[0].picture.large;

        console.table(data2);
    }
});
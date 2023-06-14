var images = 
[
    "download.jpg","davis.jpg","stephencurry.webp","jamorant.jpg"
];
        var name = ["Lebron James","Anthony Davis","Stephen Curry","Ja Morant"];






var i = 0;
function update()
{
    i++
    var jogadores = 4
    if(i > jogadores)
    {
        i=0;
    }
    var updateImage = images[i];
    var updateName = name[i];
    document.getElementById("james").src = updateImage;
    document.getElementById("lebron").innerHTML = updateName;
}
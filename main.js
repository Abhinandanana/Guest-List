var Name_of_the_guest_array = [];
function Submit() {
    var Guest_Name = document.getElementById("Enter_Name").value ;
    Name_of_the_guest_array.push(Guest_Name);   
    document.getElementById("display_names").innerHTML= Name_of_the_guest_array;
    console.log(Name_of_the_guest_array);
    var length_of_array= Name_of_the_guest_array.length;
    console.log(length_of_array);
}

    function Show_List() {
        var xyz= Name_of_the_guest_array.join("<br>");
        console.log(Name_of_the_guest_array);
        document.getElementById("show_names").innerHTML= xyz.toString();

    }

    function sorting() {
        Name_of_the_guest_array.sort();
            var xyz= Name_of_the_guest_array.join("<br>");
            console.log(Name_of_the_guest_array);
            document.getElementById("sorted_names").innerHTML= xyz.toString();
    
        }
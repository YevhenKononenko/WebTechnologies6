var opaC = 0;
var x = document.getElementById("First");
x.style.opacity = opaC;
window.onload = function (){
    let m = setInterval(myFunc2, 30);
    function myFunc2(){
        if(opaC == 1) {
            clearInterval(m);
        }
        else {
            x.style.opacity = opaC;
            opaC+=0.01;
        }
    }
}
var p = document.getElementById("InPut");
p.onclick = function() {
    alert("Do you really want submit this, chumba? So, fill this forms to confirm your action. Press OK to continue.");
    let d = prompt("Username:")
    if (d == "") {
        alert("Username field isn't filled!!!");
        return true;
    }
    let t = prompt("Password:");
    if (t == "") {
        alert("Password field isn't filled!!!");
        return true;
    }
    let v = prompt("Confirm your password:");
    if (v == "") {
        alert("Password field isn't filled!!!");
        return true;
    }
    if (t !== "" && v !== ""){
        if (t == v) {
            alert("User verified successfully. Press OK to continue.");
            return false;
        }
    }
    alert("Entered passwords do not match!!!");
    return true;
}

$(".HiDe").click(function(){
    $(this).hide();
})

$("#Vskritie").click(function(){
    if($(".HiDe").css("display")=="none"){
        $(".HiDe").show();
    }
})

$("#Vskritie").css("cursor", "pointer")

$(".Slider").css("widht", "480px")
$(".Slider").css("height", "360px")
$(".Slider").css("marginLeft", "40px")
$("#slider").css("margin", "100px")
$("#slider").css("width", "500px")
$("#text").css("marginLeft", "40px")

$("#slider").slider({
    min: 0,
    max: 5,
    step: 1,
    change: function(event, ui) {
        switch(ui.value){
            case 0: $(".Slider").attr("src","1587629259_1587629299.jpg")
            $("#text").text("Десерт с мороженым и шоколадными шариками - 150 грн:")
            break;
            case 1: $(".Slider").attr("src","6baef5dcecac888914269d13c2c5e090-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_493.jpg")
            $("#text").text("Шоколадное пироженое тирамису - 300 грн:")
            break;
            case 2: $(".Slider").attr("src","big5319b686db7cf.jpg")
            $("#text").text("Нежный десерт с клубникой - 200 грн:")
            break;
            case 3: $(".Slider").attr("src","food20122017-zahod.jpg")
            $("#text").text("Шоколадное пироженое 2 - 120 грн:")
            break;
            case 4: $(".Slider").attr("src","sloenyi-desert-v-stakane_1514977480_1_max.jpg")
            $("#text").text("Десерт с мороженым и шоколадом - 175 грн:")
            break;
            case 5: $(".Slider").attr("src","bread-4077812_1920.jpg")
            $("#text").text("Круасаны - 200 грн:")
            break;
        }
    }
})

$("#accordion").accordion();
$("#accordion").css("width", "1000px")
$(".da").css("background", "rgb(241, 155, 42)")
$(".Fourth").css("marginBottom", "50px")

$("#tabs_section").tabs();
$("#tabs_section").css("width", "1000px")
$("#tabs_section").css("marginBottom", "50px")

$("#sortable").sortable();
$("#sortable").css("marginBottom", "50px")
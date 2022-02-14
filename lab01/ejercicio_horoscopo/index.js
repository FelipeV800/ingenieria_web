var userMonth = document.getElementById("inp_month");
var userDay = document.getElementById("inp_day");
var userYear = document.getElementById("inp_year");
var btnStart = document.getElementById("btn_start");
var answer = document.getElementById("p_answer");

btnStart.addEventListener ("click", Calculate);

function Calculate () {
    var fecha = userDay.value + "/" + userMonth.value + "/" + userYear.value;
    if (((userDay.value == "") || (userDay.value == "0")) || ((userMonth.value == "") || (userMonth.value == "0")) || ((userYear.value == "") || (userYear.value == "0"))) {
        alert ("Parece que faltan algunos datos o alguno es incorrecto");
    } else {
        if (confirm("Tu fecha de nacimiento es: " + fecha)) {

            //Enero
            if ((userMonth.value == "1") || (userMonth.value == "01")) {
                if (userDay.value < 32) {
                    if (userDay.value < 20){
                        alert ("Eres capricornio!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Capricornio<strong/>."
                    } else if (20 <= userDay.value){
                        alert ("Eres Acuario!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Acuario<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Febrero
            if ((userMonth.value == "2") || (userMonth.value == "02")) {
                if (userDay.value < 30) {
                    if (userDay.value < 19){
                        alert ("Eres Acuario!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Acuario<strong/>."
                    } else if (19 <= userDay.value){
                        alert ("Eres Psicis!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Psicis<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Marzo
            if ((userMonth.value == "3") || (userMonth.value == "03")) {
                if (userDay.value < 32) {
                    if (userDay.value < 21){
                        alert ("Eres Psicis!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Psicis<strong/>."
                    } else if (21 <= userDay.value){
                        alert ("Eres Aries!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Aries<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Abril
            if ((userMonth.value == "4") || (userMonth.value == "04")) {
                if (userDay.value < 31) {
                    if (userDay.value < 20){
                        alert ("Eres Aries!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Aries<strong/>."
                    } else if (20 <= userDay.value){
                        alert ("Eres Tauro!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Tauro<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Mayo
            if ((userMonth.value == "5") || (userMonth.value == "05")) {
                if (userDay.value < 32) {
                    if (userDay.value < 21){
                        alert ("Eres Tauro!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Tauro<strong/>."
                    } else if (21 <= userDay.value){
                        alert ("Eres Geminis!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Geminis<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Junio
            if ((userMonth.value == "6") || (userMonth.value == "06")) {
                if (userDay.value < 31) {
                    if (userDay.value < 21){
                        alert ("Eres Geminis!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Geminis<strong/>."
                    } else if (21 <= userDay.value){
                        alert ("Eres Cancer!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Cancer<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Julio
            if ((userMonth.value == "7") || (userMonth.value == "07")) {
                if (userDay.value < 32) {
                    if (userDay.value < 23){
                        alert ("Eres Cancer!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Cancer<strong/>."
                    } else if (23 <= userDay.value){
                        alert ("Eres Leo!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>leo<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Agosto
            if ((userMonth.value == "8") || (userMonth.value == "08")) {
                if (userDay.value < 32) {
                    if (userDay.value < 23){
                        alert ("Eres Leo!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Leo<strong/>."
                    } else if (23 <= userDay.value){
                        alert ("Eres Virgo!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Virgo<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Septimbre
            if ((userMonth.value == "9") || (userMonth.value == "09")) {
                if (userDay.value < 31) {
                    if (userDay.value < 23){
                        alert ("Eres Virgo!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Virgo<strong/>."
                    } else if (23 <= userDay.value){
                        alert ("Eres Libra!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Libra<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Octubre
            if (userMonth.value == "10") {
                if (userDay.value < 32) {
                    if (userDay.value < 23){
                        alert ("Eres Libra!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Libra<strong/>."
                    } else if (23 <= userDay.value){
                        alert ("Eres Escorpio!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Escorpio<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Noviembre
            if (userMonth.value == "11") {
                if (userDay.value < 31) {
                    if (userDay.value < 22){
                        alert ("Eres Escorpio!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Escorpio<strong/>."
                    } else if (22 <= userDay.value){
                        alert ("Eres Sagitario!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Sagitario<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }

            //Diciembre
            if (userMonth.value == "12") {
                if (userDay.value < 32) {
                    if (userDay.value < 22){
                        alert ("Eres Sagitario!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Sagitario<strong/>."
                    } else if (22 <= userDay.value){
                        alert ("Eres Capricornio!!");
                        answer.innerHTML = "El signo zodiacal para tu fecha de nacimiento <strong>" + fecha + "<strong/> es <strong>Capricornio<strong/>."
                    }
                } else {
                    alert ("El dia de nacimiento es incorrecto");
                    answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
                }
            }
            
        } else {
            answer.innerHTML = "<strong>Ingresa tu fecha nuevamente<strong/>";
        }
    }
}
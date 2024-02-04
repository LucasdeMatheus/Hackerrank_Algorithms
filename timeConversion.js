//esta função converterá a hora PM - AM, em horario militar.
function timeConversion(s) {
    //a função split cortará o cactere dentro do parâmetro
    const hour = s.split(':');
    //o split transforma a hour em 3 indices
    //o parseInt seleciona um indice e atribui a variavel
    let intHour = parseInt(hour[0]);
    let minutes = parseInt(hour[1]);
    let seconds = parseInt(hour[2]); 
    let hourMilitary = '';
    //se incluir PM significa que é depois das 13h
    if(s.includes('PM') && intHour < 12){
        //portanto, adicionará mais 12 na hora
        intHour += 12;
    var hourInt = intHour;
    }else{
        //se não, permanecerá a mesma hora, pela condição "inHour < 12"
        hourInt = intHour
    }
    //AM é mesma lógica
    if(s.includes('AM') && intHour < 10){
        //sem esta condição o resultado sairá incompleto(09=>9)
        hourInt = '0'+intHour;
    }
    if (s.includes('AM') && intHour > 11){
        //essa condição é para 12h virar meia noite(00)
        hourInt = "00"
    }
    if(minutes < 10){
        //essa condição completa do mesmo jeito que a do AM
        minutes = '0' + minutes;
    var intMinutes = minutes;
    }else{
        intMinutes = minutes
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    var intSeconds = seconds;
    }else{
        intSeconds = seconds.toString()
    }
    //aqui é a contrução da hora militar, logo depois retorna
    hourMilitary += hourInt + ':' + intMinutes +":" + intSeconds;
    return hourMilitary
}

 console.log(timeConversion('11:50:25PM'))//input 23:50:25
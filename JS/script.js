const userBirthYear = prompt(`Введите год рождения`);
const userAddress = prompt(`В каком городе вы живете?`);
const userSports = prompt(`Ваш любимый вид спорта?`);
const currentYear = +2021;
const userAge = 2021 - +userBirthYear;

let year;
if ( (userBirthYear === null) || (userBirthYear === ``) ) {
    year = `Жаль, что ты не захотел ввести свой возраст`;
} else if ( +userBirthYear < 1940 ) {
    year = `Ты уже слишком стар для этого`;
} else if ( +userBirthYear >= currentYear ) {
    year = `Ты пришел из будущего?`;
} else if ( (userAge < 5) && (userAge > 0) ) {
    year = `Ты слишком маловат, что бы это читать.`;
} else { 
    year = `Твой возраст ${userAge}`;
}
// alert(`Твой возраст ${userAge}`);

let town;
switch ( userAddress ) {
    case "Киев" :
    case "Москва" :
    case "Минск" :
         town = `Ты живешь в столице ${userAddress}`;
        break;
    case null :
    case ` ` :
         town = `Жаль, что ты не захотел ввести город проживания.`;
        break;
    default:
         town = `Ты живешь в городе ${userAddress}`;
}
// alert(town);

let champ;
switch ( userSports ) {
    case "футбол":
        champ = `Круто! Хочешь стать как Андрей Шевченко?`;
    break;
    case "Бокс":
        champ = `Круто! Хочешь стать как Александр Усик?`;
        break;
    case "Баскетбол":
        champ = `Круто! Хочешь стать как Майкл Джордон?`;
        break;
    case null :
    case ` ` :
        champ = `Жаль, что ты не захотел ввести свой любимый вид спорта`;
        break;
    default:
        champ = `Интересный вид спорта ты предпочитаешь.`;
}
// alert(champ);

alert(`${year} ${town} ${champ}`);
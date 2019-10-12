const Eventemit = require('events');
const emit = new Eventemit();
const fs = require('fs');
const timeLog = new Date();
const now = timeLog.toUTCString();


emit.on('Login', function (userName, now, status) {
    if (status) {
        fs.appendFileSync('logFile', '\n' + now + ' - ' + userName + ' вошёл в систему');
        console.log(now + ' - ' + userName + ' вошёл в систему');
    } else {
        fs.appendFileSync('logFile', '\n' + now + ' - ' + userName + ' - ошибка входа в систему: ');
        console.log(now + ' - ' + userName + ': ошибка входа в систему: ');
    }
});


emit.on('Logout', function (userName, logoutTime) {
    fs.appendFileSync('logFile', '\n' + userName + ' вышел из системы: ' + logoutTime);
    console.log(userName + ' вышел из системы: ' + logoutTime);
});


emit.emit('Login', 'User', now, true);
emit.emit('Login', 'User', now, false);
emit.emit('Logout', 'User', '14:20');


const EventEmitter = require('events');
const myEmit = new EventEmitter();
const fs = require('fs');
const timeLog = new Date();
const now = timeLog.toUTCString();


myEmit.on('Login', function (userName, now, status) {
    if (status) {
        fs.appendFileSync('logFile', '\n' + now + ' - ' + userName + ' вошёл в систему');
        console.log(now + ' - ' + userName + ' вошёл в систему');
    } else {
        fs.appendFileSync('logFile', '\n' + now + ' - ' + userName + ' - ошибка входа в систему: ');
        console.log(now + ' - ' + userName + ': ошибка входа в систему: ');
    }
});


myEmit.on('Logout', function (userName, logoutTime) {
    fs.appendFileSync('logFile', '\n' + userName + ' вышел из системы: ' + logoutTime);
    console.log(userName + ' вышел из системы: ' + logoutTime);
});


myEmit.emit('Login', 'User', now, true);
myEmit.emit('Login', 'User', now, false);
myEmit.emit('Logout', 'User', '14:20');


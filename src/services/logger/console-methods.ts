import { LoggerBase } from './logger-base';

export class Log extends LoggerBase {
    log(message: string) {
        console.log(message);
    }
}

export class Warn extends LoggerBase {
    log(message: string) {
        console.warn(message);
    }
}

export class Error extends LoggerBase {
    log(message: string) {
        console.error(message);
    }
}

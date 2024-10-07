import { Injectable } from '@angular/core';
import { setLogger } from './logger.utils';
import { ConsoleTypes, LoggerTypes } from './logger.model';

@Injectable({
    providedIn: 'root'
})

export class LoggerService {

    private logger: any;

    constructor() {
        this.logger = setLogger(LoggerTypes.CONSOLE, ConsoleTypes.LOG);
    }

    log(message: string) {
        setLogger(LoggerTypes.CONSOLE, ConsoleTypes.LOG);
        this.logger.log(message);
    };

    warn(message: string) {
        setLogger(LoggerTypes.CONSOLE, ConsoleTypes.WARN);
        this.logger.log(message);
    };

    error(message: string) {
        setLogger(LoggerTypes.CONSOLE, ConsoleTypes.ERROR);
        this.logger.log(message);
    };
}

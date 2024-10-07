import { ConsoleTypes, LoggerTypes } from "./logger.model";
import { Log, Warn, Error } from "./console-methods"; 

const consoleMethods = {
    [ConsoleTypes.LOG]: new Log(),
    [ConsoleTypes.WARN]: new Warn(),
    [ConsoleTypes.ERROR]: new Error(),
}

export const LoggerFactory = (type: LoggerTypes, method: ConsoleTypes) => {
    switch(type) {
        case LoggerTypes.CONSOLE:
            return consoleMethods[method];
    }
}

import { ConsoleTypes, LoggerTypes } from "./logger.model";
import { LoggerFactory } from "./logger-factory";

export const setLogger = (loggerType: LoggerTypes, methodtype: ConsoleTypes) => {
    return LoggerFactory(loggerType, methodtype);
}

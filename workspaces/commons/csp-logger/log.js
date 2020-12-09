/**
 * Represents the class that is used for logging s
 */
class Log {
  constructor(logLevel) {
    this.logLevel = logLevel;
  }
  debug(primaryMessage, ...supportingData) {
    if (this.logLevel === "ALL") {
      this.emitLogMessage("debug", primaryMessage, supportingData);
    }
  }
  warn(primaryMessage, ...supportingData) {
    if (this.logLevel === "ALL") {
      this.emitLogMessage("warn", primaryMessage, supportingData);
    }
  }
  error(primaryMessage, ...supportingData) {
    if (this.logLevel === "ALL" || this.logLevel === "ERROR") {
      this.emitLogMessage("error", primaryMessage, supportingData);
    }
  }
  info(primaryMessage, ...supportingData) {
    if (this.logLevel === "ALL") {
      this.emitLogMessage("info", primaryMessage, supportingData);
    }
  }
  debugNg(primaryMessage, ...supportingData) {
    if (this.logLevel === "ALL") {
      this.emitLogMessage("log", primaryMessage, supportingData);
    }
  }
  emitLogMessage(msgType, msg, supportingData) {
    if (supportingData != null && supportingData.length > 0) {
      console[msgType](msg, supportingData);
    } else {
      console[msgType](msg);
    }
  }
}
exports.Log = Log;

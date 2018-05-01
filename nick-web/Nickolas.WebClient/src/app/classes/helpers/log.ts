export class Log {

    public static PutLog(_componentName: string, _messageToLog: string) {
        console.log('>> ' + _componentName + ' - ' + _messageToLog);
    }
}

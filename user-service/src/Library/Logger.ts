import chalk from 'chalk';

export class Logger {
    public static log = (args: any) => this.info(args);
    public static info = (args:any) => console.log(chalk.blue(`[${new Date().toLocaleTimeString()}] INFO`),
    typeof args == 'string' ? chalk.blueBright(args) : args);
    public static warn = (args:any) => console.log(chalk.yellow(`[${new Date().toLocaleTimeString()}] WARN`),
    typeof args == 'string' ? chalk.yellowBright(args) : args);
    public static error = (args:any) => console.log(chalk.red(`[${new Date().toLocaleTimeString()}] ERROR`),
    typeof args == 'string' ? chalk.redBright(args) : args);
}
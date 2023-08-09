import { config, DotenvParseOutput } from "dotenv";

// local environment variables list
// you can add neccessary variables
export interface EnvConfiguration extends DotenvParseOutput {
  APP_PORT: string;
}

// preventing `ENV[VARNAME_HERE] posibbly can be undefined`
export const ENV: EnvConfiguration = config().parsed as EnvConfiguration;

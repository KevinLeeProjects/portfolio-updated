export interface FormData {
    route: string;
    columnTitle: string[];
    value: string[];
}

export interface Project {
    route: string;
    [key: string]: string; // This allows any string key with string values
}

export interface LoggedIn {
    loggedIn: boolean
}
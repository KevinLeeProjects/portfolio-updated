export interface FormData {
    route: string;
    columnTitle: string[];
    value: string[];
}

export interface Project {
    route: string;
    [key: string]: string; 
}

export interface LoggedIn {
    loggedIn: boolean
}
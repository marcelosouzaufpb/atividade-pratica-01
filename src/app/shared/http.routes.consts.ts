import { environment } from '../../environments/environment';

export const FULL = 'full';

export const API: string = 'api';
export const NAME_PROJECT: string = 'blog'
export const VERSION_PROJECT: string = 'V1'
export const BACKEND_URL: string = `http://${environment.BASE_URL}/${API}/${VERSION_PROJECT}`;


export const HOME_ROUTING: string = 'home';

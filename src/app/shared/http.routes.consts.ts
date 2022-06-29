import { environment } from '../../environments/environment';

export const API = 'api';
export const NAME_PROJECT = 'blog'
export const VERSION_PROJECT = 'V1'
export const BACKEND_URL = `http://${environment.BASE_URL}/${API}/${VERSION_PROJECT}`;

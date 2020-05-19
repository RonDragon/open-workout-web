import { environment } from 'src/environments/environment';

 const api = environment.originApi + environment.api;

export class Constants{

  public static apiUrl = api;

  public static getUserData = '/getUserData';

}

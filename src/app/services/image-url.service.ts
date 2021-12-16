import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {
  naranja='ffffff';
  morado='FDA1FF';
  blanco='ffffff';
  constructor() { }

  getUrl(id: number, colorBoolean:string, backgroundColor:string) {
    let url="https://api.arasaac.org/api/pictograms/";
    // 36994?plural=false&color=true&backgroundColor=#ffffff&download=false
    url+=id.toString();
    url+="?plural=false&color=";
    url+=colorBoolean;
    url+="&backgroundColor=%23";
    url+=backgroundColor;
    url+="&download=false";
    return url;
  }

  getAyudaURL(backgroundColor:string){
    let url="https://api.arasaac.org/api/pictograms/7171?plural=false&color=false&backgroundColor=%23";
    url+=backgroundColor;
    url+="&download=false";
    return url;
  }

  getHomeURL(colorBoolean:string,backgroundColor:string){
    let url="https://api.arasaac.org/api/pictograms/6964?plural=false&color=";
    url+=colorBoolean;
    url+="&backgroundColor=%23";
    url+=backgroundColor;
    url+="&download=false";
    return url;
  }
}

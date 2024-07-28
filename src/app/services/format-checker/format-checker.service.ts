import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatCheckerService {
  constructor() {}

  checkEmail(e: string): boolean{
    const pattern = new RegExp(/^[a-z0-9._]{2,40}[@]{1}[a-z0-1]{2,6}[.]{1}[a-z]{2,5}$/)
    const result = pattern.test(e)
    if(result){
      console.log('email correct', e)
    }
    return result
  }

  checkPassword(p: string): boolean{
    const pattern = new RegExp(/^[a-z0-9._éàïüû!\?\_\-\$]{12,20}$/i)
    const result = pattern.test(p)
    if(result){
      console.log('password correct', p)
    }
    return result

  }
}

import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Tweet } from './tweet.model';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {

  private wordUrl = 'http://randomword.setgetgo.com/get.php';
  private flickrUrl = null;
  private word = 'null';

  constructor (private http: Http) {}

  getWord(): Observable<Tweet[]> {
    return this.http.get(this.wordUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  private extractData(res: Response) {
    return res || { };
  }

  saveWord(word: string) {
    this.word = word;
  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getPic(): Observable<Tweet[]> {
    console.log('')
    return this.http.get(this.wordUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}

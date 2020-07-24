import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Iplaylist} from '../../playlists/create-playlist/playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private httpClient: HttpClient) {
  }
  private readonly API_URL = 'http://localhost:8080/playlist';
  shouldRefresh = new Subject<any>();

  getIdUser(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/listUserID/' + id);
  }

  getTopView(): Observable<Iplaylist[]> {
    return this.httpClient.get<Iplaylist[]>(this.API_URL + '/topView');
  }

  getTopLike(): Observable<Iplaylist[]> {
    return this.httpClient.get<Iplaylist[]>(this.API_URL + '/topLike');
  }

  getTopDate(): Observable<Iplaylist[]> {
    return this.httpClient.get<Iplaylist[]>(this.API_URL + '/topDate');
  }

  getById(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/' + id);
  }

  create(playlist: Iplaylist): Observable<Iplaylist> {
    return this.httpClient.post<Iplaylist>(this.API_URL + '/creates', playlist);
  }

  update(playlist: Iplaylist): Observable<Iplaylist> {
    return this.httpClient.put<Iplaylist>(this.API_URL + '/' + playlist.id, playlist);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/delete/' + id);
  }
}

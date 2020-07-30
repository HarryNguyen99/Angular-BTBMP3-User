import { Component, OnInit } from '@angular/core';
import {SingerService} from '../../service/singer/singer.service';
import {Song} from '../../model/song';
import {ActivatedRoute} from '@angular/router';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-singer-song',
  templateUrl: './singer-song.component.html',
  styleUrls: ['./singer-song.component.css']
})
export class SingerSongComponent implements OnInit {

  songList: Song[] = [];
  title = 'Playlist';
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [10];
  msaapDisplayVolumeControls = true;
  track: Track = {
    title: '',
    link: ''
  };
  msaapPlaylist: Track[] = [
    {
      title: '',
      link: ''
    }
  ];

  constructor(private singerService: SingerService,
              private activatedRoute: ActivatedRoute) { }

  idSinger: number;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(result => this.idSinger = result.id);
    this.singerService.playSong(this.idSinger).subscribe(value => {
      this.songList = value;
      this.msaapPlaylist[0].title = this.songList[0].name;
      this.msaapPlaylist[0].link = this.songList[0].songLink;
      for (let i = 1; i < this.songList.length; i++) {
        this.track.index = i;
        this.track.title = this.songList[i].name;
        this.track.link = this.songList[i].songLink;
        this.msaapPlaylist.push(this.track);
      }
      console.log(this.msaapPlaylist);
    });
    // console.log(this.idSinger);
    // console.log(this.songList.values());
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  videos = [
    {"songName": "Children Of Bodom - Needled 24/7 - Live ", "songUrl": "../../assets/video/Children of Bodom - Needled 247 - Live at Wacken Open Air 2018 (1).mp4"},
    // {"songName": "Children Of Bodom - Towars Dead End - Live ", "songUrl": "../../assets/video/Children of Bodom - Towards Dead End (Wacken 2018).mp4"}
]
}

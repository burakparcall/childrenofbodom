import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TourComponent } from './tour/tour.component';
import { AlbumsComponent } from './albums/albums.component';
import { MediaComponent } from './media/media.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "albums", component: AlbumsComponent},
  {path: "media", component: MediaComponent},
  {path: "tour", component: TourComponent},
  {path: "history", component: HistoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

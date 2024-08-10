import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'watch-later', component: WatchLaterComponent },
  { path: 'liked-videos', component: LikedVideosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page, if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoadComponent } from './routes/road/road.component';
import { StreetComponent } from './routes/street/street.component';
import { StreetGuard } from './guards/street.guard';
import { RoadGuard } from './guards/road.guard';
import { BuildingComponent } from './routes/building/building.component';
import { HouseComponent } from './routes/house/house.component';
import { HouseGuard } from './guards/house.guard';

const routes: Routes = [
  { path: '', redirectTo: '/road', pathMatch: 'full' },
  { path: 'road', component: RoadComponent, canActivate: [RoadGuard] },
  { path: 'street', component: StreetComponent, canActivate: [StreetGuard] },
  { path: 'building', redirectTo: '/street', pathMatch: 'full' },
  { path: 'building/:Id', component: BuildingComponent },
  { path: 'house', component: HouseComponent, canActivate: [HouseGuard] },
  { path: '', component: RoadComponent },
  { path: '**', redirectTo: '/road' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

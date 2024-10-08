import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreetComponent } from './routes/street/street.component';
import { ArrowComponent } from './routes/arrow/arrow.component';
import { ArrowGuard } from './guards/arrow.guard';
import { PoemComponent } from './routes/poem/poem.component';

const routes: Routes = [
  { path: '', redirectTo: '/street', pathMatch: 'full' },
  { path: 'street', component: StreetComponent },
  { path: 'arrow', component: ArrowComponent, canActivate: [ArrowGuard] },
  { path: 'poem', redirectTo: '/poem/0', pathMatch: 'full' },
  { path: 'poem/:id', component: PoemComponent },
  { path: '', component: StreetComponent },
  { path: '**', redirectTo: '/street' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { DecisionDiagramComponent } from './components/decision-diagram/decision-diagram.component';
import { FinalComponent } from './components/final/final.component';


const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'choice/:id',
    component: ChoiceComponent
  },
  {
    path: 'final',
    component: FinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

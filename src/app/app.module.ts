import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { NodeComponent } from './components/node/node.component';
import { DecisionDiagramComponent } from './components/decision-diagram/decision-diagram.component';
import { GameReducer } from './store/gameReducer';
import { FinalComponent } from './components/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ChoiceComponent,
    NodeComponent,
    DecisionDiagramComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ gamestate: GameReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

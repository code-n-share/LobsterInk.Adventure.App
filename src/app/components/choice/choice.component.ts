import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AdventureService } from 'src/app/services/adventure.service';
import { GameState } from 'src/app/store/gameState';
import { SuccessCreateGameAction } from 'src/app/store/gameaction';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  gameTitle: string;
  currentPlotNode$: Observable<Plot>;
  currentPlotId: number;
  isShow: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adventureService: AdventureService,
    private router: Router, private store: Store<{ gamestate: GameState}>) {
      this.currentPlotNode$ = this.activatedRoute.paramMap.pipe(
        switchMap(params => {
          this.currentPlotId = +params.get('id');
          this.store.dispatch(SuccessCreateGameAction({plotId: this.currentPlotId}));
          return this.adventureService.getPlot(this.currentPlotId);
        })
      );
  }

  ngOnInit() {
    debugger;
    
  }

  ngOnDestroy(): void {
    //this.activatedRoute.params.subscribe.us
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

}

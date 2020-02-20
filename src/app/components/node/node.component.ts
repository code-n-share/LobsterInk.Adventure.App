import { Component, OnInit, Input } from '@angular/core';
import { GameState } from 'src/app/store/gameState';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GetGameAction } from 'src/app/store/gameaction';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() plot: Plot;
  @Input() hasParentNode = false;
  gamestates$: Observable<GameState>;
  gamestateSubscription: Subscription;
  playerName: string;
  gameStates: number[];

  constructor(private store: Store<{gamestate: GameState}>) { 
    this.gamestates$ = this.store.pipe(select('gamestate'));
  }

  ngOnInit() {
    debugger;
    this.gamestateSubscription = this.gamestates$
    .pipe(
      map(g=> {
        this.playerName = g.PlayerName;
        this.gameStates = g.PlotIds;
      })
    ).subscribe();

    this.store.dispatch(GetGameAction());
  }

  isNodeSelected(id) {
    if(this.gameStates.indexOf(id) >= 0){
      return true;
    }
    return false
  }

}

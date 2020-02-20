import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdventureService } from 'src/app/services/adventure.service';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store/gameState';
import { Reset, SetPlayerName } from 'src/app/store/gameaction';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
	gameState: any;
	playerName: string = 'player@email.com';
	adventure$: Observable<Adventure>;

	constructor(private router: Router, 
		private provider: AdventureService,
		private store: Store<{ gamestate: GameState}>) {
			this.store.dispatch(Reset());
		 }

	ngOnInit() {
		this.adventure$ = this.provider.getAdventure(1);
	}

	startNew() {
		this.store.dispatch(SetPlayerName({ playername: this.playerName }));
	}

}

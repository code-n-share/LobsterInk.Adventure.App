import { createAction, props } from '@ngrx/store';


export const GetGameAction = createAction(
    '[Game] - Get next step');

export const SuccessGetGameAction = createAction(
    '[Game] - Success Get Game Action',
    props<{ payload: number[] }>()
);

export const SuccessCreateGameAction = createAction(
    '[Game] - Success Create Game Action',
    props<{ plotId: number }>()
);

export const Reset = createAction('[GameState] Reset');

export const SetPlayerName = createAction('[GameState]- Set Player Name', props<{ playername: string }>());
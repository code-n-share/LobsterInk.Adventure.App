import { Action, createReducer, on } from '@ngrx/store';
import * as GameAction from './gameaction';
import { initializeState, GameState } from './gameState';

export const intialState = initializeState();

const reducer = createReducer(
    intialState,
    on(GameAction.GetGameAction, state => state),
    
    // on(GameAction.CreateGameAction, (state: GameState, plotId ) => {
    //     return { ...state, PlotIds: [...state.PlotIds, plotId] };
    // }),

    on(GameAction.SuccessCreateGameAction, (state: GameState, {plotId} ) => {
        return { ...state, PlotIds: [...state.PlotIds, plotId] };
    }),

    on(GameAction.SuccessGetGameAction, (state: GameState,{payload} ) => {
        return {...state, PlotIds: payload};
    }),

    on(GameAction.Reset, state => intialState),
    on(GameAction.SetPlayerName,(state: GameState, { playername }) => {
        return {...state, PlayerName: playername};
    })
  );
  
  export function GameReducer(state: GameState | undefined, action: Action) {
    return reducer(state, action);
  }
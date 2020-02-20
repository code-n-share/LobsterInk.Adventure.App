export class GameState {
    PlayerName: string;
    PlotIds:number [];
}

export const initializeState = (): GameState => {
    return { PlayerName: '', PlotIds: []}
}
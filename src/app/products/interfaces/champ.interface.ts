// === Interface de campeones --------------------------------------

export enum Lane {
    top, jg, mid, adc, support
}

export interface Champ {
    name: string;
    meta: boolean;
    lane: Lane;
}
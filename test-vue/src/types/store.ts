import type { ICharacter, Status } from ".";

export interface State {
    page: number,
    results: ICharacter[],
    totalRecords: number,
    filterStatus: Status | undefined;
    filterName: string | undefined;
}
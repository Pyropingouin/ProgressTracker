export type Rewards = {
  muscles?: number;
  flex?: number;
  code?: number;
  smut?: number;
  money?: number;
};

export interface Activity {
  id: number;
  name: string;
  emoji: string;
  rewards: Rewards;
}
interface PlayerModel {
  id: number;
  name: string;
}

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Messi",
  },
  {
    id: 2,
    name: "Mbappé",
  },
  {
    id: 3,
    name: "Haaland",
  },
  {
    id: 4,
    name: "Neymar",
  },
  {
    id: 5,
    name: "Vinícius Júnior",
  },
  {
    id: 6,
    name: "Kevin De Bruyne",
  },
  {
    id: 7,
    name: "Mohamed Salah",
  },
  {
    id: 8,
    name: "Harry Kane",
  },
  {
    id: 9,
    name: "Robert Lewandowski",
  },
  {
    id: 10,
    name: "Cristiano Ronaldo",
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

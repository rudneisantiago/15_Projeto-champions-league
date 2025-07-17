import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 88,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 77,
    },
  },
  {
    id: 3,
    name: "Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 89,
      Shooting: 91,
      Passing: 65,
      Dribbling: 80,
      Defending: 49,
      Physical: 88,
    },
  },
  {
    id: 4,
    name: "Neymar",
    club: "Al Hilal",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 87,
      Shooting: 83,
      Passing: 85,
      Dribbling: 93,
      Defending: 37,
      Physical: 61,
    },
  },
  {
    id: 5,
    name: "Vinícius Júnior",
    club: "Real Madrid",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 95,
      Shooting: 80,
      Passing: 78,
      Dribbling: 90,
      Defending: 35,
      Physical: 70,
    },
  },
  {
    id: 6,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 94,
      Dribbling: 87,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 7,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 90,
      Shooting: 89,
      Passing: 82,
      Dribbling: 90,
      Defending: 45,
      Physical: 75,
    },
  },
  {
    id: 8,
    name: "Harry Kane",
    club: "Bayern Munich",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 70,
      Shooting: 93,
      Passing: 83,
      Dribbling: 84,
      Defending: 47,
      Physical: 83,
    },
  },
  {
    id: 9,
    name: "Robert Lewandowski",
    club: "FC Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 75,
      Shooting: 91,
      Passing: 79,
      Dribbling: 86,
      Defending: 44,
      Physical: 82,
    },
  },
  {
    id: 10,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 81,
      Shooting: 92,
      Passing: 78,
      Dribbling: 85,
      Defending: 35,
      Physical: 77,
    },
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

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
  return player;
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index > -1) {
    database.splice(index, 1);
  }
};

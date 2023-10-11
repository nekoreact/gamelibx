type GameProps = {
    name: string,
    image?: string
    titlesList: GameItem[],
}

type GameItem = {
    id: number;
    image?: string;
    title?: string;
    description?: string;
    username?: string
};
  
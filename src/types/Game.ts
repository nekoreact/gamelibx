type GameProps = {
    name: string,
    image?: string
    titlesList: GameItem[],
}

type GameItem = {
    image?: string;
    title?: string;
    description?: string;
    username?: string
};
  
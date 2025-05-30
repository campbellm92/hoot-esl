import { Link } from "react-router-dom";
import { Card } from "@ui";
import { Button } from "@ui";
import { games } from "../../gamesConfig";

export default function GamesGrid() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4">
          {games.map((game) => (
            <Card
              key={game.id}
              variant="primaryOutline"
              title={game.name}
              content={game.description}
              image={game.image}
              button={
                <Link to={game.link}>
                  <Button>Play Game</Button>
                </Link>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

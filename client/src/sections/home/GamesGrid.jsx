import { Card } from "@ui";
import { Button } from "@ui";
import testImg from "../../assets/test.png";

export default function GamesGrid() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4">
          <Card
            variant="primaryOutline"
            image={testImg}
            title="This is a game"
            content="This is a nice description of the game"
            button={<Button>Play game</Button>}
          />
          <Card
            title="This is a game"
            content="This is a nice description of the game"
          />
          <Card
            title="This is a game"
            content="This is a nice description of the game"
          />
          <Card
            title="This is a game"
            content="This is a nice description of the game"
          />
        </div>
      </div>
    </>
  );
}

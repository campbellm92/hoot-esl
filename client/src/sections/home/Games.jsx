import { Card } from "@ui";
import { Button } from "@ui";
import testImg from "../../assets/test.png";

export default function Games() {
  return (
    <>
      <div className="flex justify-center w-10/12 gap-4">
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
    </>
  );
}

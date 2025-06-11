import { Link } from "react-router-dom";
import { Card } from "@ui";
import { Button } from "@ui";
import { tools } from "../../config/toolsConfig";

export default function ToolsGrid() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4">
          {tools.map((tool) => (
            <Card
              key={tool.id}
              variant="primaryOutline"
              title={tool.name}
              content={tool.description}
              //   image={tool.image}
              button={
                <Link to={tool.link}>
                  <Button>Scramble words</Button>
                </Link>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

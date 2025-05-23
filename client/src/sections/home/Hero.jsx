import { Button } from "@ui";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-10/12 h-auto p-4 border-4 border-text-primary rounded-lg">
      <div className="mb-4">
        <h2 className="font-semibold text-text-primary mb-4">
          Improve your English vocabulary with fun games!
        </h2>
        <h3 className="text-text-primary mb-4">
          <span className="font-semibold underline decoration-2 decoration-primary">
            English learners
          </span>
          : discover vocabulary at your level from the Oxford Dictionary's 5000
          most common words.
        </h3>
        <h3 className="text-text-primary mb-4">
          <span className="font-semibold underline decoration-2 decoration-primary">
            {" "}
            Teachers
          </span>
          : customise games to practise vocabulary you've been using in class
        </h3>
        <h3 className="font-semibold text-text-primary mb-4">All for free!</h3>
      </div>
      <div>
        <Button variant="primary">Discover games</Button>
      </div>
    </div>
  );
}

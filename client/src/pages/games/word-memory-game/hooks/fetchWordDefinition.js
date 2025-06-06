// change to fetch from local host, add fetch logic to index.js in server

export async function fetchWordDefinition(word) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/definition?word=${word}`
    );
    if (!response.ok) {
      throw new Error("Could not find definition for this word.");
    }
    const { definition } = await response.json();
    return definition;
  } catch (error) {
    console.log(error);
  }
}

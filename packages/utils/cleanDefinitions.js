// remove the markup tags in word definitions
export default function cleanDefinition(text) {
  return text.replace(/\{.*?\}/g, "").trim();
}

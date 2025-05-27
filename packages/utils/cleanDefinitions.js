// remove the markup tags in word definitions
export function cleanDefinition(text) {
  return text.replace(/\{.*?\}/g, "").trim();
}

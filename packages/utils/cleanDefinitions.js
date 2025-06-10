// remove the markup tags in word definitions
export default function cleanDefinition(text) {
  return text
    .replace(/\{.*?\}/g, ";") // replace tags with semicolon
    .replace(/;{2,}/g, ";") // collapse multiple semicolons
    .replace(/\s*;\s*/g, "; ") // normalise spaces around semicolons
    .replace(/^;\s*/, "") // remove leading semicolon
    .trim();
}

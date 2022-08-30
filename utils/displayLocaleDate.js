export default function displayLocaleDate(date = new Date()) {
  const d = new Date(date);
  const n = d.toLocaleDateString("fr-FR");
  return n;
}

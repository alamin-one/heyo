const avatargenerator = userName => {

  /* colors */
  const colors = ['0094AD', 'E57C2B', '8B5CF6', 'E11D48', '16A34A'];
  const i = userName[0].toUpperCase();
  const colorsIndex = i.charCodeAt(0) - 65;
  const color = colors[Math.floor(colorsIndex / 5.2)];
  return `https://placehold.co/40x40/${color}/FFFFFF?text=${i}`;
};
export default avatargenerator;

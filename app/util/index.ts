export const scrollIntoView = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
  }
};

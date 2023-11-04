export const toggleClass = (domEl, className) => {
  if (domEl.classList.contains(className))
    return domEl.classList.remove(className);

  return domEl.classList.add(className);
};

export const isKebabCase = (section: string, isLowerCase = true) => {
  /** string is empty? return false*/
  if (!section.length) return false;

  /*
   * all letters are not in lowerCase? return false
   * asdf ✅ , aAsdf ❌
   */
  if (section.toLowerCase() !== section) {
    return false;
  }
  /**
   * If isLowerCase is false, allow all upper case, else return false
   * ASDF ✅ , ASDf ❌
   */
  if (!isLowerCase && section.toUpperCase() !== section) return false;

  /** Is Snake Case? return false
   *  ASDF ✅ , ASD_f ❌
   */
  if (section.includes("_")) {
    return false;
  }
  /** if includes - ? check if it matches kebab case pattern
   * eg: asdf-basdf ✅ , -asdf ❌
   */
  if (section.includes("-")) {
    return /(\w+)-(\w)([\w-]*)/.test(section);
  }
  return true;
};

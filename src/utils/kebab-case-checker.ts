const isAlphabet = (arg = "") => /^[a-zA-Z]+$/.test(arg);

export const isKebabCase = (section: string, isLowerCase = true) => {
  /** Just insert alphabets & - that has length more than 1
   * asdf ✅ , 12 ❌
   */
  if (section.split("-").some((str) => !isAlphabet(str))) return false;

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

  /** if includes - ? check if it matches kebab case pattern
   * eg: asdf-basdf ✅ , -asdf ❌
   */
  if (section.includes("-")) {
    return /(\w+)-(\w)([\w-]*)/.test(section);
  }

  return true;
};

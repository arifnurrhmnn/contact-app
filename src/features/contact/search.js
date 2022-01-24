export const getFilteredContacts = (state, keyword) => {
  if (keyword) {
    const isKeywordExist = (array, string) =>
      array.toLowerCase().includes(string);
    return state.filter(
      (contact) =>
        isKeywordExist(contact.contact, keyword) ||
        isKeywordExist(contact.title, keyword)
    );
  }
  return state.contacts;
};

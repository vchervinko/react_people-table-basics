import { Person } from './types';

export const getParentInfo = (peopleFromServer: Person[]): Person[] => {
  return peopleFromServer.map(person => {
    const mother = peopleFromServer.find(p => p.name === person.motherName);
    const father = peopleFromServer.find(p => p.name === person.fatherName);

    return {
      ...person,
      mother,
      father,
    };
  });
};

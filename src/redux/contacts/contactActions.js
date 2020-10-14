import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      contact: {
        name: name,
        number: number,
        id: uuidv4(),
      },
    },
  };
};

const deleteContact = id => {
  return {
    type: 'contact/deleteContact',
    payload: {
      id,
    },
  };
};

const onChangeFilter = filter => {
  return {
    type: 'filter/onChange',
    payload: {
      filter,
    },
  };
};
export default { addContact, deleteContact, onChangeFilter };

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Section } from './section/Section';
import { Containers } from './containers/Container';
import { Form } from './contactsForm/ContactsForm.jsx';
import { Filter } from './filter/Filter';
import { Contacts } from './contacts/Contacts';
import { getAllContacts } from 'redux/contactOperations';




export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts())
  });

  
  return(
   <Section>
      <Containers title={'Phonebook'}>
        <Form />
      </Containers>
      <Containers title={'Filter'}>
        <Filter/>
      </Containers>
      <Containers title={'Contacts'}>
        <Contacts/>
      </Containers>
    </Section>
  );


}; 
import { useSelector, useDispatch } from 'react-redux';

import { ContactsList } from '../contactsList/ContactsList';
import { selectContacts, selectFilter, selectLoading } from '..//../redux/contactSlice';
import { deleteContactById } from '..//../redux/contactOperations';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader } from 'components/loader/Loader';



export const Contacts = () => {


    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();


    const filteredContacts = contacts.filter(contact => {
    return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
    });
  

    const onDeleteContact = contactId  => {
        dispatch(deleteContactById(contactId));
    };


    if (isLoading) {
        return <Loader/>
    }
    // console.log(isLoading)

    

    return (
        <>
            {contacts.length === 0 ? (
           Notify.success('There are no contatcs in your list, sorry')
            ) : filteredContacts.length > 0 ? (
            <ContactsList
                filteredContacts={filteredContacts}
                onDeleteContact={onDeleteContact}
            />
            ) : (
               Notify.failure('No contacts found that match the filter')
            )}
        </>
    );
};
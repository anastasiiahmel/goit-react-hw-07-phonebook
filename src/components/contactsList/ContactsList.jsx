import { ContactsStyle } from "./ContactsList.styled";



export const ContactsList = ({filteredContacts, onDeleteContact}) => {
    return(
        <ContactsStyle>
            {filteredContacts.map(({id, name, number}) => (
                <li className="list" key={id}>
                    <h3 className="list-name">{name}:</h3>
                    <p className="list-number">{number}</p>
                    <button className="btn btn-primary btn-block btn-large" 
                    type="button"
                    onClick={() => onDeleteContact(id)}
                    >Delete</button>
                </li>
            ))}
        </ContactsStyle>
    );
};

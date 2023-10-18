import { styled } from 'styled-components';

export const ContactsStyle = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
  font-size: 20px;
  .list {
    margin: 0;
    margin-top: 20px;
    display: flex;
    align-items: center;

    justify-content: space-between;
  }
  .list-name {
    width: 150px;
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    margin: 0;
    margin-right: 10px;
    flex-direction: column;
  }
  .list-number {
    width: 150px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    margin: 0;
    margin-right: 20px;
  }
  .btn-delete {
    color: #dcdcdc;
    border: none;
    margin-top: 10px;
    padding: 5px;
    width: 100px;
    display: inline;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background-color: #555555;
  }

  .btn-delete:hover {
    color: #333333;
    text-decoration: none;
    background-color: #dcdcdc;
  }
`;

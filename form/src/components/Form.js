import React, { Component } from 'react';
import { 
  Button, 
  Form, 
  Header, 
  Segment
} from 'semantic-ui-react';

import styles from './Form.css';

const CHECKBOX_STATES = {
  isInstitution: 'isInstitution',
  isLeader: 'isLeader'
};

const routes = [
  {
    key: '1 trasa',
    text: '1 trasa',
    value: '1 trasa'
  }, {
    key: '2 trasa',
    text: '2 trasa',
    value: '2 trasa'
  }
];

const hours = [
  {
    key: '1 godzina',
    text: '1 godzina',
    value: '1 godzina'
  }, {
    key: '2 godzina',
    text: '2 godzina',
    value: '2 godzina'
  }
];

class App extends Component {
  state = { 
    name: '', 
    [CHECKBOX_STATES.isInstitution]: false,
    [CHECKBOX_STATES.isLeader]: false 
  };

  toggle = (prop) => this.setState((prevState) => ({ [prop]: !prevState[prop] }));

  render() {
    return (
      <main className='main'>
        <Header as='h1'>
          Zgłoszenie grupy do Rajdu Św. Emeryka 2020
        </Header>
        <p>
          Opis formularza
        </p>
        <Segment>
          <Form>
            <Form.Input 
              label='Nazwa drużyny' 
              placeholder='Nazwa drużyny'
            />
            <Form.Checkbox 
              label='Czy instytucja?' 
              onChange={() => {this.toggle(CHECKBOX_STATES.isInstitution)}}
              checked={this.state[CHECKBOX_STATES.isInstitution]}
            />
            {this.state[CHECKBOX_STATES.isInstitution] && (
              <>
                <Form.Input 
                  label='Nazwa instytucji' 
                  placeholder='Nazwa instytucji'
                />
                <Form.Checkbox 
                  label='Czy są opiekunowie?' 
                  onChange={() => {this.toggle(CHECKBOX_STATES.isLeader)}}
                  checked={this.state[CHECKBOX_STATES.isLeader]}
                />
                {this.state[CHECKBOX_STATES.isLeader] && (
                  <Form.TextArea placeholder='Opiekun/Opiekunowie'></Form.TextArea>
                )}
              </>
            )}
            <Form.Dropdown 
              placeholder='Wybierz trasę'
              selection
              options={routes}
            />
            <Form.Dropdown 
              placeholder='Planowana godzina startu'
              selection
              options={hours}
            />
            <Form.Input 
              label='Kierownik drużyny' 
              placeholder='Imię i nazwisko'
            />
            <Form.Input 
              label='Adres email' 
              placeholder='Adres email'
            />
            <Form.Input 
              label='Numer telefonu' 
              placeholder='Numer telefonu'
            />
            <Button primary>
              Wyślij
            </Button>
          </Form>
        </Segment>
      </main>
    );
  }
};

export default App;
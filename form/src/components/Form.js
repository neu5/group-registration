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
  isLeader: 'isLeader',
  isPTTK: 'isPTTK',
  isTShirt: 'isTShirt',
  isTransport: 'isTransport',
  isRegulationsAccepted: 'isRegulationsAccepted'
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

const tShirtKind = [
  {
    key: 'damska',
    text: 'damska',
    value: 'damska'
  }, {
    key: 'męska',
    text: 'męska',
    value: 'męska'
  }
];

const tShirtsSizes = [
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

const destination = [
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

const departureTime = [
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
    [CHECKBOX_STATES.isLeader]: false,
    [CHECKBOX_STATES.isPTTK]: false,
    [CHECKBOX_STATES.isTShirt]: false,
    [CHECKBOX_STATES.isTransport]: false,
    [CHECKBOX_STATES.isRegulationsAccepted]: false
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
            <Segment>
              <Header as='h1'>
                Uczestnicy
              </Header>
              <Button positive>Dodaj uczestnika +</Button>
              <Form.Input
                label='Imię i nazwisko'
                placeholder='Imię i nazwisko'
              />
              <Form.Input
                label='Data urodzenia'
                placeholder='Data urodzenia'
              />
              <Form.Checkbox
                label='Czy jest członkiem PTTK?'
                onChange={() => {this.toggle(CHECKBOX_STATES.isPTTK)}}
                checked={this.state[CHECKBOX_STATES.isPTTK]}
              />
              {this.state.isPTTK && (
                <Form.Input
                  label='Nr legitymacji PTTK'
                  placeholder='Nr legitymacji PTTK'
                />
              )}
              <Form.Checkbox
                label='Koszulka?'
                onChange={() => {this.toggle(CHECKBOX_STATES.isTShirt)}}
                checked={this.state[CHECKBOX_STATES.isTShirt]}
              />
              {this.state.isTShirt && (
                <>
                  <Form.Dropdown
                    placeholder='Rodzaj'
                    selection
                    options={tShirtKind}
                  />
                  <Form.Dropdown
                    placeholder='Rozmiar'
                    selection
                    options={tShirtsSizes}
                  />
                </>
              )}
              <Form.Checkbox
                label='Transport?'
                onChange={() => {this.toggle(CHECKBOX_STATES.isTransport)}}
                checked={this.state[CHECKBOX_STATES.isTransport]}
              />
              {this.state.isTransport && (
                <>
                  <Form.Dropdown
                    placeholder='Cel'
                    selection
                    options={destination}
                  />
                  <Form.Dropdown
                    placeholder='Godzina odjazdu'
                    selection
                    options={departureTime}
                  />
                </>
              )}
              <Button negative>Usuń uczestnika -</Button>
              <Button positive>Dodaj uczestnika +</Button>
            </Segment>
            <Form.TextArea placeholder='Uwagi'></Form.TextArea>
            <Form.Checkbox
              label='Akceptuję regulamin'
              onChange={() => {this.toggle(CHECKBOX_STATES.isRegulationsAccepted)}}
              checked={this.state[CHECKBOX_STATES.isRegulationsAccepted]}
            />
            <Segment>
              Captcha
            </Segment>
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
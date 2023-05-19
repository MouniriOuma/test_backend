import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService';

function CreateClientComponent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ice, setICE] = useState('');
  const [raisonSocial, setRaisonSocial] = useState('');
  const [adresse, setAdresse] = useState('');
  const [contact, setContact] = useState('');
  const [adresseEmail, setAdresseEmail] = useState('');

  useEffect(() => {
    if (id === '_add') {
      return;
    } else {
      ClientService.getClientById(id).then((res) => {
        let client = res.data;
        setICE(client.ice);
        setRaisonSocial(client.raisonSocial);
        setAdresse(client.adresse);
        setContact(client.contact);
        setAdresseEmail(client.adresseEmail);
      });
    }
  }, [id]);

  const saveOrUpdateClient = (e) => {
    e.preventDefault();
    let client = {
      ice: ice,
      raisonSocial: raisonSocial,
      adresse: adresse,
      contact: contact,
      adresseEmail: adresseEmail
    };

    console.log('client => ' + JSON.stringify(client));

    if (id === '_add') {
      ClientService.createClient(client).then((res) => {
        navigate('/clients');
      });
    } else {
      ClientService.updateClient(client, id).then((res) => {
        navigate('/clients');
      });
    }
  };

  const changeICEHandler = (event) => {
    setICE(event.target.value);
  };

  const changeRaisonSocialHandler = (event) => {
    setRaisonSocial(event.target.value);
  };

  const changeAdresseHandler = (event) => {
    setAdresse(event.target.value);
  };

  const changeContactHandler = (event) => {
    setContact(event.target.value);
  };

  const changeAdresseEmailHandler = (event) => {
    setAdresseEmail(event.target.value);
  };

  const cancel = () => {
    navigate('/clients');
  };

  const getTitle = () => {
    if (id === '_add') {
      return <h3 className="text-center">Add Client</h3>;
    } else {
      return <h3 className="text-center">Update Client</h3>;
    }
  };

    
  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>ICE:</label>
                  <input
                    placeholder="ICE"
                    name="ice"
                    className="form-control"
                    value={ice}
                    onChange={changeICEHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Raison Sociale:</label>
                  <input
                    placeholder="Raison Sociale"
                    name="raisonSocial"
                    className="form-control"
                    value={raisonSocial}
                    onChange={changeRaisonSocialHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Adresse:</label>
                  <input
                    placeholder="Adresse"
                    name="adresse"
                    className="form-control"
                    value={adresse}
                    onChange={changeAdresseHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Contact:</label>
                  <input
                    placeholder="Contact"
                    name="contact"
                    className="form-control"
                    value={contact}
                    onChange={changeContactHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Adresse Email:</label>
                  <input
                    placeholder="Adresse Email"
                    name="adresseEmail"
                    className="form-control"
                    value={adresseEmail}
                    onChange={changeAdresseEmailHandler}
                  />
                </div>
                <button className="btn btn-success" onClick={saveOrUpdateClient}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: '10px' }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateClientComponent;
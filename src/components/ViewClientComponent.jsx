import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClientService from '../services/ClientService';

function ViewClientComponent() {
  const { id } = useParams();
  const [client, setClient] = useState({});

  useEffect(() => {
    ClientService.getClientById(id).then((res) => {
      setClient(res.data);
    });
  }, [id]);

  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Client Details</h3>
        <div className="card-body">
          <div className="row">
            <label>ICE: </label>
            <div>{client.ice}</div>
          </div>
          <div className="row">
            <label>Raison Sociale: </label>
            <div>{client.raisonSocial}</div>
          </div>
          <div className="row">
            <label>Adresse: </label>
            <div>{client.adresse}</div>
          </div>
          <div className="row">
            <label>Contact: </label>
            <div>{client.contact}</div>
          </div>
          <div className="row">
            <label>Adresse Email: </label>
            <div>{client.adresseEmail}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewClientComponent;


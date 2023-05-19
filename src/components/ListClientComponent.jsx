import React, { Component } from 'react';
import ClientService from '../services/ClientService';
import { Link, useNavigate } from 'react-router-dom';


function ListClientComponent() {
    const [clients, setClients] = React.useState([]);

    React.useEffect(() => {
        ClientService.getClients().then((res) => {
            setClients(res.data);
        });
    }, []);

    const navigate = useNavigate();

    const deleteClient = (id) => {
        ClientService.deleteClient(id)
          .then(() => {
            setClients((prevClients) =>
              prevClients.filter((client) => client.ICE !== id)
              
            );
            window.location.reload();
          })
          .catch((error) => {
            // Handle the error here
            console.log('Error deleting client:', error);
            
          });
      };
      
      
    const viewClient = (id) => {
        navigate(`/view-client/${id}`);
    };

    const editClient = (id) => {
        navigate(`/edit-client/${id}`);
    };

    const addClient = () => {
        navigate('/add-client/_add');
    };

    return (
        <div>
            <h2 className="text-center">Clients List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addClient}>
                    Add Client
                </button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ICE</th>
                            <th>Raison Sociale</th>
                            <th>Adresse</th>
                            <th>Contact</th>
                            <th>Adresse Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.ice}>
                                <td>{client.ice}</td>
                                <td>{client.raisonSocial}</td>
                                <td>{client.adresse}</td>
                                <td>{client.contact}</td>
                                <td>{client.adresseEmail}</td>
                                <td>
                                    <button
                                        onClick={() => editClient(client.ice)}
                                        className="btn btn-info"
                                    >
                                        Update
                                    </button>
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => deleteClient(client.ice)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        style={{ marginLeft: '10px' }}
                                        onClick={() => viewClient(client.ice)}
                                        className="btn btn-info"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListClientComponent;

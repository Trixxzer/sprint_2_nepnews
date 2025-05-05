import React, { useState } from 'react';

const Requests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      currentRole: 'Reader',
      requestedRole: 'Author',
      date: 'Jan 15, 2023'
    },
    {
      id: 2,
      name: 'Mike Peters',
      currentRole: 'Reader',
      requestedRole: 'Editor',
      date: 'Jan 14, 2023'
    },
    {
      id: 3,
      name: 'John Smith',
      currentRole: 'Reader',
      requestedRole: 'Author',
      date: 'Jan 12, 2023'
    },
    {
      id: 4,
      name: 'Emily Davis',
      currentRole: 'Author',
      requestedRole: 'Editor',
      date: 'Jan 10, 2023'
    },
    {
      id: 5,
      name: 'Robert Wilson',
      currentRole: 'Reader',
      requestedRole: 'Author',
      date: 'Jan 8, 2023'
    }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // In a real app, you would also update the user's role in the database
  };

  const handleReject = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // In a real app, you would also notify the user that their request was rejected
  };

  return (
    <div className="requests-page">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Current Role</th>
              <th>Requested Role</th>
              <th>Request Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>
                  <span className={`role-badge ${request.currentRole.toLowerCase()}`}>
                    {request.currentRole}
                  </span>
                </td>
                <td>
                  <span className={`role-badge ${request.requestedRole.toLowerCase()}`}>
                    {request.requestedRole}
                  </span>
                </td>
                <td>{request.date}</td>
                <td className="actions-cell">
                  <button 
                    className="accept-btn"
                    onClick={() => handleAccept(request.id)}
                  >
                    <i className="ti ti-check"></i> Accept
                  </button>
                  <button 
                    className="reject-btn"
                    onClick={() => handleReject(request.id)}
                  >
                    <i className="ti ti-x"></i> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;
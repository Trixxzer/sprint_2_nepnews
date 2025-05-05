import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      role: 'Author',
      status: 'Active',
      editing: false
    },
    {
      id: 2,
      name: 'Mike Peters',
      email: 'mike.p@example.com',
      role: 'Reader',
      status: 'Active',
      editing: false
    },
    {
      id: 3,
      name: 'Alex Turner',
      email: 'alex.t@example.com',
      role: 'Editor',
      status: 'Active',
      editing: false
    },
    {
      id: 4,
      name: 'Emily White',
      email: 'emily.w@example.com',
      role: 'Author',
      status: 'Inactive',
      editing: false
    },
    {
      id: 5,
      name: 'John Smith',
      email: 'john.s@example.com',
      role: 'Reader',
      status: 'Active',
      editing: false
    },
    {
      id: 6,
      name: 'Lisa Brown',
      email: 'lisa.b@example.com',
      role: 'Editor',
      status: 'Active',
      editing: false
    }
  ]);

  const toggleEdit = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, editing: !user.editing } : user
    ));
  };

  const changeRole = (id, newRole) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  const toggleStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
    ));
  };

  return (
    <div className="users-page">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Current Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span 
                    className={`status-badge ${user.status.toLowerCase()}`}
                    onClick={() => toggleStatus(user.id)}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="actions-cell">
                  {user.editing ? (
                    <div className="role-selector">
                      <select 
                        value={user.role}
                        onChange={(e) => changeRole(user.id, e.target.value)}
                        className="role-dropdown"
                      >
                        <option value="Reader">Reader</option>
                        <option value="Author">Author</option>
                        <option value="Editor">Editor</option>
                      </select>
                      <button 
                        className="save-btn"
                        onClick={() => toggleEdit(user.id)}
                      >
                        <i className="ti ti-check"></i> Save
                      </button>
                    </div>
                  ) : (
                    <button 
                      className="edit-btn"
                      onClick={() => toggleEdit(user.id)}
                    >
                      <i className="ti ti-edit"></i> Change Role
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
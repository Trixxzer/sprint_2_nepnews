import React from 'react';
import StatCard from './StatCard';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      change: '+12%',
      changeType: 'positive',
      icon: 'ti ti-users',
      iconBg: '#DBEAFE',
      iconColor: '#2563EB'
    },
    {
      title: 'Active Authors',
      value: '587',
      change: '+8%',
      changeType: 'positive',
      icon: 'ti ti-pencil',
      iconBg: '#D1FAE5',
      iconColor: '#059669'
    },
    {
      title: 'Pending Role Requests',
      value: '47',
      change: '-5%',
      changeType: 'negative',
      icon: 'ti ti-clock',
      iconBg: '#FEF3C7',
      iconColor: '#D97706'
    }
  ];

  const activities = [
    {
      title: 'New User Registration',
      user: 'Sarah Johnson',
      role: 'Reader',
      date: 'Jan 15, 2023',
      status: 'Completed'
    },
    {
      title: 'Role Change Request',
      user: 'Mike Peters',
      role: 'Reader',
      date: 'Jan 14, 2023',
      status: 'Pending'
    },
    {
      title: 'Article Submission',
      user: 'Alex Turner',
      role: 'Author',
      date: 'Jan 14, 2023',
      status: 'Completed'
    },
    {
      title: 'Account Deactivation',
      user: 'Emily White',
      role: 'Editor',
      date: 'Jan 13, 2023',
      status: 'Completed'
    },
    {
      title: 'Role Change Request',
      user: 'John Smith',
      role: 'Reader',
      date: 'Jan 12, 2023',
      status: 'Pending'
    }
  ];

  return (
    <div className="dashboard">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="recent-activities">
        <h2 className="section-title">Recent Activities</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Activity Title</th>
                <th>User Name</th>
                <th>Role</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.title}</td>
                  <td>{activity.user}</td>
                  <td>
                    <span className={`role-badge ${activity.role.toLowerCase()}`}>
                      {activity.role}
                    </span>
                  </td>
                  <td>{activity.date}</td>
                  <td>
                    <span className={`status-badge ${activity.status.toLowerCase()}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
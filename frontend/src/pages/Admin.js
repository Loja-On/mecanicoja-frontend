
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/admin/users', {
      headers: { Authorization: 'Bearer ' + token }
    }).then(res => setUsers(res.data));

    axios.get('http://localhost:5000/api/admin/orders', {
      headers: { Authorization: 'Bearer ' + token }
    }).then(res => setOrders(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Usuários</h2>
      <ul className="mb-4">
        {users.map(user => (
          <li key={user._id}>{user.name} ({user.role})</li>
        ))}
      </ul>
      <h2 className="text-xl mb-2">Pedidos</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>{order.description} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
}

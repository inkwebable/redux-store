import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from './checkoutSlice';

const YourDetails = ({ userDetails }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(true);
  const dispatch = useDispatch();

  const valid = () => {
    return (firstName.length > 0 && lastName.length > 0 && email.length > 0);
  }

  const handleUpdateUser = (e) => {
    e.preventDefault();

    if (valid()) {
      dispatch(updateUser({
        firstName,
        lastName,
        email
      }));

      setEditing(false);
    }
  }

  useEffect(() => {
    if (userDetails) {
      setFirstName(userDetails.firstName)
      setLastName(userDetails.lastName);
      setEmail(userDetails.email);
    }
  }, [userDetails])

  return (
    <>
      <h3>Your Details</h3>
      <form onSubmit={handleUpdateUser}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                 required disabled={!editing}/>
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} required disabled={!editing}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={!editing}/>
        </div>
        <br/>
        {!editing ? (
          <span>
              <button type="text" className="waves-effect waves-light btn" onClick={() => setEditing(true)}>Change</button>
            </span>
        ) : (
          <button className="waves-effect waves-light btn" disabled={!valid()}>Confirm</button>
        )}
      </form>
    </>
  )
};

export default YourDetails;

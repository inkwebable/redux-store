import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Address = ({subTitle = 'Your', showShipping = true, address, handleSave}) => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [postcode, setPostcode] = useState('');
  const [useAsShipping, setUseAsShipping] = useState(true);
  const [editing, setEditing] = useState(true);
  const dispatch = useDispatch();

  const valid = () => {
    return (addressLine1.length > 0 && addressLine2.length > 0 && postcode.length > 0);
  }

  useEffect(() => {
    if (address) {
      setAddressLine1(address.addressLine1);
      setAddressLine2(address.addressLine2);
      setAddressLine3(address.addressLine3);
      setPostcode(address.postcode);

      if (showShipping && !editing) {
        setUseAsShipping(address.useAsShipping)
      }
    }
  }, [address, editing])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valid()) {
      const address = {
        addressLine1,
        addressLine2,
        addressLine3,
        postcode,
      }

      if (showShipping) {
        address.useAsShipping = useAsShipping
      }

      dispatch(handleSave(address));
      setEditing(false);
    }
  }

  const handleChecked = (e) => {
    setUseAsShipping(e.target.checked);
  }

  return (
    <>
      <h3>{subTitle} Address</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address-line-1">Address Line 1</label>
          <input type="text" name="address-line-1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} required disabled={!editing} />
        </div>
        <div>
          <label htmlFor="address-line-2">Address Line 2</label>
          <input type="text" name="address-line-2" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} required disabled={!editing} />
        </div>
        <div>
          <label htmlFor="address-line-3">Address Line 3</label>
          <input type="text" name="address-line-3" value={addressLine3} onChange={(e) => setAddressLine3(e.target.value)} required disabled={!editing} />
        </div>
        <div>
          <label htmlFor="postcode">Postcode</label>
          <input type="text" name="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} required disabled={!editing} />
        </div>
        {showShipping && (
          <div>
            <label>
              <input type="checkbox" className="filled-in" checked={useAsShipping} onChange={handleChecked} disabled={!editing} />
              <span>Use address for shipping</span>
            </label>
          </div>
        )}
        <br/>
        <div>
          {!editing ? (
            <span>
              <button type="text" className="waves-effect waves-light btn" onClick={() => setEditing(true)}>Change</button>
            </span>
          ) : (
            <button className="waves-effect waves-light btn" disabled={!valid()}>Confirm</button>
          )}
        </div>
      </form>
    </>
  )
};

export default Address;

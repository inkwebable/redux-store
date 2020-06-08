import { createSlice } from '@reduxjs/toolkit';

const initState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    valid: false,
  },
  address: {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postcode: '',
    useAsShipping: true,
    valid: false,
  },
  shippingAddress: {
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postcode: '',
    valid: false,
  }
}

export const checkout = createSlice({
  name: 'checkout',
  initialState: initState,
  reducers: {
    updateUser(state, action) {
      const { firstName, lastName, email } = action.payload;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
      state.user.valid = true;
    },
    updateAddress(state, action) {
      const { addressLine1, addressLine2, addressLine3, postcode, useAsShipping = true } = action.payload;
      state.address.addressLine1 = addressLine1;
      state.address.addressLine2 = addressLine2;
      state.address.addressLine3 = addressLine3;
      state.address.postcode = postcode;
      state.address.useAsShipping = useAsShipping;
      state.address.valid = true;

      if (useAsShipping) {
        state.shippingAddress.addressLine1 = addressLine1;
        state.shippingAddress.addressLine2 = addressLine2;
        state.shippingAddress.addressLine3 = addressLine3;
        state.shippingAddress.postcode = postcode;
        state.shippingAddress.valid = true;
      }
    },
    updateShippingAddress(state, action) {
      const { addressLine1, addressLine2, addressLine3, postcode} = action.payload;
      state.shippingAddress.addressLine1 = addressLine1;
      state.shippingAddress.addressLine2 = addressLine2;
      state.shippingAddress.addressLine3 = addressLine3;
      state.shippingAddress.postcode = postcode;
      state.shippingAddress.valid = true;

      if (Object.is(state.shippingAddress.addressLine1, state.address.addressLine1)
        && Object.is(state.shippingAddress.addressLine2, state.address.addressLine2)
        && Object.is(state.shippingAddress.addressLine3, state.address.addressLine3)
        && Object.is(state.shippingAddress.postcode, state.address.postcode)) {
        state.address.useAsShipping = true;
      }
    }
  }
})

export const { updateUser, updateAddress, updateShippingAddress } = checkout.actions;

export const selectUser = state => state.checkout.user;
export const selectAddress = state => state.checkout.address;
export const selectShippingAddress = state => state.checkout.shippingAddress;
export const sectionsValid = state => (state.checkout.user.valid && state.checkout.address.valid)

export default checkout.reducer;

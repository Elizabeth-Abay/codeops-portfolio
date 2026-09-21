import React, { useState } from 'react';

function DeliveryForm({ onBack }) {
  // Requirement 1: Single state object for form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: ''
  });

  // Handle all input updates in a single function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Requirement 2: TeleBirr validation (09... / 07... with 10 digits or +251...)
  const isValidTeleBirr = (phone) => {
    const teleBirrRegex = /^(?:\+251|0)[97]\d{8}$/;
    return teleBirrRegex.test(phone.trim());
  };

  // Button disabled unless phone is valid AND name/area are not empty
  const isFormValid =
    isValidTeleBirr(formData.phone) &&
    formData.name.trim() !== '' &&
    formData.area.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    console.log('Submitted Data:', formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <button onClick={onBack} style={{ marginBottom: '15px', cursor: 'pointer' }}>
        &larr; Back to Menu
      </button>

      <h2>Delivery Details</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Abebe Bikila"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>TeleBirr Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0912345678 or 0712345678"
            required
            style={{ width: '100%', padding: '8px' }}
          />
          {formData.phone && !isValidTeleBirr(formData.phone) && (
            <small style={{ color: 'red' }}>Enter a valid TeleBirr number (e.g. 09... or 07...)</small>
          )}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Delivery Area / Subcity:</label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="e.g. Bole, Megenagna"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            padding: '10px',
            marginTop: '10px',
            backgroundColor: isFormValid ? '#28a745' : '#ccc',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: isFormValid ? 'pointer' : 'not-allowed'
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default DeliveryForm;
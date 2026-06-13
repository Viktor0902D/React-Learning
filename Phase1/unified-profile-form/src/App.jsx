import { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="profile-form">
      <h1>Unified Profile Form</h1>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      {formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phone && (
          <div className="profile-summary">
            <h3>
              {" "}
              Welcome {formData.firstName} {formData.lastName}!
            </h3>
            <p>Your email: {formData.email}</p>
            <p>Your phone: {formData.phone}</p>
          </div>
        )}
    </div>
  );
};

export default ProfileForm;
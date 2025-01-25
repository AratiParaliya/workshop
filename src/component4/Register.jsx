import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    birthdate: "",
    nextAppointment: "",
  });

  const [errors, setErrors] = useState({});
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  // Validates the form and updates errors
  const validateForm = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "name":
        newErrors[name] = /^[A-Za-z\s]+$/.test(value.trim())
          ? ""
          : "Name must contain only letters";
        break;
      case "email":
        newErrors[name] = /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Enter a valid email";
        break;
      case "phone":
        newErrors[name] = /^\d{10}$/.test(value)
          ? ""
          : "Phone number must be 10 digits";
        break;
      case "password":
        newErrors[name] =
          value.trim().length >= 8
            ? ""
            : "Password must be at least 8 characters";
        break;
      case "birthdate":
        newErrors[name] = value.trim() === "" ? "Birthdate is required" : "";
        break;
      case "nextAppointment":
        newErrors[name] = value.trim() === "" ? "Next appointment is required" : "";
        break;
      default:
        break;
    }

    setErrors(newErrors);

    // Enable or disable button
    const isFormValid = Object.values(formData).every(
      (field) => field.trim() !== ""
    ) && Object.values(newErrors).every((error) => error === "");

    setButtonDisabled(!isFormValid);
  };

  // Handles input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateForm(name, value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User Added Successfully!");
    console.log("Form Data:", formData);

    // Reset form and errors
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      birthdate: "",
      nextAppointment: "",
    });
    setErrors({});
    setButtonDisabled(true);
  };

  // Inline styles
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f3f4f6",
    },
    form: {
      padding: "20px",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
    },
    inputGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151",
      marginBottom: "5px",
    },
    input: {
      width: "100%",
      border: "none",
      borderBottom: "2px solid #d1d5db",
      padding: "8px 0",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.3s",
    },
    inputFocus: {
      borderColor: "#3b82f6",
    },
    error: {
      fontSize: "12px",
      color: "#ef4444",
      marginTop: "5px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#3b82f6",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonDisabled: {
      backgroundColor: "#d1d5db",
      cursor: "not-allowed",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h1 className="text-xl font-bold text-center mb-4">Add User</h1>
        {["name", "email", "phone", "password", "birthdate", "nextAppointment"].map(
          (field, index) => (
            <div key={index} style={styles.inputGroup}>
              <label
                htmlFor={field}
                style={styles.label}
              >
                {field === "nextAppointment"
                  ? "Next Appointment"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
            
            
                  type={//+
                    field === "email"//+
                      ? "email"//+
                      : field === "password"//+
                      ? "password"//+
                      : field === "birthdate" || field === "nextAppointment"//+
                      ? "date"//+
                      : "text"//+
                  }//+
                  name={field}//+
                  id={field}//+
                  value={formData[field]}//+
                  onChange={handleInputChange}//+
                  style={{//+
                    ...styles.input,//+
                    ...(errors[field] ? { borderColor: "#ef4444" } : {}),
                  }}//+
                  placeholder={field === "nextAppointment" ? "Next Appointment" : field.charAt(0).toUpperCase() + field.slice(1)}//+
                />

{errors [field] && <div style={styles.error}>{errors [field]}</div>}
</div> 
          )
        )}
        <button
          type="submit"
          disabled={isButtonDisabled}
          style={{
            ...styles.button,
            ...(isButtonDisabled ? styles.buttonDisabled : {}),
          }}
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
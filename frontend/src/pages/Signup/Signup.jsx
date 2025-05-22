// src/pages/Register.jsx
import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      setMessage("✅ Inscription réussie !");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.message || "Erreur inconnue"));
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Créer un compte</h2>
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">S'inscrire</button>
        {message && <p className="message">{message}</p>}
        <p>you have already an account <a href="/Login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;

"use client"
import React, { useState } from 'react';

const TokenForm: React.FC = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [initialSupply, setInitialSupply] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tokenData = { name, symbol, imageUrl, initialSupply };
    console.log("Token Data:", tokenData);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "1em", textAlign: "center" }}>
      <h2>Create Your Token</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <label>
            Token Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter token name" 
              required 
              style={{ width: "100%", padding: "0.5em", marginTop: "0.5em" , color : "black" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label>
            Symbol:
            <input 
              type="text" 
              value={symbol} 
              onChange={(e) => setSymbol(e.target.value)} 
              placeholder="Enter symbol" 
              required 
              style={{ width: "100%", padding: "0.5em", marginTop: "0.5em" , color : "black"}}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label>
            Image URL:
            <input 
              type="url" 
              value={imageUrl} 
              onChange={(e) => setImageUrl(e.target.value)} 
              placeholder="Enter image URL" 
              required 
              style={{ width: "100%", padding: "0.5em", marginTop: "0.5em", color : "black" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label>
            Initial Supply:
            <input 
              type="number" 
              value={initialSupply} 
              onChange={(e) => setInitialSupply(e.target.value)} 
              placeholder="Enter initial supply" 
              required 
              style={{ width: "100%", padding: "0.5em", marginTop: "0.5em" , color : "black"}}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "0.75em 1.5em", fontSize: "1em", border: "2px solid white", borderRadius: "10px" }}>Submit</button>      </form>
    </div>
  );
};

export default TokenForm;

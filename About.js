import React from 'react'

export default function About() {
  return (
    <div>
     <h1
  className="text-center fw-bold text-uppercase"
  style={{
    fontFamily: "'Montserrat', sans-serif",
    color: "#2C3E50",
    marginTop: "60px" // increased top margin
  }}
>
  about
</h1>
<hr
  className="mx-auto"
  style={{
    height: "3px",               // thickness of the line
    width: "70%",                // width of the line
    backgroundColor: "#2C3E50",  // same as heading color
    border: "none",              // remove default border
    marginTop: "20px",           // optional spacing above
    marginBottom: "20px"         // optional spacing below
  }}
/>
<p
  className="text-end mt-3 mb-3"
  style={{
    textAlign: "justify",
    fontFamily: "'Roboto', sans-serif",
    marginLeft: "50px",
    marginRight: "50px"
  }}
>
  We are your Trusted Partner for Logistics 
and Supply Solutions. We understand the 
challenges and complexities involved in 
the logistics and supply industry. With 
years of experience and a team of 
dedicated professionals, we have built a 
reputation for delivering exceptional 
services that meet the unique 
requirements of our clients. Our 
commitment to innovation, reliability, 
and customer satisfaction distinguishes us 
as a leading logistics and supplies 
company in the East African market.
</p>
<p
  className="text-end mt-3 mb-3"
  style={{
    textAlign: "justify",
    fontFamily: "'Roboto', sans-serif",
    marginLeft: "50px",
    marginRight: "50px"
  }}
>
 Our mission is to provide efficient, 
cost-effective, and tailor-made logistics 
and supply solutions that empower our 
clients to thrive in a rapidly evolving 
marketplace. We strive to build 
long-lasting partnerships based on trust, 
transparency, and mutual success, 
enabling us to be the preferred choice for 
any supply needs.
</p>
<div
  className="d-flex align-items-start mt-3 mb-3"
  style={{ marginLeft: "50px", marginRight: "50px" , marginTop:"30px"}}
>
  <div style={{ flex: 1,marginRight: "20px" }}>
    <ul
      className="text-end"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      <li className="mb-2">Medical supplies</li>
      <li className="mb-2">Water and sanitation equipment</li>
      <li className="mb-2">Shelter Materials</li>
      <li className="mb-2">Office and Educational supplies</li>
      <li className="mb-2">Agricultural and farming tools</li>
      <li className="mb-2">Procurement consulting</li>
      <li className="mb-2">Car Spare parts and General repairs</li>
      <li className="mb-2">Logistics and transportation</li>
      <li className="mb-2">Clothing and textiles</li>
      <li className="mb-2">Communication equipment</li>
      <li className="mb-2">Ground Water Drilling</li>
    </ul>
  </div>
</div>
    </div>
  )
}

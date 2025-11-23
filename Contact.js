import React from 'react'

export default function Contact() {
  return (
    <div>
     <section
  className="py-5"
  style={{ backgroundColor: "#d7d5d5ff", marginTop:"80px" }} // light grey background
>
  <div className="container">
    {/* Heading */}
    <h1
      className="text-center fw-bold text-uppercase mb-4"
      style={{ fontFamily: "'Montserrat', sans-serif", color: "#2C3E50" }}
    >
      Contact Us
    </h1>

    {/* Contact Info (left-aligned) */}
    <div className="d-flex flex-column align-items-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* Address */}
      <div className="mb-3">
        <h5 className="fw-bold">Address</h5>
        <p className="mb-0">HEAD OFFICE: Kampala
long Sir apollo Road </p>
        <p>BRANCH: Adjumani, Moyo, Yumbe, Koboko
Arua and Gulu Branches</p>
        <p>P.O. Box 155470, Kampala GPO</p>
      </div>

      {/* Email */}
      <div className="mb-3">
        <h5 className="fw-bold">Email</h5>
        <p className="mb-0">kurube203998@gmail.com</p>
      </div>

      {/* Phone */}
      <div className="mb-3">
        <h5 className="fw-bold">Phone</h5>
        <p className="mb-0">+256772387608</p>
        <p>+256393224103</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

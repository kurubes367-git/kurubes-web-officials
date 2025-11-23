import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white py-3 min-vh-10 w-100 bottom-0" style={{ marginTop: "100px" }}>
  <div className="container">
    <div className="row">
      {/* Column 1 */}
      <div className="col-md-4 mb-3">
        <h5>About Us</h5>
        <p>
          We are a company committed to providing the best services and products for our customers.
        </p>
      </div>

      {/* Column 2 */}
      <div className="col-md-4 mb-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#about" className="text-white text-decoration-none">About</a></li>
          <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="col-md-4 mb-3">
        <h5>Contact</h5>
        <p>Email: kurube203998@gmail.com</p>
        <p>Phone: +256772387608, +256393224103</p>
      </div>
    </div>

    <hr className="bg-white" />

    {/* Footer Bottom */}
    <div className="text-center pb-3">
      &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

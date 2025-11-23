import React from 'react'
import who from './who.png'
import mission from './mission.png'
import choose from './choose.png'
import s1 from './s1.png'
import s2 from './s2.png'
import s3 from './s3.png'
import s4 from './s4.png'
import s5 from './s5.png'
import s6 from './s6.png'
import s7 from './s7.png'
export default function Home() {
  return (
    <div  >
      <h1 className="text-center text-dark fw-bold text-uppercase" style={{ marginTop: "80px" }}>
        Who we are
      </h1>
      <hr
  className="mx-auto"
  style={{
    height: "5px",        // HR thickness
    width: "70%",         // HR width
    backgroundColor: "#212529", // Bootstrap text-dark color
    border: "none",       // Remove default border
    marginTop: "20px",    // Optional spacing above
    marginBottom: "20px"  // Optional spacing below
  }}/>
  <div className="d-flex align-items-start mt-3 mb-3" style={{ marginLeft: "120px", marginRight: "120px" }}>
  <p
    className="text-justify mb-0"
    style={{ fontFamily: "'Roboto', sans-serif", flex: 1, marginRight: "120px", marginTop:"20px"}}
  >
    We are your Trusted Partner for Logistics and Supply Solutions. We understand the challenges and complexities involved in the logistics and supply industry. With years of experience and a team of dedicated professionals, we have built a reputation for delivering exceptional services that meet the unique requirements of our clients. Our commitment to innovation, reliability, and customer satisfaction distinguishes us as a leading logistics and supplies company in the East African market.
  </p>
  <img
    src={who}
    alt="Example"
    className="ms-3"
    style={{ width: "180px", height: "180px", objectFit: "cover" }}
  />
</div>
<h1 className="text-center text-dark fw-bold text-uppercase" style={{ marginTop: "50px" }}>
        mission
      </h1>
      <hr
  className="mx-auto"
  style={{
    height: "5px",        // HR thickness
    width: "70%",         // HR width
    backgroundColor: "#212529", // Bootstrap text-dark color
    border: "none",       // Remove default border
    marginTop: "20px",    // Optional spacing above
    marginBottom: "20px"  // Optional spacing below
  }}/>
  <div className="d-flex align-items-start mt-3 mb-3" style={{ marginLeft: "120px", marginRight: "120px" }}>
  <p
    className="text-justify mb-0"
    style={{ fontFamily: "'Roboto', sans-serif", flex: 1, marginRight: "120px", marginTop:"20px"}}
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
  <img
    src={mission}
    alt="Example"
    className="ms-3"
    style={{ width: "180px", height: "180px", objectFit: "cover" }}
  />
</div>
<h1 className="text-center text-dark fw-bold text-uppercase" style={{ marginTop: "50px" }}>
        Why Choose Us
      </h1>
      <hr
  className="mx-auto"
  style={{
    height: "5px",        // HR thickness
    width: "70%",         // HR width
    backgroundColor: "#212529", // Bootstrap text-dark color
    border: "none",       // Remove default border
    marginTop: "20px",    // Optional spacing above
    marginBottom: "20px"  // Optional spacing below
  }}/>
  <div
  className="d-flex align-items-start mt-3 mb-3"
  style={{ marginLeft: "50px", marginRight: "50px" }}
>
  <div style={{ flex: 1 }}>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
    >
      EXPERTISE
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      With a team of professionals who possess 
extensive industry knowledge, we offer 
expertise and insights that enable us to 
develop customized solutions for every 
logistical challenge you face.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      RELIABILITY
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We understand that timeliness is a critical 
factor in logistics. By utilizing cutting-edge 
technologies and maintaining a strong 
network of trusted partners we guarantee 
reliable and timely delivery of your 
goods, no matter curmstances.
    </p>
  </div>
  <img
    src={choose} 
    alt="Example"
    className="ms-3"
    style={{ width: "180px", height: "180px", objectFit: "cover" }}
  />
</div>
<h1 className="text-center text-dark fw-bold text-uppercase" style={{ marginTop: "50px" }}>
        Our Services
      </h1>
      <hr
  className="mx-auto"
  style={{
    height: "5px",        // HR thickness
    width: "70%",         // HR width
    backgroundColor: "#212529", // Bootstrap text-dark color
    border: "none",       // Remove default border
    marginTop: "20px",    // Optional spacing above
    marginBottom: "20px"  // Optional spacing below
  }}/>
  <div
  className="d-flex align-items-start mt-3 mb-3"
  style={{ marginLeft: "50px", marginRight: "50px" }}
>
  <div style={{ flex: 1 }}>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
    >
      Medical supplies
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      Be it NGOs, Medical 
Centres, Hospitals, Clinics and Private 
Companies often require medical supplies 
such as medicines, bandages, personal 
protective equipment (PPE), and various 
medical equipment. We have a dedicated 
team of medical professional to source for 
the best medical equipments while keeping 
prices checked.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Water and sanitation equipment
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      Whether you are an individual, Private 
Company, Government or NGO focusing 
on providing clean water and improving 
sanitation in underprivileged community, 
we are the right partner in supplying water 
filters, purification systems, and sanitation 
equipment such as toilets and handwashing 
stations etc.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Shelter Materials
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We do customised 
shelter that suite the times and circustances 
of the intended purpose. We work with you 
to produce and supply shelter materials such 
as tents, tarps, and building materials that fit 
your situation at a competetive price.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Office and Educational supplies
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We 
supply all office and school requirements. 
from stationery items to printers, 
photocopiers, promotional items, teaching 
visual aids, child welfare requirements, Text 
books, school uniforms etc.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Agricultural and farming tools
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      If you 
are venturing into agro business or involved 
in agricultural development and supporting 
farmers, you may need farming tools, seeds, 
fertilizers, and irrigation equipment. We are 
your best partner.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Procurement consulting
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We help our 
clients develop efficient procurement 
strategies and identifying cost-saving 
opportunities. This includes analyzing 
spending patterns, negotiating contracts, 
and implementing procurement best 
practices.
    </p>
     <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Car Spare parts and General repairs
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We deal in Tyres, Auto Parts and Vehicle
Servicing. We have quality and reliable 
sources of all types of car spare parts and 
accessories
    </p>
     <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Logistics and transportation
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We don’t 
only supply logistics. We also offer transport 
services for both logistics and the human 
reources. This includes transporting goods, 
supplies and humans to both remote and 
urban areas.
    </p>
     <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Clothing and textiles
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We supply both 
locally made and imported textile materials. 
If want office uniform, school iniform or if 
you are involved in aiding communities in 
need with assorted clothings such as , 
blankets, and bedding, clothes,k we have 
got your back.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Communication equipment
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We 
supply latest versions of the communication 
equipment such as computers, Laptops 
phones, tablets for conducting research, 
two-way radios, and internet connectivity 
devices.
    </p>
    <h5
      className="mb-2"
      style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold", marginTop:"35px" }}
    >
      Ground Water Drilling
    </h5>
    <p
      className="text-end mb-0"
      style={{ textAlign: "justify", fontFamily: "'Roboto', sans-serif" }}
    >
      We have a 
team of experienced geo engineer who 
conduct water surveys and deploy the state 
of art drilling machinery so that you get the 
best amounts of water for your project.
    </p>
  </div>
  <div className="ms-3 d-flex flex-wrap" style={{ maxWidth: "180px" }}>
  <img
    src={s1} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
  <img
    src={s2} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
   <img
    src={s3} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
  <img
    src={s4} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
  <img
    src={s4} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
  <img
    src={s5} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
  <img
    src={s6} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
  <img
    src={s7} 
    alt="Example"
    className="m-1"
    style={{ width: "140px", height: "140px", objectFit: "cover" }}
  />
</div>
 
    
  </div>
    </div>
  )
}

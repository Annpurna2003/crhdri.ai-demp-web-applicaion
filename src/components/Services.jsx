import React, { useState } from 'react';

const services = [
  { title: "Web Development", desc: "Modern and scalable websites" },
  { title: "AI Solutions", desc: "Smart AI-powered systems" },
  { title: "Data Analytics", desc: "Insights from your data" },
  { title: "Cloud Services", desc: "Secure cloud infrastructure" },
  { title: "Cybersecurity", desc: "Protect your systems" },
  { title: "Mobile App Development", desc: "iOS & Android apps" },
  { title: "UI/UX Design", desc: "User-friendly interfaces" },
  { title: "DevOps Services", desc: "CI/CD and automation" },
  { title: "E-commerce Solutions", desc: "Online store development" },
  { title: "IT Consulting", desc: "Expert tech guidance" },
  { title: "Blockchain Development", desc: "Decentralized apps" },
  { title: "Digital Marketing", desc: "Grow your business online" },
  { title: "Software Testing", desc: "Quality assurance" },
  { title: "Custom Software Development", desc: "Tailored solutions" },
  { title: "IT Support", desc: "24/7 assistance" },
  { title: "Big Data Solutions", desc: "Handle large datasets" },
  { title: "Machine Learning Services", desc: "Predictive models" },
  { title: "Natural Language Processing", desc: "Text & language AI" },
  { title: "Computer Vision Solutions", desc: "Image recognition" },
  { title: "Robotic Process Automation", desc: "Automate workflows" },
  { title: "IoT Solutions", desc: "Connected devices" },
  { title: "AR/VR Development", desc: "Immersive experiences" },
  { title: "API Development", desc: "System integrations" },
  { title: "Cloud Migration", desc: "Move to cloud safely" },
  { title: "Data Visualization", desc: "Visual dashboards" },
  { title: "AI Chatbot Development", desc: "Smart assistants" },
  { title: "Voice Recognition", desc: "Speech-based systems" },
  { title: "Predictive Analytics", desc: "Future insights" }
];
const Services = () => {
    const [showAll,setshowAll]=useState(false);
    const visibleServices=showAll?services:services.slice(0,6);
    return(
        <>
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {visibleServices.map((service, index) => (
    <div
      key={index}
      className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
    >
      <h3 className="text-lg font-semibold">
        {service.title}
      </h3>

      <p className="text-sm text-gray-200 mt-2">
        {service.desc}
      </p>
    </div>
  ))}
</div>
              <button
        onClick={() => setshowAll(!showAll)}
        className="mt-10 mx-auto block bg-white text-black px-6 py-3 rounded-xl"
      >
        {showAll ? "Show Less" : "View All Services"}
      </button>
        </section>
        </>
    )
}
export default Services
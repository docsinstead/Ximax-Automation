import React from 'react';
import {
  FaCheckCircle,
  FaChartLine,
  FaRocket,
  FaBriefcase,
  FaShieldAlt,
  FaUsers
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CodingHealth: React.FC = () => {
  const navigate = useNavigate();

  // Healthcare Portfolio - Four submenus
  const healthcarePortfolio = [
    {
      icon: <FaChartLine className="text-2xl text-[#38B2FF]" />,
      title: "Revenue Cycle Management",
      description: "Comprehensive RCM services from patient registration to payment collection, helping reduce denials and accelerate reimbursements.",
      path: "/revenue-cycle-management"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#7ED4FF]" />,
      title: "Coding / Health Information Management",
      description: "Certified coders ensuring proper ICD-10, CPT, and HCPCS coding to prevent rejections and ensure compliance with industry standards.",
      path: "/coding-health-information"
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#38B2FF]" />,
      title: "Claims Management",
      description: "End-to-end claims processing with automation and cloud-based tools for precision, speed, and transparency at every stage.",
      path: "/claims-management"
    },
    {
      icon: <FaUsers className="text-2xl text-[#7ED4FF]" />,
      title: "Member Management",
      description: "Robust member enrollment, eligibility, and communication solutions with real-time access to accurate member profiles and policy details.",
      path: "/member-management"
    }
  ];

  // Healthcare Solutions
//   const healthcareSolutions = [
//     {
//       icon: <FaHospital className="text-3xl text-[#38B2FF]" />,
//       title: "Practice Management",
//       description: "Comprehensive solutions for managing healthcare practice operations, scheduling, billing and administrative workflows"
//     },
//     {
//       icon: <FaClipboardList className="text-3xl text-[#7ED4FF]" />,
//       title: "Clinical Data Management",
//       description: "Secure and efficient management of clinical data, patient records and treatment histories"
//     },
//     {
//       icon: <FaUserCircle className="text-3xl text-[#38B2FF]" />,
//       title: "Patient Portals",
//       description: "Interactive web portals for patients to access health records, communicate with providers and manage appointments"
//     },
//     {
//       icon: <FaChartBar className="text-3xl text-[#7ED4FF]" />,
//       title: "Analytics & Reporting Solutions",
//       description: "Advanced analytics and reporting tools for healthcare data insights and informed decision making"
//     },
//     {
//       icon: <FaPuzzlePiece className="text-3xl text-[#38B2FF]" />,
//       title: "Integration Solutions (HL7, HIPAA)",
//       description: "Seamless integration with healthcare systems following HL7 and HIPAA compliance standards"
//     }
//   ];

  // Why TSEIT Points
  const whyTSEITPoints = [
    "We design and implement each project anticipating the demands of the evolving healthcare market",
    "We work closely with our clients to deliver reliable, evolvable, and maintainable results",
    "On-time and on-budget delivery for healthcare providers and ISVs",
    "5+ years of partnership with Healthcare Providers and Healthcare ISVs"
  ];

  // Function to handle solution click
  const handleSolutionClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id='coding-health-information-management' className="min-h-screen bg-gray-50 -mt-8">
      {/* Hero Section with Skyblue Theme Background */}
      <section 
  className="pt-24 py-5 relative overflow-hidden min-h-[300px] md:min-h-[500px] flex items-start"
  // style={{
  //   background: 'linear-gradient(135deg, #38B2FF 0%, #7ED4FF 50%, #B0E6FF 100%)'
  // }}
>
  {/* Background Image Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/industry1.png" 
      alt="Healthcare Solutions Background" 
      className="w-full h-full md:object-cover opacity-"
    />
    {/* <div className="absolute inset-0 bg-gradient-to-r from-sky-600/80 to-sky-500/80 mix-blend-multiply"></div> */}
  </div>
  
  <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-24">
    <div className="text-center">
      <div className="inline-flex items-center justify-center mb-3">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white">
          Coding / Health Information Management
        </h1>
      </div>
      
      <p className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-12">
        Certified medical coding and health information management solutions for healthcare providers
      </p>
    </div>
  </div>
</section>

      {/* Main Content Section */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 mt-10">
          {/* Healthcare Overview */}
          <div className="max-w-6xl mx-auto ">
            <div className="text-center mb-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Coding / <span className="text-[#38B2FF]">Health Information Management</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#38B2FF] to-[#7ED4FF] mx-auto mb-6"></div>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto">
                <span className="font-semibold text-[#38B2FF]">TSEIT</span>, we understand the critical role that accurate health data plays in patient care and operational efficiency. Our Health Information Management (HIM) and Medical Coding services are designed to help hospitals, clinics, and healthcare providers streamline documentation, maintain regulatory compliance, and improve revenue cycle outcomes. With certified experts and a tech-driven approach, we ensure your healthcare data is secure, accessible, and actionable.
              </p>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
                Our team of AHIMA and AAPC certified coders delivers end-to-end coding support across multiple specialties — including inpatient, outpatient, radiology, pathology, and more. We use the latest tools and compliance standards (ICD-10, CPT, HCPCS) to ensure accurate coding, reduced denials, and faster reimbursements. Whether you need ongoing support or project-based coding audits, TSEIT provides scalable, customized solutions that fit your workflow.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="bg-gradient-to-br from-[#38B2FF]/5 to-[#7ED4FF]/5 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                <span className="text-[#38B2FF]">Benefits</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF]">
                  <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Medical Coding Services</h4>
                  <p className="text-xs md:text-sm text-gray-600">We provide end-to-end medical coding services tailored to hospitals, clinics, and healthcare providers. Our team of certified coders ensures precision and compliance with the latest ICD-10, CPT, and HCPCS guidelines. Whether it's inpatient, outpatient, or specialty-specific coding, we help reduce denials, speed up reimbursement cycles, and improve documentation quality.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#38B2FF]">
                  <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Health Information Management (HIM)</h4>
                  <p className="text-xs md:text-sm text-gray-600">Comprehensive HIM solutions ensuring accurate health data management, regulatory compliance, and streamlined documentation processes for healthcare organizations.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#7ED4FF]">
                  <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Revenue Cycle Management (RCM)</h4>
                  <p className="text-xs md:text-sm text-gray-600">Integrated RCM solutions that optimize financial performance through accurate coding, reduced denials, and faster reimbursement cycles.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#38B2FF]">
                  <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-3">Technology-Driven Solutions</h4>
                  <p className="text-xs md:text-sm text-gray-600">Leveraging cutting-edge technology and automation tools to enhance coding accuracy, streamline workflows, and improve overall operational efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Solutions Grid */}
          {/* <div className="max-w-7xl mx-auto py-5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center mt-10">
              Our <span className="text-[#7ED4FF]">Healthcare Solutions</span>
            </h3>
            <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for the healthcare industry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
              {healthcareSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#7ED4FF] shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38B2FF]/10 to-[#7ED4FF]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h4 className="text-med md:text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#38B2FF] transition-colors duration-300">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Why TSEIT Section */}
          <div className="max-w-7xl mx-auto py-5">
            <div className="rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why <span className="text-[#38B2FF]">TSEIT</span> for Healthcare Solutions?
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6 text-center">
                  We design and implement each project anticipating the demands of the evolving healthcare market. 
                  We work closely with our clients to deliver reliable, evolvable, and maintainable results on-time and on-budget.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {whyTSEITPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-[#7ED4FF] text-lg mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-xs md:text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Portfolio Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our <span className="text-[#7ED4FF]">Healthcare Portfolio</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of healthcare technology solutions
          </p>
          
          {/* Services Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthcarePortfolio.map((service, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSolutionClick(service.path)}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:border-[#7ED4FF] cursor-pointer group h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#7ED4FF]/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-6 h-6 text-[#7ED4FF] transform rotate-45 group-hover:rotate-90 transition-transform duration-300 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-med md:text-xl font-semibold text-gray-800 group-hover:text-[#7ED4FF] transition-colors duration-300 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
      <section 
        className="py-5 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A6B7E 0%, #075985 50%, #0C4A6E 100%)'
        }}
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/caltoaction2.png" 
            alt="Technology Partnership Background" 
            className="w-full h-full object-cover object-top opacity-90"
          />
          {/* Optional: Add a gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-800/60 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 mt-40 mb-12">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
             Ready to Transform Your Healthcare Solutions?
          </h2>
          <p className="text-white/90 text-xs md:text-sm mb-6 max-w-2xl mx-auto">
            Partner with us to deliver innovative, reliable and secure healthcare technology solutions
          </p>
            <button onClick={()=>navigate("/contact-us")} className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg">
              Get Started Today
              <FaRocket className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodingHealth;
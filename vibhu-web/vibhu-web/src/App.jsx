import { useState } from "react";
import './App.css'
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [tripDetails, setTripDetails] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scriptURL = "https://script.google.com/macros/s/AKfycbx-PGnZBm7K7Qfou-fJjDoD3IYBI-a_y1g46xqgxnf2CpnBJ7TwILESyphzbwinpYlh/exec";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("VehicleType", vehicleType);
    formData.append("PickupLocation", pickupLocation);
    formData.append("Destination", destination);
    formData.append("TripDetails", tripDetails);

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      alert("Request submitted successfully!");

      setName("");
      setPhone("");
      setVehicleType("");
      setPickupLocation("");
      setDestination("");
      setTripDetails("");

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }

  return (
    <>
      <div className="topbar">
        <div>📍 Near VOC Park, Coimbatore Central, Coimbatore</div>
        <div>📞 +91 96558 66660 | ✉️ vibhutravelhub66@gmail.com</div>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#fleet">Fleet</a>
        <a href="#services">Services</a>
        <a href="#routes">Routes</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section className="hero" id="home">
      <div className="hero-content">
        <div className="tag">Coimbatore Bus • Taxi • Tempo Traveller • Tour Booking</div>
        <h1>
          Best Travel Agency in Coimbatore
        </h1>
        <p>
          Vibhu TravelHub offers reliable bus, taxi, SUV, tempo traveller and tour vehicle rental services from Coimbatore.
          We arrange safe, clean and comfortable vehicles for family trips, corporate travel, school tours, pilgrimages,
          wedding transport, airport transfers and outstation journeys.
        </p>
        <a href="tel:+919655866660" className="btn">Call Now</a>
        <a href="https://wa.me/919655866660" className="btn outline">WhatsApp</a>
      </div>
    </section>

    <section className="about" id="about">
      <div className="about-wrap">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1200&q=80" alt="Travel" />
        </div>

        <div className="about-text">
          <h2>
            About <span>Vibhu TravelHub</span>
          </h2>
          <p>
            Vibhu TravelHub is a Coimbatore-based travel service brand focused on comfortable and hassle-free journeys.
            Whether you need a taxi for local travel, an SUV for a family trip, a tempo traveller for group travel,
            or a bus for a large tour, we provide the right vehicle based on your requirement.
          </p>
          <p>
            Our travel solutions are suitable for airport pickup, railway station drop, city rides, outstation tours,
            temple visits, corporate trips, school and college excursions, marriage functions and group packages.
          </p>
          <p>
            We focus on punctuality, clean vehicles, experienced drivers and clear communication from enquiry to trip completion.
          </p>

        <div className="contact-wrap">
          <div className="contact-info">
            <img src={logoSrc} alt="Vibhu TravelHub Logo" />
            <h3>Get In Touch</h3>
            <p><strong>Business:</strong> Vibhu TravelHub</p>
            <p><strong>Location:</strong> Near VOC Park, Coimbatore Central, Coimbatore</p>
            <p><strong>Phone:</strong> +91 96558 66660</p>
            <p><strong>Email:</strong> vibhutravelhub66@gmail.com</p>
            <p><strong>Services:</strong> Taxi, SUV, Tempo Traveller, Bus Rental, Tour Packages, Corporate Trips, Pilgrimage Tours.</p>
          </div>
        </div>
      </section>      {/* SEO Content Section */}
      <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden border-t border-white/[0.05] flex justify-center items-center" id="seo-services">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1100px] mx-auto z-10 relative flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center uppercase tracking-tight mb-4">
              Premium Travel Services in <span className="text-[#ff0000]">Coimbatore</span>
            </h2>
            <div className="w-24 h-1 bg-[#ff0000] mx-auto mb-12 rounded-full"></div>

            {/* 4 Premium Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center sm:text-left">

              {/* Card 1 */}
              <div className="bg-[#111]/90 backdrop-blur-md border border-[#ff0000]/30 hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] rounded-[20px] p-6 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000] mb-4 shadow-[0_0_10px_rgba(255,0,0,0.1)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">Coimbatore Agency</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Vibhu Travel Hub is a trusted travel agency in Coimbatore offering premium travel services.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#111]/90 backdrop-blur-md border border-[#ff0000]/30 hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] rounded-[20px] p-6 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000] mb-4 shadow-[0_0_10px_rgba(255,0,0,0.1)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">Family & Group</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  We provide dedicated support for family trips, group tours, and customized travel experiences.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#111]/90 backdrop-blur-md border border-[#ff0000]/30 hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] rounded-[20px] p-6 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000] mb-4 shadow-[0_0_10px_rgba(255,0,0,0.1)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">Corporate & Airport</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Get transparent pricing for corporate travel, corporate events, and reliable airport transfers.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#111]/90 backdrop-blur-md border border-[#ff0000]/30 hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] rounded-[20px] p-6 transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-10 h-10 rounded-lg bg-[#ff0000]/10 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000] mb-4 shadow-[0_0_10px_rgba(255,0,0,0.1)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white uppercase mb-2">Holiday & Outstation</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Book customized holiday packages and outstation journeys across Tamil Nadu and India.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 bg-black relative overflow-hidden border-b border-white/[0.05] flex justify-center items-center" id="faq">
        {/* Glow Effects */}
        <div className="absolute bottom-[10%] right-[-5%] w-[250px] h-[250px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[10%] left-[-5%] w-[250px] h-[250px] rounded-full bg-red-600/5 blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 flex flex-col items-center w-full"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight text-center">
              Frequently Asked <span className="text-[#ff0000]">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-[#ff0000] mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="w-full space-y-4">
            {[
              {
                question: "Which is the best travel agency in Coimbatore?",
                answer: "Vibhu Travel Hub offers premium travel services, holiday packages, airport transfers, corporate travel and family trip planning."
              },
              {
                question: "Do you provide corporate travel services?",
                answer: "Yes, Vibhu Travel Hub provides corporate travel solutions for business trips, office tours and group travel."
              },
              {
                question: "Do you arrange airport transfers?",
                answer: "Yes, we provide airport travel services in Coimbatore and Chennai."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#111]/90 backdrop-blur-md border border-[#ff0000]/30 hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.15)] rounded-[20px] overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left text-white focus:outline-none cursor-pointer select-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg md:text-xl font-semibold text-white flex items-center gap-4">
                    {/* Glowing Question Badge */}
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff0000]/20 to-[#b30000]/20 border border-[#ff0000]/30 flex items-center justify-center text-[#ff0000] font-bold text-sm shadow-[0_0_10px_rgba(255,0,0,0.1)]">
                      ?
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>

                  {/* Chevron Icon */}
                  <svg
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${activeFaq === index ? "transform rotate-180 text-[#ff0000]" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-6 text-neutral-300 leading-relaxed text-base md:text-lg border-t border-white/[0.03] pt-4 pl-12">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <img src={logoSrc} alt="Vibhu TravelHub Logo" />
        <h3>
          Vibhu <span>TravelHub</span>
        </h3>
        <p>Bus, Taxi, Tempo Traveller & Tour Package Services</p>
        <p>Near VOC Park, Coimbatore Central, Coimbatore</p>
        <p>Phone: +91 96558 66660 | Email: vibhutravelhub66@gmail.com</p>
        <p>© 2026 Vibhu TravelHub. All Rights Reserved.</p>
      </footer>

    <footer>
      <img src={logoSrc} alt="Vibhu TravelHub Logo" />
      <h3>
        Vibhu <span>TravelHub</span>
      </h3>
      <p>Bus, Taxi, Tempo Traveller & Tour Package Services</p>
      <p>Near VOC Park, Coimbatore Central, Coimbatore</p>
      <p>Phone: +91 96558 66660 | Email: vibhutravelhub66@gmail.com</p>
      <p>© 2026 Vibhu TravelHub. All Rights Reserved.</p>
    </footer>

    <a href="https://wa.me/919655866660" className="whatsapp">WhatsApp</a>
  </>
)
}

export default App

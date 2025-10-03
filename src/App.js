export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Zuri Salim ICT Consultancy</h1>
        <nav className="space-x-6">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#cv" className="hover:text-blue-600">CV</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Your ICT Solutions Partner</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Software & hardware consultancy – Oracle Hospitality Suites, POS systems, ICT infrastructure, and remote support.
        </p>
      </section>

      <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">Software Consultancy</h4>
            <p>Implementation of Oracle Hospitality Suites, POS software, and ICT applications.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">Hardware Solutions</h4>
            <p>Supply and setup of POS hardware, servers, and ICT infrastructure.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold mb-2">Remote Support</h4>
            <p>Reliable online support ensuring your systems run smoothly and securely.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p>Email: <a href="mailto:zuribakari@hotmail.com" className="text-blue-600">zuribakari@hotmail.com</a></p>
        <p>Phone: +254 701 454 120</p>
        <p>P.O. Box 42045 – 80100</p>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Zuri Salim ICT Consultancy. All rights reserved.</p>
      </footer>
    </div>
  );
}

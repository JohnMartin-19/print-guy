import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white bg-blue-900 p-6 rounded-lg">
              Welcome to PrintGuy <br />
              YOUR ONE-STOP <br />
              ADVERTISING <br />
              SOLUTION!
            </h1>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
              DISCOVER MORE
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/600x400?text=Printing+Machine" alt="Printing Machine" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* About Our Company Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">About Our Company</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 text-center">
              <span className="text-6xl font-bold text-orange-500">20</span>
              <p className="text-lg font-semibold text-blue-900">Years of Experience</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-4">
                When we first started 20 years ago, we were intrigued by the number of businesses that didn’t have proper representation.
              </p>
              <p className="text-gray-600 mb-4">
                From the very beginning, we believed in our customers’ potential to connect with their ideal audience. With our passion for creativity and belief in visual communication, we transformed the faces of brands.
              </p>
              <p className="text-gray-600 mb-4">
                Marketing is more than just business; it’s community. At PrintGuy Limited, we bring more state-of-the-art equipment, we bring experienced team of professionals committed to making your brand a success.
              </p>
              <p className="text-gray-600 font-semibold">
                A. N. Other <br />
                <span className="text-orange-500">CEO & Founder</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PrintGuy Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Why Choose PrintGuy</h2>
            <ul className="text-gray-600 space-y-4">
              <li>At PrintGuy Limited, our objective is to deliver services that exceed customer expectations.</li>
              <li>To continually improve our processes and adopt the latest technologies to stay ahead in the advertising industry.</li>
              <li>We are committed to leading the market by setting new standards of excellence, while maintaining sustainability through eco-friendly practices.</li>
              <li>Our goal is to serve an even broader client base while maintaining superior service quality.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="https://via.placeholder.com/400x500?text=Worker+Thumbs+Up" alt="Worker Thumbs Up" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Check out our latest projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x200?text=Digital+Printing" alt="Digital Printing" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">Digital Printing</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x200?text=Paper+Bags" alt="Paper Bags" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">Paper Bags</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x200?text=Large+Format+Printing" alt="Large Format Printing" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-orange-500">Large Format Printing</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x200?text=3D+Signage" alt="3D Signage" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">3D Signage</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x200?text=Branding" alt="Branding" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">Branding</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://via.placeholder.com/300x200?text=Clothing+Apparel" alt="Clothing & Apparel" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">Clothing & Apparel</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import { Link } from "react-router-dom";
import store from "../assets/store.webp"
export default function Home() {
     return (
    <div className="bg-white min-h-screen">
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Welcome to Faheem Garments
            </h1>
            <p className="text-gray-700 mb-6">
              Discover the latest trends in clothing. High-quality, comfortable, and stylish garments for every season.
            </p>
            <Link
              to= '/'
              className="inline-block bg-amber-900 text-white px-6 py-3 rounded-full hover:bg-amber-800 transition"
            >
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src= {store}
              alt="Clothing showcase"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Faheem Garments?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-amber-900">Premium Quality</h3>
              <p className="text-gray-600">We use the finest fabrics to ensure comfort and durability in all our products.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-amber-900">Trendy Designs</h3>
              <p className="text-gray-600">Stay in style with our modern and seasonal collections tailored for everyone.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-amber-900">Affordable Prices</h3>
              <p className="text-gray-600">We believe fashion should be accessible to all. Enjoy quality at a great price.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

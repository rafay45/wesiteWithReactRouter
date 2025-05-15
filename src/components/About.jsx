export default function About() {
     return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
       
        <div>
          <img
            src= "src/assets/second.jpg"
            alt="About Faheem Garments"
            className="rounded-2xl shadow-xl w-full h-auto object-cover border border-blue-100"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About <span className="text-amber-900">Faheem Garments</span></h1>
          <p className="text-base text-gray-700 mb-5 leading-7">
            Faheem Garments is a proud Pakistani brand that specializes in high-quality clothing for all ages. Since our inception, we have aimed to redefine comfort and elegance in fashion. Our design team is inspired by both traditional and modern styles, making our collections unique and versatile.
          </p>
          <p className="text-base text-gray-700 mb-5 leading-7">
            We believe clothing is more than just fabric — it’s identity, personality, and confidence. That’s why every stitch in our garments is done with care, passion, and purpose. From casual wear to formal outfits, Faheem Garments offers a wide range of styles suitable for every occasion.
          </p>
          <p className="text-base text-gray-700 leading-7">
            Our mission is not only to provide exceptional quality but to ensure that fashion is accessible to everyone. With a growing customer base and commitment to sustainability, Faheem Garments continues to evolve with style and responsibility.
          </p>
        </div>
      </div>

      <div className="mt-28 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-14">Milestones We’ve Reached</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-amber-900 mb-2">10+</h3>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-amber-900 mb-2">500+</h3>
            <p className="text-sm text-gray-600">Products Designed</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-amber-900 mb-2">1000+</h3>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-5xl font-bold text-amber-900 mb-2">20+</h3>
            <p className="text-sm text-gray-600">Retail Partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}

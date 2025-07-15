import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col text-white px-6 py-16 my-8 bg-gradient-to-b from-gray-700 to-black min-h-screen  items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 text-center">
          About YourChoice
        </h1>

        <p className="text-gray-300 text-lg mb-8 text-center leading-relaxed">
          <span className="text-amber-400 text-xl font-mono ">YourChoice </span> is your
          smart digital cookbook — helping you save, organize, and recreate your
          favorite vegetarian recipes. Whether you're a beginner or an expert
          home chef, our app makes it easy to keep your kitchen creative and
          your meals delicious.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-t from bg-black p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              📋 Create Recipes
            </h3>
            <p className="text-gray-400">
              Easily add ingredients, instructions, cook time, and other details
              — beautifully structured and saved locally.
            </p>
          </div>

          <div className="bg-gradient-to-b from bg-black p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              ❤️ Favorite Recipes
            </h3>
            <p className="text-gray-600">
              Bookmark your most-loved dishes and access them in a single tap
              whenever you're hungry for inspiration.
            </p>
          </div>

          <div className="bg-gradient-to-t from bg-black p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              🗑️ Trash & Recovery
            </h3>
            <p className="text-gray-500">
              Deleted something by mistake? No worries — easily recover recipes
              from the Trash section.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            Tech Stack
          </h2>
          <p className="text-gray-600 mb-1">
            🛠 Built with React.js + Tailwind CSS
          </p>
          <p className="text-gray-600">
            📦 Data saved in browser's localStorage
          </p>
        </div>

        <footer className="mt-16 text-center text-sm text-gray-400 bg-gradient-to-t from-gray-600 gray-800 p-4">
          Made with 🧡 by{" "}
          <span className="text-orange-600 font-medium text-lg">Abhishek Sharma</span> •
          © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default About;

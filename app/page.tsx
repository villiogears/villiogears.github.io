import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="flex items-center justify-between p-6 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex items-center space-x-2">
          <Image
            src="/elphadeal_icon.svg"
            alt="Elphadeal logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Elphadeal
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center px-6 py-16">
        <section className="text-center max-w-4xl">
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Welcome to Elphadeal
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Discover amazing deals and products tailored just for you. Experience
            the future of online shopping with Elphadeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#explore"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
            >
              Explore Deals
            </a>
            <a
              href="#learn-more"
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>
        </section>

        <section
          id="features"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <Image
              src="/globe.svg"
              alt="Global reach"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access deals from around the world with our extensive network.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <Image
              src="/file.svg"
              alt="Secure transactions"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure Transactions
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your data is protected with top-notch security measures.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <Image
              src="/window.svg"
              alt="User-friendly interface"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Easy to Use
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Navigate effortlessly with our intuitive design.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 Elphadeal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

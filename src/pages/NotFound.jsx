import React from "react";
import { Home, ArrowRight, Ghost } from "lucide-react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <div className=" bg-black flex flex-col">
      <Helmet>
        <title>Page Not Found | VoltForge</title>
      </Helmet>
      <div className="flex-grow flex items-start pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Ghost Animation */}
          <div className="mb-6">
            <Ghost className="w-24 h-24 mx-auto text-primarytext animate-bounce" />
            <div className="absolute inset-0 bg-primarytext/20 blur-3xl opacity-50 -z-10" />
          </div>

          {/* Error Message */}
          <h1 className="text-8xl font-bold  text-center text-white mb-3">
            <span className="bg-clip-text text-transparent bg-primarytext">
              404
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-3">
            Page Not Found
          </h2>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto text-center">
            Looks like you entered the lost realms! Don't worry though, we've
            got an exit point 🤗
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primarytext hover:bg-primarytext/90 text-white font-medium transition-all group"
            >
              <Home className="w-5 h-5" />
              Return Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-blue-100 font-medium transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-blue-100">
              Can't find what you're looking for? Our support team is here to
              help 24/7.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primarytext/10 hover:bg-primarytext/20 text-primarytext font-medium transition-all"
            >
              View Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

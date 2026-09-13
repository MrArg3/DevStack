

const FAQ = () => {
    return (
        <div>
           
<section id="faq" className="max-w-6xl mx-auto px-4 py-12">
  <div className="text-center mb-8">
    <h2 className="text-2xl font-bold text-gray-900">
      Common <span className="brand-gradient-text">FAQ</span>
    </h2>

    <p className="text-sm text-gray-500 mt-2">
      Frequently asked questions about Dev Stack.
    </p>
  </div>

  <div className="space-y-3">
    <details className="border border-gray-200 rounded-lg p-4">
      <summary className="text-sm font-semibold text-gray-800 cursor-pointer">
        Where can we deploy the site?
      </summary>

      <p className="text-xs text-gray-500 leading-5 mt-3">
        You can deploy the site anywhere you like, such as Netlify, Vercel,
        Cloudflare Pages, or any other hosting platform.
      </p>
    </details>

    <details
      className="border border-gray-200 rounded-lg p-4"
      open
    >
      <summary className="text-sm font-semibold text-gray-800 cursor-pointer">
        Do we have to use TypeScript?
      </summary>

      <p className="text-xs text-gray-500 leading-5 mt-3">
        No. You can use either TypeScript or JavaScript. This project is built
        using TypeScript.
      </p>
    </details>

    <details
      className="border border-gray-200 rounded-lg p-4"
      open
    >
      <summary className="text-sm font-semibold text-gray-800 cursor-pointer">
        Can we change the title, logo, and colors?
      </summary>

      <p className="text-xs text-gray-500 leading-5 mt-3">
        Yes. You can change the project title, logo, and color scheme as long
        as they remain relevant to the project.
      </p>
    </details>

    <details
      className="border border-gray-200 rounded-lg p-4"
      open
    >
      <summary className="text-sm font-semibold text-gray-800 cursor-pointer">
        Where do we get the technology logos and icons?
      </summary>

      <p className="text-xs text-gray-500 leading-5 mt-3">
        You can use technology icon URLs from different sources. TechIcons is
        one useful source for clean technology logos.
      </p>
    </details>
  </div>
</section>


        </div>
    );
};

export default FAQ;
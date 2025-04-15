import { SendHorizonal } from 'lucide-react';

const SubscribeSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f4f8ff] px-3 mx-auto sm:px-6 lg:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a043c] text-cente lg:text-left leading-tight">
          Subscribe for the <br className="hidden sm:block" />
          exclusive updates!
        </h2>

        <form className="w-full max-w-2xl flex flex-col items-start gap-4 mx-auto  ">
          {/* Input Row */}
          <div className="w-full flex flex-1 items-stretch gap-3">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-5 py-4 rounded-full bg-white shadow-sm text-sm outline-none"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#5000ff] hover:bg-[#3b00cc] transition text-white px-6 py-3 rounded-full text-lg font-semibold whitespace-nowrap"
            >
              <SendHorizonal size={16} />
              Subscribe
            </button>
          </div>

          <label className="flex items-center gap-2 text-base text-gray-600 pl-1 flex-wrap">
            <input type="checkbox" required className="accent-[#5000ff]" />
            I agree to the <a href="#" className="underline text-[#0a043c]">Privacy Policy</a>.
          </label>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;

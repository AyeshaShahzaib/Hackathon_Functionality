export default function Footer() {
    return (
      <footer className="bg-[#0D0D0D] text-white py-10 border-t-2 border-[#] flex flex-col items-center">
        <div className="container mx-auto px-6 md:px-12">
          {/* Top Section */}
          <div className="flex text-center mb-10 justify-between">
            <div>
            <h2 className="text-2xl font-bold text-white"><span className="text-[#FF9F0D]"> St</span>ill You Need Our Support?</h2>
            <p className="text-sm text-gray-300 mt-2">
              Don’t wait, make a smart & logical quote here. It’s pretty easy.
            </p>
            </div>
            
            <div className="mt-4 flex justify-center items-center gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-black text-white focus:outline-none"
              />
              <button className="bg-[#FF9F0D] text-white px-4 py-2 rounded-lg hover:bg-[#FF9F0D]">
                Subscribe Now
              </button>
            </div>
          </div>
  
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* About Us */}
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the world.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-[#FF9F0D] p-2 rounded-full">
                  <span className="material-icons text-white">schedule</span>
                </div>
                <p className="text-sm text-gray-400">
                  Mon - Sat (8:00 - 6:00)
                  <br />
                  Sunday - Closed
                </p>
              </div>
            </div>
  
            {/* Useful Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Team</li>
                <li>Menu</li>
                <li>Contacts</li>
              </ul>
            </div>
  
            {/* Help */}
            <div>
              <h3 className="font-bold text-lg mb-4">Help?</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>
  
            {/* Recent Post */}
            {/* <div>
              <h3 className="font-bold text-lg mb-4">Recent Post</h3>
              <ul className="space-y-4">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                      <div>
                        <p className="text-sm text-gray-300">20 Feb 2022</p>
                        <p className="text-sm text-gray-400">Keep Your Business</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div> */}
            <div>
  <h3 className="font-bold text-lg mb-4">Recent Post</h3>
  <ul className="space-y-4">
    {[
      "FooterImage1.png", // Replace with actual image URLs
      "FooterImage2.png",
      "FooterImage3.png",
    ].map((imgUrl, index) => (
      <li key={index} className="flex items-center gap-4">
        <img src={imgUrl} alt={`Post Thumbnail ${index + 1}`} className="w-12 h-12 rounded-md" />
        <div>
          <p className="text-sm text-gray-300">20 Feb 2022</p>
          <p className="text-sm text-gray-400">Keep Your Business</p>
        </div>
      </li>
    ))}
  </ul>
</div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
            <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-orange-500">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-orange-500">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

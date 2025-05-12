const SiteMap = () => {
    return (
      <section className="bg-[var(--primary)] py-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-white">
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/careers" className="hover:underline">Careers</a></li>
                <li><a href="/press" className="hover:underline">Press</a></li>
                <li><a href="/blog" className="hover:underline">Blog</a></li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-white">
                <li><a href="/help" className="hover:underline">Help Center</a></li>
                <li><a href="/returns" className="hover:underline">Returns</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
              <ul className="space-y-2 text-white">
                <li><a href="/products" className="hover:underline">All Products</a></li>
                <li><a href="/new" className="hover:underline">New Arrivals</a></li>
                <li><a href="/best-sellers" className="hover:underline">Best Sellers</a></li>
                <li><a href="/categories" className="hover:underline">Categories</a></li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-white">
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
                <li><a href="/security" className="hover:underline">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default SiteMap;

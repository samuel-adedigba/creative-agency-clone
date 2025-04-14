 
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

interface MenuItem {
  label: string;
  hasDropdown: boolean;
  dropdownItems?: { label: string; subItems?: string[] }[];
}

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "SEO Company",
        },
        { label: "Marketing Agency" },
        { label: "Creative Agency" },
        { label: "Advertising Agency" },
      ],
    },
    {
      label: "Pages",
      hasDropdown: true,
      dropdownItems: [
        {
          label: "About",
          subItems: ["About - Agency", "About - Personal"],
        },
        {
          label: "Services",
          subItems: ["Services - Agency", "Services - Personal"],
        },
        { label: "Case Studies" },
        { label: "Testimonials" },
        { label: "Blog" },
        { label: "Our Team" },
        { label: "FAQ" },
        { label: "Pricing" },
        {
          label: "Tools",
          subItems: [
            "Typography",
            "Shortcodes",
            "404",
            "Service Plus",
            "Newsletter Popup",
          ],
        },
      ],
    },
    {
      label: "Portfolio",
      hasDropdown: true,
      dropdownItems: [
        { label: "Portfolio 1" },
        { label: "Portfolio 2" },
        { label: "Portfolio 3" },
        { label: "Portfolio 4" },
        { label: "Portfolio 5" },
        { label: "Portfolio 6" },
        { label: "Portfolio 7" },
        { label: "Portfolio 8" },
        {
          label: "Single Portfolio",
          subItems: ["Style 1", "Style 2", "Style 3", "Style 4", "Style 5"],
        },
      ],
    },

    { label: "Blog", hasDropdown: true,
      dropdownItems: [
        { label: "Blog Styles 1" },
        { label: "Blog Standard" },
        { label: "Blog List" },
        { label: "Masonry 2 Columns" },
        { label: "Masonry 3 Columns" },
        { label: "Masonry 4 Columns" },
        { label: "Blog Styles 2" },
        { label: "Blog Grid 3 Columns" },
        { label: "Blog Grid 4 Columns" },
        { label: "Blog Portfolio 3 Columns" },
        { label: "Blog Portfolio 3 Columns" },
        { label: "Single Post" },
        { label: "Single 1" },
        { label: "Single 2" },
        { label: "Single 3" },
        { label: "Video Post" },
        { label: "Audio Post" },
        { label: "With Sidebar" },
      ],
     },
    { label: "Contacts", hasDropdown: false },
  ];

  return (
    <header
      className={cn(
        "absolute w-full z-50 transition-all duration-300 bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
         

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10 mr-auto">
             <div className="text-3xl font-bold text-white mr-auto">Smart SEO</div>
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-white relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white group-hover:after:w-full after:transition-all after:duration-300">
                  <span className="font-medium">{item.label}</span>
                </button>

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#0B0B2B] rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-2">
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <div key={idx} className="group/item relative">
                          <a
                            href="#"
                            className="px-4 py-2 text-white hover:text-primary flex items-center justify-between"
                          >
                            <span className="relative inline-block pl-0 hover:pl-2 hover:bg-[#1A1A3A] transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">
                              {dropdownItem.label}
                            </span>
                            {dropdownItem.subItems && (
                              <ChevronDown className="w-4 h-4 ml-auto" />
                            )}
                          </a>
                          {dropdownItem.subItems && (
                            <div className="absolute left-full top-0 w-64 bg-[#0B0B2B] rounded-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300">
                              <div className="py-2">
                                {dropdownItem.subItems.map(
                                  (subItem, subIdx) => (
                                    <a
                                      key={subIdx}
                                      href="#"
                                      className="block px-4 py-2 text-white hover:text-primary hover:bg-[#1A1A3A]"
                                    >
                                      {subItem}
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
             <button className="text-white hover:text-primary transition-colors">
              <Search className="w-10 h-10" />
            </button>
          </nav>

          {/* Right Side Items */}
          <div className="hidden lg:flex items-center ml-auto space-x-8">
           
            <div className="flex items-center space-x-2">
              <span className="rounded-full bg-[#0B022A] p-4"  >
                  <Phone className="w-8 h-8 text-white" />
              </span>
            
              <span className="font-medium text-white text-2xl">1 800 458 56 97</span>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-8 text-xl py-4"
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0B0B2B] mt-4 rounded-lg"
            >
              <nav className="py-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2 px-4">
                    <button className="flex items-center justify-between w-full text-white hover:text-primary transition-colors">
                      <span>{item.label}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
                <div className="flex items-center space-x-2 py-4 px-4 border-t border-gray-700 mt-4">
                <span className="rounded-full bg-[#0B022A] p-2" >
                  <Phone className="w-5 h-5 text-white" />
              </span>
                  <span className="font-medium text-white">
                    1 800 458 56 97
                  </span>
                </div>
                <div className="px-4 pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full bg-[#6366F1] hover:bg-[#4F46E5]"
                  >
                    Let's talk
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

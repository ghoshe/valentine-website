'use client';  // This is important - add this at the top

import React from 'react';
import { Heart, Calendar, Diamond, Star, Home, Menu, X, Camera, Dog, GraduationCap } from 'lucide-react';

const ValentineWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'dating', label: 'Dating Journey' },
    { id: 'marriage', label: 'Marriage' },
    { id: 'qualities', label: 'Why I Love You' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-teal-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Home className="w-6 h-6 text-teal-600 mr-2" />
              <span className="text-teal-800 font-semibold">vridulaghosh.com</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button 
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-teal-600 hover:text-teal-800"
                >
                  {section.label}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-teal-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white/95 shadow-lg">
              <div className="px-4 py-2 space-y-2">
                {sections.map((section) => (
                  <button 
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block w-full text-left px-3 py-2 text-teal-600 hover:bg-teal-50"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="flex flex-col items-center justify-center min-h-screen text-center p-8 pt-16">
        <div className="max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-teal-600 mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-teal-800 mb-4">Vridula & Eshaan</h1>
          <p className="text-xl text-teal-700 mb-8">Our Love Story: From Digital Spark to Eternal Flame</p>
          <div className="relative w-full h-96 bg-teal-50 rounded-lg shadow-lg overflow-hidden mb-8">
            <img src="/1.jpg" alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Story Section */}
      <section id="our-story" className="py-24 bg-white/80">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-teal-600 mr-4" />
            <h2 className="text-3xl font-semibold text-teal-800">Our Story</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
              <img src="/2.jpg" alt="Our First Photo" className="w-full h-full object-cover object-[center_30%]" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-teal-800">A Modern Day Romance</h3>
              <p className="text-teal-700">
                In the age of digital connections, fate brought us together through a dating app. 
                But then meeting each was a chance.
                Being together was a choice.
                And falling in love was inevitable.
                The Rest is Destiny

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dating Journey */}
      <section id="dating" className="py-24 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-8 h-8 text-teal-600 mr-4" />
            <h2 className="text-3xl font-semibold text-teal-800">Our Dating Journey</h2>
          </div>
          <div className="text-center mb-12">
            <p className="text-lg text-teal-700">
              December 25th, 2015 - The day our journey began
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* First Meeting */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="relative h-50 mb-4 bg-teal-50 rounded overflow-hidden">
      
      <img src="/3.jpg" alt="Our First Meeting" className="w-full h-full object-cover" />
    </div>
    <div className="flex items-center mb-4">
      <Heart className="w-6 h-6 text-teal-600 mr-2" />
      <h3 className="text-xl font-semibold text-teal-800">First Meeting at Square One</h3>
    </div>
    <p className="text-teal-700">
      From a match on a dating app to our first meeting at Square One Mall - 
      where our digital connection transformed into a beautiful reality.
    </p>
  </div>

  {/* Vridula's Graduation */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="relative h-50 mb-4 bg-teal-50 rounded overflow-hidden">
      
      <img src="/vridula-graduation.jpg" alt="Vridula&apos;s Graduation" className="w-full h-full object-cover  object-[center_25%]" />
    </div>
    <div className="flex items-center mb-4">
    <GraduationCap className="w-8 h-8 text-teal-600 mr-2" />
      <h3 className="text-xl font-semibold text-teal-800">Vridula&apos;s Graduation</h3>
    </div>
    <p className="text-teal-700">
      A proud moment as you completed your degree with remarkable achievements. 
      Your dedication and hard work have always been an inspiration.
    </p>
  </div>

  {/* Eshaan's Graduation */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="relative h-50 mb-4 bg-teal-50 rounded overflow-hidden">
      
      <img src="/eshaan-graduation.jpg" alt="Eshaan&apos;s Graduation" className="w-full h-full object-cover object-[center_30%]" />
    </div>
    <div className="flex items-center mb-4">
    <GraduationCap className="w-8 h-8 text-teal-600 mr-2" />
      <h3 className="text-xl font-semibold text-teal-800">Eshaan&apos;s Graduation</h3>
    </div>
    <p className="text-teal-700">
      Having you by my side made this achievement even more special. 
      Your support throughout my academic journey was invaluable.
    </p>
  </div>

  {/* Astro */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="relative h-50 mb-4 bg-teal-50 rounded overflow-hidden">
      
      <img src="/astro.jpg" alt="Astro" className="w-full h-full object-cover " />
    </div>
    <div className="flex items-center mb-4">
      <Dog className="w-8 h-8 text-teal-600 mr-2" />
      <h3 className="text-xl font-semibold text-teal-800">Welcome, Astro!</h3>
    </div>
    <p className="text-teal-700">
      One of our most cherished moments was welcoming Astro into our lives. 
      What started as a gift became a symbol of our growing family, bringing 
      endless joy and laughter to our home.
    </p>
  </div>
</div>
          

        </div>
      </section>

{/* Marriage Section */}
<section id="marriage" className="py-24 bg-white">
 <div className="max-w-4xl mx-auto px-8">
   <div className="flex items-center justify-center mb-8">
     <Diamond className="w-8 h-8 text-teal-600 mr-4" />
     <h2 className="text-3xl font-semibold text-teal-800">Our Marriage</h2>
   </div>
   <p className="text-center text-lg text-teal-700 mb-12">
     July 12th, 2025 - The beginning of forever
   </p>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* First Cultural Ceremony */}
     <div className="bg-white p-6 rounded-lg shadow-md">
       <div className="relative h-64 mb-4 bg-teal-50 rounded overflow-hidden">
         <img src="/m1.jpg" alt="First Cultural Ceremony" className="w-full h-full object-cover object-[center_30%]" />
       </div>
       <div className="flex items-center mb-2">
         <Diamond className="w-5 h-5 text-teal-600 mr-2" />
         <h3 className="text-xl font-semibold text-teal-800">First Cultural Ceremony</h3>
       </div>
       <p className="text-teal-700">Celebrating our love with traditional customs</p>
     </div>

     {/* Second Cultural Ceremony */}
     <div className="bg-white p-6 rounded-lg shadow-md">
       <div className="relative h-64 mb-4 bg-teal-50 rounded overflow-hidden">
         <img src="/m2.jpg" alt="Second Cultural Ceremony" className="w-full h-full object-cover object-[center_30%]" />
       </div>
       <div className="flex items-center mb-2">
         <Diamond className="w-5 h-5 text-teal-600 mr-2" />
         <h3 className="text-xl font-semibold text-teal-800">Second Cultural Ceremony</h3>
       </div>
       <p className="text-teal-700">Embracing our heritage with love</p>
     </div>

     {/* Reception */}
     <div className="bg-white p-6 rounded-lg shadow-md">
       <div className="relative h-64 mb-4 bg-teal-50 rounded overflow-hidden">
         <img src="/m3.jpg" alt="Reception" className="w-full h-full object-cover object-[center_30%]" />
       </div>
       <div className="flex items-center mb-2">
         <Heart className="w-5 h-5 text-teal-600 mr-2" />
         <h3 className="text-xl font-semibold text-teal-800">Reception Celebration</h3>
       </div>
       <p className="text-teal-700">Sharing our joy with friends and family</p>
     </div>
   </div>
 </div>
</section>

      {/* Qualities Section */}
      <section id="qualities" className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-8 h-8 text-teal-600 mr-4" />
            <h2 className="text-3xl font-semibold text-teal-800">Why I Love My Wife, Vridula</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Understanding', text: 'Your ability to understand me deeply makes our bond unique' },
              { title: 'Patience', text: 'Your endless patience has helped us grow stronger together' },
              { title: 'Support', text: 'Your unparalleled support makes every challenge conquerable' },
              { title: 'Love', text: 'Your love makes every day extraordinary' }
            ].map((quality) => (
              <div key={quality.title} className="bg-white p-6 rounded-lg shadow-md">
                <Star className="w-6 h-6 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-teal-800">{quality.title}</h3>
                <p className="text-teal-700">{quality.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Gallery */}
<section id="gallery" className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-8">
    <div className="flex items-center justify-center mb-8">
      <Camera className="w-8 h-8 text-teal-600 mr-4" />
      <h2 className="text-3xl font-semibold text-teal-800">Our Journey in Pictures</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g0.jpg" alt="Memory 1" className="w-full h-full object-cover object-[center_70%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g1.jpg" alt="Memory 1" className="w-full h-full object-cover object-[center_30%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g2.jpg" alt="Memory 2" className="w-full h-full object-cover object-[center_30%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g3.jpg" alt="Memory 3" className="w-full h-full object-cover object-[center_70%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g4.jpg" alt="Memory 4" className="w-full h-full object-cover object-[center_30%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g5.jpg" alt="Memory 5" className="w-full h-full object-cover object-[center_60%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g6.jpg" alt="Memory 6" className="w-full h-full object-cover object-[center_70%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g7.jpg" alt="Memory 6" className="w-full h-full object-cover object-[center_50%]" />
      </div>
      <div className="relative h-64 bg-teal-50 rounded-lg shadow-lg overflow-hidden">
        <img src="/g8.jpg" alt="Memory 6" className="w-full h-full object-cover object-[center_30%]" />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Heart className="w-8 h-8 mx-auto mb-4" />
          <p className="text-lg mb-2">Happy Valentine&apos;s Day, Vridula</p>
          <p className="text-sm opacity-75">Forever Yours, Eshaan</p>
        </div>
      </footer>
    </div>
  );
};

export default ValentineWebsite;
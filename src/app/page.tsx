"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaSplitAbout from '@/components/sections/about/MediaSplitAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Award, Sparkles, Heart, HelpCircle, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraSmallSpacing"
      background="noiseGradient"
      cardStyle="outline-light"
      primaryButtonStyle="outline"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Luxe Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Guests Say", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Book Now", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Experience Luxury Like Never Before"
          description="Discover unparalleled comfort and world-class hospitality at Luxe Hotel. Your sanctuary awaits."
          kpis={[
            { value: "98.5%", label: "Guest Satisfaction" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "20+", label: "Years Excellence" }
          ]}
          tag="Award-Winning Hospitality"
          tagIcon={Award}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102418013-rzccmo4j.jpg"
          imageAlt="Luxury hotel lobby with modern design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <MediaSplitAbout
          title="Your Home Away From Home"
          description="At Luxe Hotel, we believe every guest deserves an exceptional experience. Nestled in the heart of the city, our hotel combines elegant design with warm hospitality. From our attentive staff to our thoughtfully curated amenities, every detail is crafted to ensure your stay is nothing short of extraordinary."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102419068-uvjicliw.jpg"
          imageAlt="Beautiful luxury hotel exterior"
          buttons={[
            { text: "Learn More", href: "#amenities" }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardEight
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed for your comfort and relaxation"
          features={[
            {
              id: 1,
              title: "Luxury Spa",
              description: "Rejuvenate your mind and body with our full-service spa featuring holistic treatments and wellness therapies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102419862-bcxylsf0.jpg"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our award-winning chefs in an elegant dining atmosphere",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102420888-ujedabld.jpg"
            },
            {
              id: 3,
              title: "Fitness Center",
              description: "Stay active with our state-of-the-art fitness equipment and personalized training services",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102421541-sd7z3a98.jpg"
            },
            {
              id: 4,
              title: "Rooftop Pool",
              description: "Relax by our stunning rooftop pool with panoramic city views and premium poolside service",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102422179-w5ehpszr.jpg"
            }
          ]}
          tag="Premium Facilities"
          tagIcon={Sparkles}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "Luxe Hotel exceeded all my expectations. The service was impeccable, the rooms were beautifully designed, and the amenities were world-class. I'll definitely be returning.",
              name: "Sarah Mitchell",
              role: "Business Executive",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102422882-759w9jwh.png"
            },
            {
              id: "2",
              quote: "Our family vacation was unforgettable thanks to the incredible hospitality at Luxe Hotel. The staff went above and beyond to make our stay special.",
              name: "James Rodriguez",
              role: "Travel Enthusiast",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102423529-zc3ss15y.jpg"
            },
            {
              id: "3",
              quote: "As a frequent traveler, I can confidently say this is one of the finest hotels I've ever stayed at. Every detail is perfect.",
              name: "Emma Whitmore",
              role: "Corporate Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102424265-khuft1u3.jpg"
            },
            {
              id: "4",
              quote: "The luxury spa and fine dining restaurant were the highlights of our honeymoon. Thank you for making our trip magical.",
              name: "Michael Chen",
              role: "Newlywed",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102424731-5e5dxkql.jpg"
            },
            {
              id: "5",
              quote: "Outstanding value for money. The rooms are spacious, comfortable, and the location is perfect for exploring the city.",
              name: "Lisa Patel",
              role: "Tourism Consultant",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102425403-7051dkfw.jpg"
            },
            {
              id: "6",
              quote: "I hosted my corporate retreat here and everything was flawlessly executed. The meeting facilities and team were exceptional.",
              name: "David Thompson",
              role: "Corporate Events Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765102426083-nw8pczk1.jpg"
            }
          ]}
          variant="card"
          title="Loved by Our Guests"
          description="Read what our satisfied guests have to say about their unforgettable experiences at Luxe Hotel"
          tag="Guest Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "What is your check-in and check-out time?",
              content: "Standard check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to room availability."
            },
            {
              id: "2",
              title: "Do you offer room service?",
              content: "Yes, we offer 24-hour room service. Guests can order from our full menu of restaurant offerings, snacks, beverages, and more directly to their rooms."
            },
            {
              id: "3",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets in select rooms. Please contact our concierge desk at least 48 hours in advance to arrange pet accommodation. Additional fees may apply."
            },
            {
              id: "4",
              title: "What parking options are available?",
              content: "We offer complimentary valet parking and self-parking in our secure underground garage. Electric vehicle charging stations are also available."
            },
            {
              id: "5",
              title: "Is Wi-Fi included in room rates?",
              content: "Yes, complimentary high-speed Wi-Fi is included with all room bookings. Premium internet packages are available for enhanced speeds."
            },
            {
              id: "6",
              title: "Do you have conference facilities?",
              content: "We feature 15 versatile meeting spaces equipped with the latest technology. Our dedicated events team can assist with corporate meetings, conferences, and special events."
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay with us"
          tag="Guest Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to experience luxury hospitality? Reserve your perfect stay with us today."
          inputPlaceholder="Enter your email address"
          buttonText="Book Now"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="Luxe Hotel"
          description="Experience unparalleled luxury and hospitality at Luxe Hotel. We are committed to creating unforgettable memories for every guest."
          copyrightText="© 2025 Luxe Hotel. All rights reserved."
          columns={[
            {
              title: "Rooms & Suites",
              items: [
                { label: "Deluxe Rooms", href: "rooms" },
                { label: "Premium Suites", href: "rooms" },
                { label: "Royal Penthouse", href: "rooms" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Fine Dining", href: "amenities" },
                { label: "Event Space", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://www.example.com" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "https://www.example.com" },
                { label: "Terms of Service", href: "https://www.example.com" },
                { label: "Cancellation Policy", href: "https://www.example.com" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://www.facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://www.instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://www.twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://www.linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
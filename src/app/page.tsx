'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ChevronDown, 
  BookOpen, 
  Sword, 
  Heart, 
  Shield, 
  Castle, 
  ScrollText, 
  User, 
  Image as ImageIcon, 
  Compass 
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const features = [
  {
    icon: <Sword className="h-6 w-6" />,
    title: "Epic Battles",
    description: "Witness breathtaking combat scenes and strategic warfare.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Forbidden Love",
    description: "A love that defies kingdoms and destiny itself.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Noble Causes",
    description: "Chivalry and honor in the face of darkness.",
  },
  {
    icon: <Castle className="h-6 w-6" />,
    title: "Rich World",
    description: "Explore a beautifully crafted medieval realm.",
  },
];

const characters = [
  {
    name: "Sir Aldric",
    role: "The Noble Knight",
    description: "A valiant knight sworn to protect the realm, torn between duty and love.",
    image: "/images/knight.png",
  },
  {
    name: "Princess Elara",
    role: "The Enchanted Heir",
    description: "The kingdom's heir with a mysterious magical heritage and a will of steel.",
    image: "/images/princess.png",
  },
  {
    name: "Lord Valtor",
    role: "The Dark Advisor",
    description: "A powerful master of dark arts with ambitions that threaten the kingdom.",
    image: "/images/villain.png",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('story');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-[url('/images/medieval-texture.svg')] opacity-5" />
          
          {/* Animated floating elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full filter blur-xl"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/20 rounded-full filter blur-xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              A Tale of Love and Chivalry
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-serif leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Knight and the <span className="text-primary">Enchanted</span>
            <br />
            <span className="font-cursive text-5xl md:text-7xl text-secondary">Princess</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In a kingdom where magic weaves through the very air, a knight's oath leads to an unexpected love that will change the fate of the realm forever.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="group"
              onClick={() => {
                // Scroll to the story section
                const storySection = document.getElementById('story');
                storySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Begin the Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                // Scroll to the features section
                const featuresSection = document.getElementById('features');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover More
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>

          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground/50" />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-background/80">
        {/* Tabs Section */}
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-muted/50 rounded-lg">
              {['story', 'characters', 'gallery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {activeTab === 'story' && (
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold mb-8 font-serif text-center">The Enchanted Kingdom</h2>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      In the heart of the ancient kingdom of Eldoria, where magic flows like rivers and legends walk among men, a tale of love and destiny unfolds. The realm stands at the brink of chaos as dark forces gather in the shadows, threatening to consume the land in eternal night.
                    </p>
                    <p>
                      Sir Aldric, the kingdom's most trusted knight, is tasked with protecting Princess Elara, the kingdom's last hope. But when forbidden feelings ignite between them, they must choose between their hearts' desires and the fate of the realm.
                    </p>
                    <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary my-8">
                      <ScrollText className="h-8 w-8 text-primary mb-4" />
                      <p className="italic text-muted-foreground">
                        "In a world where duty and love collide, only the bravest hearts will light the way through the coming darkness."
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'characters' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {characters.map((character, index) => (
                    <motion.div
                      key={character.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-lg overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden p-4">
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div className="absolute inset-0 bg-[url('/images/medieval-texture.svg')] opacity-10 rounded-lg"></div>
                          <div className="absolute inset-0 border-2 border-amber-200/30 rounded-lg shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"></div>
                          <div className="absolute inset-0.5 border border-amber-100/20 rounded-md"></div>
                          <img 
                            src={character.image} 
                            alt={character.name}
                            className="h-[90%] w-[90%] object-contain relative z-10 border border-amber-200/20 rounded shadow-lg"
                          />
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-1">{character.name}</h3>
                        <p className="text-primary font-medium mb-4">{character.role}</p>
                        <p className="text-muted-foreground">{character.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Character Images */}
                  {characters.map((character, index) => (
                    <motion.div
                      key={`char-${index}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative aspect-[3/4] bg-muted/30 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:ring-2 hover:ring-primary/20"
                    >
                      <img 
                        src={character.image} 
                        alt={`${character.name} - ${character.role}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg">{character.name}</h3>
                        <p className="text-primary-foreground/80 text-sm">{character.role}</p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Additional Gallery Placeholders */}
                  {[
                    {
                      image: "/images/gallery/part1.jpg",
                      title: "The Knight's Devotion",
                      description: "Sir Aldric, the kingdom's most loyal knight, is assigned to protect Princess Elara. Little does he know, his heart isn't as guarded as the castle walls.",
                      delay: 0.3
                    },
                    {
                      image: "/images/gallery/part2.jpg",
                      title: "A Princess's Heart",
                      description: "Princess Elara, bound by duty but yearning for freedom, finds unexpected comfort in her silent guardian's presence.",
                      delay: 0.4
                    },
                    {
                      image: "/images/gallery/part3.jpg",
                      title: "The Dark Bargain",
                      description: "Lord Valtor demands the princess's hand in marriage, threatening to destroy the kingdom if his terms are not met.",
                      delay: 0.5
                    },
                    {
                      image: "/images/gallery/part4.jpg",
                      title: "Forbidden Love",
                      description: "In secret moments, the knight and princess confess their love, knowing their bond defies the kingdom's laws and the dark lord's decree.",
                      delay: 0.6
                    },
                    {
                      image: "/images/gallery/part5.jpg",
                      title: "The Painful Duty",
                      description: "Bound by honor, the knight must stand guard as his love is forced to marry another, his tears hidden behind his steel mask.",
                      delay: 0.7
                    },
                    {
                      image: "/images/gallery/part6.jpg",
                      title: "A Desperate Flight",
                      description: "On the eve of the wedding, they attempt to escape together, choosing love over duty and safety.",
                      delay: 0.8
                    },
                    {
                      image: "/images/gallery/part7.jpg",
                      title: "Betrayed and Captured",
                      description: "Their escape is foiled by Valtor's spies. The lovers are captured and thrown into the darkest dungeon.",
                      delay: 0.9
                    },
                    {
                      image: "/images/gallery/part8.jpg",
                      title: "Eternal Love",
                      description: "In their final moments, they find solace in each other's arms, their love shining brighter than the stars above the castle towers.",
                      delay: 1.0
                    },
                    {
                      image: "/images/gallery/part9.jpg",
                      title: "The Legend Lives On",
                      description: "Though their lives were cut short, their love story became legend. Whispers of the knight and princess echo through the ages, a timeless tale of love that even death could not conquer.",
                      delay: 1.1
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={`story-${index}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      className="group relative aspect-[4/5] bg-muted/30 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-primary/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-muted/50 flex items-center justify-center">
                            <ScrollText className="h-10 w-10 text-muted-foreground/50" />
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-white font-serif text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground/90 text-sm">{item.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                        Part {index + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 font-serif">Begin Your Journey</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our community of adventurers and never miss an update
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // First, scroll to the story section
                  const storySection = document.getElementById('story');
                  storySection?.scrollIntoView({ behavior: 'smooth' });
                  
                  // Then switch to the characters tab
                  setTimeout(() => {
                    setActiveTab('characters');
                  }, 500); // Small delay to ensure smooth transition
                }}
              >
                Meet the Characters
                <User className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
          </motion.div>
        </div>
      </section>
    </div>
  );
}

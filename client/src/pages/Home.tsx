import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Award, Briefcase } from "lucide-react";
import { useState } from "react";

/**
 * Modern Editorial Minimalism Design
 * - Playfair Display serif headlines with Lato sans-serif body
 * - Burnt orange (#D97706) accents reflecting African journalism
 * - Asymmetric layout showcasing featured articles
 * - Subtle textures and generous whitespace
 */

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  url: string;
  image?: string;
}

const featuredArticles: Article[] = [
  {
    id: "1",
    title: "Ahmed Musa Returns As Super Eagles Unveil Squad For 2026 World Cup Qualifiers",
    description: "Ahmed Musa leads veteran comeback as Coach Chelle unveils a blend of experience and rising stars for crucial World Cup qualifiers.",
    category: "Sports",
    date: "March 2025",
    url: "https://reportafrique.com/news/africa/nigeria/super-eagles-show-squad-for-2026-world-cup/",
    image: "/images/article-feature.png"
  },
  {
    id: "2",
    title: "BREAKING: Ex-Immigration Comptroller-General Killed By Gunmen In Abuja",
    description: "Gunmen suspected to be kidnappers have killed former Comptroller-General of the Nigerian Immigration Service in Abuja.",
    category: "Politics",
    date: "March 2025",
    url: "https://reportafrique.com/news/africa/nigeria/david-parradang-nis-killed/"
  },
  {
    id: "3",
    title: "OYO 2027: Makinde Gives Date To Announce Preferred Successor",
    description: "Oyo State Governor Seyi Makinde has revealed that he will disclose his preferred successor in January 2026.",
    category: "Politics",
    date: "March 2025",
    url: "https://reportafrique.com/news/africa/nigeria/seyi-makinde-date-to-announce-successor/"
  },
  {
    id: "4",
    title: "'Man With The Golden Arm' Who Saved 2.4 Million Babies Dies At 88",
    description: "James Harrison's rare blood donations saved millions of newborns from a deadly blood disorder.",
    category: "Health",
    date: "March 2025",
    url: "https://reportafrique.com/news/world/man-with-the-golden-arm-saved-babies-dies/"
  }
];

const skills = [
  "Digital Journalism",
  "SEO Content Strategy",
  "Fact-Checking",
  "Political Analysis",
  "Medical/Scientific Reporting",
  "Copy Editing",
  "Investigative Reporting",
  "AP Style",
  "CMS Management"
];

const awards = [
  { year: "2024", title: "Political Writing Excellence Award", organization: "SSMCU" },
  { year: "2022", title: "Top Male Writer Award", organization: "Faculty of Medical Science" },
  { year: "2020", title: "Writer of the Year Award", organization: "Faculty of Medical Science" }
];

export default function Home() {
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-cream text-deep-charcoal">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="serif-display text-2xl text-accent-orange">JF</h1>
          <div className="flex gap-8">
            <a href="#articles" className="text-sm font-medium hover:text-accent-orange transition">Articles</a>
            <a href="#about" className="text-sm font-medium hover:text-accent-orange transition">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent-orange transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-accent-orange" />
              <span className="text-sm font-medium text-accent-orange uppercase tracking-wide">Journalist & Content Strategist</span>
            </div>
            <h1 className="serif-display text-5xl md:text-6xl mb-6 leading-tight">
              Joshua Ferdinand
            </h1>
            <p className="text-xl text-secondary mb-8 leading-relaxed max-w-2xl">
              Prolific journalist with 773+ published articles. Specializing in bridging complex medical and scientific topics with public understanding, leveraging expertise in SEO-driven content, fact-checking, and political analysis across African and global news landscapes.
            </p>
            <div className="flex gap-4">
              <Button className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-6 text-base">
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-base border-2 border-accent-orange text-accent-orange hover:bg-orange-50">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="articles" className="container py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent-orange" />
            <h2 className="serif-display text-4xl">Featured Articles</h2>
          </div>
          <p className="text-secondary text-lg">Recent work from Report Afrique and other publications</p>
        </div>

        {/* Featured Article - Large */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <a 
              href={featuredArticles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredArticle(featuredArticles[0].id)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <Card className="overflow-hidden border-0 editorial-shadow hover:shadow-2xl transition-shadow duration-300 h-full">
                {featuredArticles[0].image && (
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img 
                      src={featuredArticles[0].image} 
                      alt={featuredArticles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-accent-orange/10 text-accent-orange">
                      {featuredArticles[0].category}
                    </Badge>
                    <span className="text-xs text-secondary">{featuredArticles[0].date}</span>
                  </div>
                  <CardTitle className="serif-display text-2xl leading-tight">
                    {featuredArticles[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary leading-relaxed">
                    {featuredArticles[0].description}
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Sidebar - Quick Stats */}
          <div className="space-y-6">
            <Card className="border-0 editorial-shadow">
              <CardHeader>
                <CardTitle className="serif-display text-xl flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-orange" />
                  By The Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl serif-display text-accent-orange">773+</div>
                  <p className="text-sm text-secondary">Published Articles</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-2xl serif-display text-accent-orange">8+</div>
                  <p className="text-sm text-secondary">Years Experience</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="text-2xl serif-display text-accent-orange">3</div>
                  <p className="text-sm text-secondary">Awards Won</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 editorial-shadow">
              <CardHeader>
                <CardTitle className="serif-display text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent-orange" />
                  Latest Award
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-accent-orange mb-1">Political Writing Excellence</p>
                <p className="text-sm text-secondary">SSMCU • October 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredArticles.slice(1, 4).map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              onMouseEnter={() => setHoveredArticle(article.id)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              <Card className="border-0 editorial-shadow hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-accent-orange/10 text-accent-orange text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-secondary">{article.date}</span>
                  </div>
                  <CardTitle className="serif-display text-lg group-hover:text-accent-orange transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary text-sm leading-relaxed">
                    {article.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://reportafrique.com/author/joshua/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-2 border-accent-orange text-accent-orange hover:bg-orange-50">
              View All Articles on Report Afrique <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* About Section with Headshot */}
      <section id="about" className="bg-white py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-accent-orange" />
              <h2 className="serif-display text-4xl">About Joshua</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <img 
                  src="/images/joshua-headshot.jpg" 
                  alt="Joshua Ferdinand"
                  className="w-full rounded-lg editorial-shadow"
                />
                <div className="mt-6 p-4 bg-accent-orange/10 rounded-lg">
                  <p className="text-sm text-accent-orange font-medium">📧 Get in Touch</p>
                  <a href="mailto:Joshuaferdinand512@gmail.com" className="text-sm text-secondary hover:text-accent-orange transition mt-2 block">
                    Joshuaferdinand512@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="mb-12">
                <h3 className="serif-display text-2xl mb-6">Professional Summary</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Joshua Ferdinand is a prolific journalist and content strategist with a proven track record of producing 773+ high-quality published articles. With a unique background combining Medical Laboratory Science education and extensive journalism experience, he excels at translating complex medical and scientific topics into engaging, accessible content for diverse audiences.
                </p>
                <p className="text-secondary leading-relaxed">
                  His expertise spans digital journalism, SEO-driven content strategy, rigorous fact-checking, and in-depth political analysis. Based in Port Harcourt, Nigeria, Joshua has contributed significantly to Report Afrique's coverage of African and global news, with particular strength in health policy, political developments, and investigative reporting.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="serif-display text-2xl mb-6">Core Competencies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-accent-orange/10 text-accent-orange hover:bg-accent-orange/20 transition-colors px-4 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-accent-orange" />
              <h2 className="serif-display text-4xl">Career Experience</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="serif-display text-2xl mb-6">Professional Background</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-accent-orange pl-4">
                  <p className="font-medium text-accent-orange">Journalist at Report Afrique</p>
                  <p className="text-sm text-secondary">Aug 2024 – Present</p>
                  <p className="text-sm mt-2">High-volume editorial workflow with 773+ published articles covering politics, health, and current affairs.</p>
                </div>
                <div className="border-l-4 border-accent-orange pl-4">
                  <p className="font-medium text-accent-orange">Broadcast Journalist at Excel FM</p>
                  <p className="text-sm text-secondary">Mar 2022 – Sep 2023</p>
                  <p className="text-sm mt-2">News anchoring, field reporting, and audience engagement for on-air broadcasting.</p>
                </div>
                <div className="border-l-4 border-accent-orange pl-4">
                  <p className="font-medium text-accent-orange">Bachelor of Medical Laboratory Science</p>
                  <p className="text-sm text-secondary">Rivers State University • 2020-2025</p>
                  <p className="text-sm mt-2">Biomedical science foundation enabling expertise in medical/scientific reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="container py-20">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-accent-orange" />
            <h2 className="serif-display text-4xl">Recognition</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, idx) => (
            <Card key={idx} className="border-0 editorial-shadow hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Award className="w-8 h-8 text-accent-orange" />
                  <span className="text-2xl serif-display text-accent-orange">{award.year}</span>
                </div>
                <CardTitle className="serif-display text-lg">{award.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary text-sm">{award.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-accent-orange text-white py-20">
        <div className="container text-center">
          <h2 className="serif-display text-4xl md:text-5xl mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Interested in collaboration, speaking engagements, or learning more about my work? Get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:Joshuaferdinand512@gmail.com">
              <Button className="bg-white text-accent-orange hover:bg-gray-100 px-8 py-6 text-base">
                Send Email
              </Button>
            </a>
            <a href="https://reportafrique.com/author/joshua/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base">
                Visit Report Afrique
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-charcoal text-cream py-12 border-t border-accent-orange/20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="serif-display text-xl text-accent-orange mb-4">Joshua Ferdinand</h3>
              <p className="text-sm text-cream/70">Prolific journalist specializing in African news, medical/scientific reporting, and political analysis.</p>
            </div>
            <div>
              <h4 className="font-medium text-cream mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#articles" className="text-cream/70 hover:text-accent-orange transition">Articles</a></li>
                <li><a href="#about" className="text-cream/70 hover:text-accent-orange transition">About</a></li>
                <li><a href="https://reportafrique.com/author/joshua/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-orange transition">Report Afrique</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-cream mb-4">Contact</h4>
              <p className="text-sm text-cream/70">
                <a href="mailto:Joshuaferdinand512@gmail.com" className="hover:text-accent-orange transition">
                  Joshuaferdinand512@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-accent-orange/20 pt-8 text-center text-sm text-cream/50">
            <p>&copy; 2025 Joshua Ferdinand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

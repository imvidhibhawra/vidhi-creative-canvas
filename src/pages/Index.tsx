
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Award, Briefcase, GraduationCap, User, ChevronDown, Camera, Trophy, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = {
    "Programming Languages": ["C++", "HTML", "CSS", "Python", "C", "Java", "R"],
    "Libraries/Frameworks": ["React", "JavaScript"],
    "Tools/Platforms": ["Git", "VS Code", "Cursor AI"],
    "Databases": ["SQL", "MongoDB"]
  };

  const projects = [
    {
      title: "National Institute of Technology Delhi Website",
      description: "Collaborated with Alok Kumar to develop the official website for NIT Delhi, focusing on creating a user-friendly and responsive platform. Enhanced the institute's online presence and improved access to important information for students, faculty, and visitors through modern web development practices.",
      detailedDescription: "This comprehensive web development project involved redesigning NIT Delhi's entire digital presence. We implemented responsive design principles, optimized loading speeds, and created an intuitive navigation system that serves thousands of users daily.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Accessibility"],
      features: ["Mobile-first design", "SEO optimization", "Fast loading times", "Accessibility compliance"],
      link: "#",
      category: "Web Development"
    },
    {
      title: "Khalsa College of Engineering & Technology Website",
      description: "Developed using HTML, CSS, JavaScript, and WordPress with responsive design and performance optimization. Focused on creating a modern, user-friendly website with customized features based on college requirements.",
      detailedDescription: "A complete website overhaul for KCET using modern web technologies and WordPress CMS. Implemented custom themes, optimized performance, and integrated various college-specific functionalities for students and faculty.",
      tech: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"],
      features: ["Custom WordPress themes", "Performance optimization", "Admin dashboard", "Student portal integration"],
      link: "#",
      category: "CMS Development"
    },
    {
      title: "Job Application Template System",
      description: "Well-structured job application template with tailored resume and cover letter guidelines. Includes customization advice and interview preparation tips for various job roles and industries.",
      detailedDescription: "A comprehensive template system designed to help job seekers create professional applications. Features industry-specific templates, automated formatting, and guided content creation with best practices.",
      tech: ["Documentation", "Template Design", "Content Strategy", "User Experience"],
      features: ["Multiple industry templates", "Customization guidelines", "Interview prep", "Skills highlighting"],
      link: "#",
      category: "Documentation"
    },
    {
      title: "GPS-based Toll Systems Simulation",
      description: "Simulates a toll-based system using GPS coordinates with Python libraries for geospatial data handling. Vehicles are tracked through road networks with automatic toll deduction in predefined zones.",
      detailedDescription: "An advanced simulation system that demonstrates real-world toll collection using GPS technology. Implements complex algorithms for route tracking, zone detection, and automated billing with data visualization.",
      tech: ["Python", "GPS APIs", "Geospatial Libraries", "Data Visualization", "Pandas", "Matplotlib"],
      features: ["Real-time tracking", "Zone-based billing", "Route optimization", "Visual analytics dashboard"],
      link: "#",
      category: "Software Development"
    }
  ];

  const experience = [
    {
      company: "NIT DELHI",
      role: "Web Development Intern",
      period: "June 2024 - Aug 2024",
      description: "Redesigned the official website to enhance user experience, accessibility, and navigation using modern web development practices."
    },
    {
      company: "IBM",
      role: "Summer Intern Online",
      period: "Jun 2024 - Aug 2024",
      description: "Completed Front-end Web Development internship gaining hands-on experience with responsive design and interactive web projects."
    },
    {
      company: "UiPath",
      role: "Student Developer & Campus Ambassador",
      period: "Feb 2025 - Present",
      description: "Led automation awareness campaigns and organized tech events, achieving 20% increase in community engagement."
    }
  ];

  const certifications = [
    "C Programming - Udemy",
    "CSS & JavaScript - Udemy",
    "GitHub - Udemy",
    "WordPress Design - Udemy",
    "Python Programming",
    "UiPath Business Automation Platform 2024",
    "Web Development Fundamentals",
    "AWS Certified Cloud Practitioner - KodeKloud",
    "Git from Scratch - LinkedIn",
    "R Programming - Udemy"
  ];

  // Gallery data for Project Showcase
  const galleryData = {
    certificates: [
      { id: 1, title: "C Programming Certificate", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop", category: "Programming" },
      { id: 2, title: "JavaScript Certification", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop", category: "Web Development" },
      { id: 3, title: "AWS Cloud Practitioner", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop", category: "Cloud Computing" },
      { id: 4, title: "UiPath Automation", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", category: "RPA" },
    ],
    projects: [
      { id: 1, title: "NIT Delhi Website", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop", category: "Web Development" },
      { id: 2, title: "KCET Website", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop", category: "WordPress" },
      { id: 3, title: "GPS Toll System", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop", category: "Python" },
      { id: 4, title: "Job Application Template", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop", category: "Documentation" },
    ],
    achievements: [
      { id: 1, title: "Tech Urja 2k24 Organizer", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop", category: "Event Management" },
      { id: 2, title: "8.78+ CGPA Recognition", image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop", category: "Academic" },
      { id: 3, title: "Git & GitHub Session", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop", category: "Teaching" },
      { id: 4, title: "DSA Learning Session", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop", category: "Mentoring" },
    ],
    community: [
      { id: 1, title: "UiPath Community", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop", category: "RPA Community" },
      { id: 2, title: "Campus Ambassador", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop", category: "Leadership" },
      { id: 3, title: "Tech Events", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop", category: "Organizing" },
      { id: 4, title: "Student Developer", image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=400&h=300&fit=crop", category: "Development" },
    ]
  };

  const ScrollToSection = ({ sectionId, children }: { sectionId: string; children: React.ReactNode }) => (
    <button
      onClick={() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }}
      className="transition-all duration-300 hover:text-purple-600"
    >
      {children}
    </button>
  );

  const GalleryCard = ({ item, icon: Icon }: { item: any; icon: any }) => (
    <div className="group relative overflow-hidden rounded-xl bg-slate-800/50 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-500 hover:scale-[1.02] cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center mb-2">
            <Icon size={16} className="text-purple-400 mr-2" />
            <Badge variant="outline" className="border-purple-500/30 text-purple-300 text-xs">
              {item.category}
            </Badge>
          </div>
          <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vidhi Bhawra
            </div>
            <div className="hidden md:flex space-x-8">
              <ScrollToSection sectionId="hero">Home</ScrollToSection>
              <ScrollToSection sectionId="about">About</ScrollToSection>
              <ScrollToSection sectionId="experience">Experience</ScrollToSection>
              <ScrollToSection sectionId="projects">Projects</ScrollToSection>
              <ScrollToSection sectionId="showcase">Project Showcase</ScrollToSection>
              <ScrollToSection sectionId="skills">Skills</ScrollToSection>
              <ScrollToSection sectionId="contact">Contact</ScrollToSection>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <User size={48} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in">
            Vidhi Bhawra
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in">
            Full Stack Developer & AI Enthusiast
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
            BTech CSE student with minor in AI from IIT Ropar, passionate about creating innovative web solutions and automation technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:vidhiv671@gmail.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-4 h-4 mr-2" />
              View Projects
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vidhiv671@gmail.com" className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-125">
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-400">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white">Indian Institute of Technology Ropar</h3>
                  <p className="text-gray-400">Minor in AI BTech | Jan 2025 - Present</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Khalsa College of Engg. and Technology</h3>
                  <p className="text-gray-400">CSE BTech | Aug 2022 - Present</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Des Raj Heritage Public School</h3>
                  <p className="text-gray-400">Intermediate | June 2019 - June 2021</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center text-pink-400">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm text-gray-300">• Secured 8.78+ CGPA in 5th Semester</div>
                <div className="text-sm text-gray-300">• Organized Tech Urja 2k24 at KCET</div>
                <div className="text-sm text-gray-300">• Git and GitHub Session Organizer</div>
                <div className="text-sm text-gray-300">• Hosted DSA Learning Session</div>
                <div className="text-sm text-gray-300">• 20% increase in community engagement at UiPath</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-102">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-purple-400 font-semibold">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className="border-pink-500/30 text-pink-300 group-hover:border-pink-400/60 group-hover:text-pink-200 transition-all duration-300"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {project.detailedDescription}
                    </p>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-xs text-gray-400 flex items-center">
                            <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-purple-500/30 text-purple-300 group-hover:border-purple-400/60 group-hover:text-purple-200 group-hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 group-hover:bg-purple-500/20 transition-all duration-300"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="showcase" className="relative z-10 py-20 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Project Showcase
          </h2>
          
          <Tabs defaultValue="certificates" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800/50 border border-purple-500/20">
              <TabsTrigger 
                value="certificates" 
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 flex items-center gap-2"
              >
                <FileText size={16} />
                <span className="hidden sm:inline">Certificates</span>
              </TabsTrigger>
              <TabsTrigger 
                value="projects" 
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 flex items-center gap-2"
              >
                <Code size={16} />
                <span className="hidden sm:inline">Projects</span>
              </TabsTrigger>
              <TabsTrigger 
                value="achievements" 
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 flex items-center gap-2"
              >
                <Trophy size={16} />
                <span className="hidden sm:inline">Achievements</span>
              </TabsTrigger>
              <TabsTrigger 
                value="community" 
                className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 flex items-center gap-2"
              >
                <Users size={16} />
                <span className="hidden sm:inline">Community</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="certificates" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryData.certificates.map((item) => (
                  <GalleryCard key={item.id} item={item} icon={FileText} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryData.projects.map((item) => (
                  <GalleryCard key={item.id} item={item} icon={Code} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryData.achievements.map((item) => (
                  <GalleryCard key={item.id} item={item} icon={Trophy} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryData.community.map((item) => (
                  <GalleryCard key={item.id} item={item} icon={Users} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-slate-700/50 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-slate-800/50 p-3 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-102"
                  >
                    <p className="text-gray-300">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">vidhiv671@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 mx-auto mb-4 text-pink-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+91 79866 60521</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Batala, Punjab</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-300 mb-8">Ready to collaborate on your next project?</p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:vidhiv671@gmail.com')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 bg-slate-900/50 border-t border-purple-500/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Vidhi Bhawra. Crafted with passion and innovation.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

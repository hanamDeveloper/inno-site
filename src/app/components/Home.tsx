import { Link } from "react-router";
import { Shield, Brain, Lock, ArrowRight, Check, Award, Users, Cpu, Eye, ShieldCheck, Building2, Zap, FileSearch, TrendingUp, Server, Network, Activity, Fingerprint, Radio, DatabaseZap, Sparkles, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import hero3D from "../../../public/3d.png";
import teamImage from "../../../public/team_image.png";
import aiSecurityDiagram from "../../../public/1.png";
import proactiveCyberSecurityImage from "../../../public/3.png";
import aiotSecurityImage from "../../../public/2.png";
import quantumCryptographyImage from "../../../public/4.png";

export function Home() {
  const mainServices = [
    {
      icon: Sparkles,
      title: "생성형 AI 모델",
      description: "자체 개발 생성형 AI 모델로 맞춤형 보안 솔루션 구현",
      gradient: "from-purple-600 to-pink-500",
      image: "https://images.unsplash.com/photo-1562544887-593f89e2d21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwQUklMjBuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzE0MDIxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Shield,
      title: "AI 보안 플랫폼",
      description: "통합 AI 보안 관제 시스템으로 실시간 위협 대응",
      gradient: "from-blue-600 to-cyan-500",
      image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHNlY3VyaXR5JTIwcGxhdGZvcm0lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxNDAyMTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Lock,
      title: "AIoT 보안 기술",
      description: "IoT와 AI를 결합한 차세대 보안 기술",
      gradient: "from-green-600 to-teal-500",
      image: "https://images.unsplash.com/photo-1740477959006-798042a324aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY3J5cHRvZ3JhcGh5JTIwZW5jcnlwdGlvbnxlbnwxfHx8fDE3NzE0MDIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Target,
      title: "선제적 사이버보안",
      description: "화이트 해커의 능동적 위협 헌팅 및 즉각 대응",
      gradient: "from-red-600 to-orange-500",
      image: "https://images.unsplash.com/photo-1614064643392-8dd713152ae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9hY3RpdmUlMjBjeWJlcnNlY3VyaXR5JTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzE0MDIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const technologies = [
    {
      icon: Fingerprint,
      title: "디바이스 지문인증",
      description: "고유 디바이스 식별 및 인증",
      color: "blue",
    },
    {
      icon: Lock,
      title: "온디바이스 암호화",
      description: "디바이스 내부 데이터 보호",
      color: "purple",
    },
    {
      icon: Brain,
      title: "엣지 AI 보안",
      description: "디바이스 자체 AI 위협분석",
      color: "pink",
    },
    {
      icon: Zap,
      title: "실시간 보안패치",
      description: "제로타임 취약점 대응",
      color: "cyan",
    },
  ];

  const professionalServices = [
    {
      icon: Shield,
      title: "정보보호 컨설팅",
      items: ["보안 정책 수립", "위험 분석 및 평가", "컴플라이언스 대응", "보안 아키텍처 설계"],
      iconBg: "from-blue-500 to-cyan-400",
    },
    {
      icon: FileSearch,
      title: "취약점 분석",
      items: ["모의해킹 서비스", "소스코드 진단", "웹/앱 취약점 분석", "보안 취약점 DB"],
      iconBg: "from-purple-500 to-pink-400",
    },
    {
      icon: Eye,
      title: "위협 헌팅",
      items: ["APT 공격 대응", "침해사고 분석", "포렌식 조사", "보안 모니터링"],
      iconBg: "from-red-500 to-orange-400",
    },
  ];

  const stats = [
    { number: "27+", label: "협력 기관", icon: Building2 },
    { number: "13", label: "핵심 기술\n(기술특허,논문 등)", icon: Award },
    { number: "24/7", label: "보안 모니터링", icon: Activity },
    { number: "100%", label: "고객 만족", icon: TrendingUp },
  ];

  const securityFeatures = [
    { icon: Fingerprint, title: "생체 인증", desc: "다중 생체인증 시스템" },
    { icon: Network, title: "네트워크 보안", desc: "차세대 방화벽" },
    { icon: DatabaseZap, title: "데이터 암호화", desc: "양자내성 암호화" },
    { icon: Radio, title: "위협 탐지", desc: "AI 기반 실시간 탐지" },
  ];

  const coreTechnologies = [
    {
      id: "lmm-ai-security",
      icon: Brain,
      title: "LMM 기반 AI 보안 엔진",
      description: "대규모 언어모델을 활용한 차세대 지능형 위협 탐지 및 대응 시스템",
      color: "from-purple-600 to-pink-500",
      image: aiSecurityDiagram,
    },
    {
      id: "quantum-cryptography",
      icon: Shield,
      title: "양자내성 암호 보안",
      description: "양자컴퓨터 시대를 대비한 포스트 양자 암호화로 미래의 보안 위협에 대응",
      color: "from-blue-600 to-cyan-500",
      image: quantumCryptographyImage,
    },
    {
      id: "aiot-security",
      icon: Lock,
      title: "AIoT 보안 기술",
      description: "인공지능과 사물인터넷을 결합한 차세대 스마트 보안 솔루션",
      color: "from-green-600 to-teal-500",
      image: aiotSecurityImage,
    },
    {
      id: "proactive-cybersecurity",
      icon: Eye,
      title: "선제적 사이버보안",
      description: "전문 화이트해커 팀의 능동적 위협 탐지 및 대응으로 사이버 공격을 사전에 차단",
      color: "from-red-600 to-orange-500",
      image: proactiveCyberSecurityImage,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[320px] lg:min-h-[380px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-950 to-blue-950">
        {/* Background Image - Multiple layers for depth */}
        <div className="absolute inset-0 z-0">
          {/* Main background image */}
          <img
            src={hero3D}
            alt="Cybersecurity Hero"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Second layer with different position */}
          <img
            src={hero3D}
            alt="Cybersecurity Pattern"
            className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-8 mix-blend-screen"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-gray-900/90 to-blue-950/90"></div>
          {/* Additional subtle pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-slate-500/3"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-500 rounded-full filter blur-3xl opacity-5 animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-10 md:py-12 lg:py-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white text-center lg:text-right lg:pl-8 xl:pl-16">
              <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                AI 기반 사이버보안
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  차세대 보안 솔루션
                </span>
              </h1>
              
              <p className="text-[15px] sm:text-base md:text-lg text-blue-100 leading-relaxed text-center lg:text-right">
                인공지능 기반 선제적 사이버 보안 기술을 제공하여
                <br />
                다양한 산업의{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-bold">
                  디지털 자산을 완벽하게 보호
                </span>
                합니다
              </p>
            </div>

            {/* Right 3D Image with Perspective - Height Cropped */}
            <div className="relative hidden lg:flex justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative group w-[350px] h-[350px] cursor-pointer">
                    {/* Main 3D Image Container - Square */}
                    <div 
                      className="relative z-20 w-full h-full transform-gpu transition-all duration-700 ease-out group-hover:scale-105"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Image with square aspect ratio */}
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-700 relative">
                        <img
                          src={hero3D}
                          alt="AI Security 3D Visualization"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          style={{
                            filter: 'brightness(1.15) contrast(1.15) saturate(1.2)',
                          }}
                        />
                        {/* Inner glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-700"></div>
                      </div>
                      
                      {/* 3D depth layers - creating depth effect */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-700 -z-10"
                        style={{
                          transform: 'translateZ(-30px)',
                          filter: 'blur(15px)',
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/25 to-pink-500/25 rounded-2xl -z-20"
                        style={{
                          transform: 'translateZ(-60px)',
                          filter: 'blur(25px)',
                        }}
                      ></div>
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl -z-30"
                        style={{
                          transform: 'translateZ(-90px)',
                          filter: 'blur(35px)',
                        }}
                      ></div>
                      
                      {/* Frame effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-700"
                        style={{
                          transform: 'translateZ(2px)',
                        }}
                      ></div>
                    </div>
                    
                    {/* Animated glow effect extending beyond boundaries */}
                    <div className="absolute -inset-16 bg-gradient-to-br from-cyan-500/40 via-purple-500/40 to-pink-500/40 blur-3xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse -z-10 rounded-full"></div>
                    
                    {/* Extended glow that bleeds into background */}
                    <div className="absolute -inset-24 bg-gradient-to-br from-cyan-600/30 via-purple-600/30 to-pink-600/30 blur-[120px] opacity-50 group-hover:opacity-80 transition-all duration-1000 -z-20 rounded-full"></div>
                    
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50"></div>
                      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping delay-150 shadow-lg shadow-purple-400/50"></div>
                      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-300 shadow-lg shadow-blue-400/50"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-500 shadow-lg shadow-pink-400/50"></div>
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-700 shadow-lg shadow-yellow-400/50"></div>
                    </div>

                    {/* Corner accents for 3D effect */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/60 group-hover:border-cyan-400 transition-colors duration-500"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/60 group-hover:border-purple-400 transition-colors duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/60 group-hover:border-purple-400 transition-colors duration-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/60 group-hover:border-cyan-400 transition-colors duration-500"></div>

                    {/* Glowing orbs around the image */}
                    <div className="absolute -top-8 right-0 w-20 h-20 bg-cyan-400 rounded-full filter blur-2xl opacity-40 group-hover:opacity-70 animate-pulse"></div>
                    <div className="absolute -bottom-8 left-0 w-24 h-24 bg-purple-500 rounded-full filter blur-2xl opacity-40 group-hover:opacity-70 animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 -right-12 w-16 h-16 bg-pink-400 rounded-full filter blur-2xl opacity-30 group-hover:opacity-60 animate-pulse delay-500"></div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                      대표이사 인사말
                    </DialogTitle>
                    <DialogDescription asChild>
                      <div className="text-base leading-relaxed text-gray-700 space-y-6">
                        <p className="font-semibold text-lg text-gray-900">
                          주식회사 이노앱에 방문해 주셔서 감사합니다.
                        </p>
                        
                        <p>
                          우리는 사회적 가치를 창출하는 것을 중요한 사명으로 삼고,<br />
                          이를 해결하는 혁신적인 소프트웨어 솔루션을 제공합니다.
                        </p>
                        
                        <p>
                          빠르게 변화하는 디지털 시대에서,<br />
                          기술의 발전은 사회 문제 해결에 있어 중요한 열쇠가 될 수 있습니다.
                        </p>
                        
                        <p>
                          ㈜이노앱은 그 가치를 실현하기 위해 끊임없이 노력하고 있으며, 지속 가능한 미래를 위해 더 나은 사회를 만드는 데 기여하고자 합니다.
                        </p>
                        
                        <p>
                          우리는 고객의 목소리에 귀 기울이고,<br />
                          사회적 혁신을 다하는 기업으로서 투명하고 신뢰받는 솔루션을 제공하기 위해 항상 최선을 다하고 있습니다.
                        </p>
                        
                        <p>
                          또한, 다양한 사회 문제에 대한 해결책을 기술적으로 구현함으로써 시장들의 삶에 긍정적인 변화를 가져오고, 더 나아가 사회 전반에 도움이 될 수 있도록 하겠습니다.
                        </p>
                        
                        <p>
                          앞으로도 ㈜이노앱은 혁신적이고 지속 가능한 기술을 통해 더 나은 사회를 만드는 데 앞장서겠습니다.
                        </p>
                        
                        <p className="font-semibold text-gray-900">
                          여러분의 많은 관심과 성원 부탁드립니다.
                        </p>
                        
                        <p className="font-semibold text-gray-900">
                          감사합니다.
                        </p>
                        
                        <div className="pt-4 border-t border-gray-200 mt-6">
                          <p className="text-right text-gray-900 font-semibold">
                            주식회사 이노앱<br />
                            대표이사 김윤홍
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <stat.icon className="text-blue-600" size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium whitespace-pre-line">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4 transform hover:rotate-12 transition-transform">
              <Server className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">핵심 보안 기술</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최첨단 AI와 하드웨어 보안 기술의 융합
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}></div>
                <CardHeader className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              <Link to="/technology">
                기술 자세히 보기
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767628975195-e87f54e5ebb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc21hcnQlMjBjaXR5JTIwc2t5bGluZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNDExNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Futuristic Smart City"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-indigo-950/90"></div>
        </div>
        
        {/* Infinite Horizontal Scrolling Technologies */}
        <div className="relative z-10 w-full">
          <div className="flex animate-scroll-left">
            {/* First set of technologies */}
            {coreTechnologies.map((tech, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-[400px] px-4"
              >
                <Link to={`/technology#${tech.id}`} className="group cursor-pointer block">
                  {/* Larger Technology Card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/20 transition-all overflow-hidden hover:scale-105 duration-500 shadow-2xl">
                    {/* Image Container - Larger */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay matching tech color */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      {/* Icon overlay */}
                      <div className="absolute top-6 right-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <tech.icon className="text-white" size={32} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-base text-blue-100 line-clamp-3 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 blur-2xl transition-all duration-700 pointer-events-none`}></div>
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {coreTechnologies.map((tech, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-[400px] px-4"
              >
                <Link to={`/technology#${tech.id}`} className="group cursor-pointer block">
                  {/* Larger Technology Card */}
                  <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/20 transition-all overflow-hidden hover:scale-105 duration-500 shadow-2xl">
                    {/* Image Container - Larger */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay matching tech color */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      
                      {/* Icon overlay */}
                      <div className="absolute top-6 right-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <tech.icon className="text-white" size={32} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                        {tech.title}
                      </h3>
                      <p className="text-base text-blue-100 line-clamp-3 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 blur-2xl transition-all duration-700 pointer-events-none`}></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Custom Animation Keyframes */}
        <style jsx>{`
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll-left {
            animation: scrollLeft 40s linear infinite;
          }
          
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Professional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4 transform hover:rotate-12 transition-transform">
              <Users className="text-purple-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">전문 보안 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              화이트해커 팀과 보안 전문가가 제공하는 종합 보안 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {professionalServices.map((service, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.iconBg} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}></div>
                <CardHeader className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white relative overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={teamImage} 
            alt="Security Background" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-2xl">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-lg">
            이노앱의 보안 전문가가 귀사의 사이버 보안을 책임집니다
          </p>
        </div>
      </section>
    </div>
  );
}
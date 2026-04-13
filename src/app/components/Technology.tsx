import { Shield, Brain, Lock, Eye, ShieldCheck, Zap, CheckCircle, Code, Cpu, Fingerprint } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aiSecurityDiagram from "../../../public/1.png";
import proactiveCyberSecurityImage from "../../../public/3.png";
import aiotSecurityImage from "../../../public/2.png";
import quantumCryptographyImage from "../../../public/4.png";

export function Technology() {
  const mainTechnologies = [
    {
      id: "lmm-ai-security",
      icon: Brain,
      title: "LMM 기반 AI 보안 엔진",
      description: "대규모 언어모델(Large Language Model)을 활용한 차세대 지능형 위협 탐지 및 대응 시스템입니다",
      color: "from-purple-600 to-pink-500",
      image: aiSecurityDiagram,
      features: [
        "자연어 처리 기반 분석 - 로그와 이벤트를 자연어로 분석하여 복잡한 패턴 탐지",
        "실시간 위협 인텔리전스 - 최신 위협 정보를 실시간으로 학습하고 적용",
        "자동화된 대응 - 탐지된 위협에 대한 자동 분석 및 대응 조치",
      ],
      detailedFeatures: [
        { icon: Brain, title: "자연어 처리 기반 분석", desc: "로그와 이벤트를 자연어로 분석하여 복잡한 패턴 탐지", color: "purple" },
        { icon: Zap, title: "실시간 위협 인텔리전스", desc: "최신 위협 정보를 실시간으로 학습하고 적용", color: "blue" },
        { icon: Shield, title: "자동화된 대응", desc: "탐지된 위협에 대한 자동 분석 및 대응 조치", color: "green" },
      ],
    },
    {
      id: "aiot-security",
      icon: Lock,
      title: "AIoT 보안 기술",
      description: "인공지능(AI)과 사물인터넷(IoT)을 결합한 차세대 스마트 보안 솔루션입니다",
      color: "from-green-600 to-teal-500",
      image: aiotSecurityImage,
      features: [
        "엣지 AI 보안 - 디바이스 내부에서 실시간 위협 분석 및 대응",
        "온디바이스 암호화 - 디바이스 단에서 데이터 암호화 및 보안 처리",
        "디바이스 지문인증 - 고유 디바이스 식별 및 무결성 검증",
      ],
      detailedFeatures: [
        { icon: Cpu, title: "엣지 AI 보안", desc: "디바이스 내부에서 실시간 위협 분석 및 대응", color: "cyan" },
        { icon: Lock, title: "온디바이스 암호화", desc: "디바이스 단에서 데이터 암호화 및 보안 처리", color: "teal" },
        { icon: Fingerprint, title: "디바이스 지문인증", desc: "고유 디바이스 식별 및 무결성 검증", color: "emerald" },
      ],
    },
    {
      id: "proactive-cybersecurity",
      icon: Eye,
      title: "선제적 사이버보안",
      description: "전문 화이트 해커팀의 능동적 위협 탐지 및 대응으로 사이버 공격을 사전에 차단합니다",
      color: "from-red-600 to-orange-500",
      image: proactiveCyberSecurityImage,
      features: [
        "사이버위협헌팅 - 능동적으로 위협을 탐지하고 추적하여 공격 사전 차단",
        "모의해킹 및 침투 테스트 - 실제 공격 시나리오를 재현하여 보안 취약점 사전 발굴",
        "취약점 분석 및 발굴 - 시스템, 네트워크, 애플리케이션의 취약점 정밀 분석",
        "침해사고 대응 - 침해사고 발생 시 신속한 분석 및 복구 지원",
      ],
      detailedFeatures: [
        { icon: Eye, title: "사이버위협헌팅", desc: "능동적으로 위협을 탐지하고 추적하여 공격 사전 차단", color: "red" },
        { icon: Shield, title: "모의해킹 및 침투 테스트", desc: "실제 공격 시나리오를 재현하여 보안 취약점 사전 발굴", color: "orange" },
        { icon: Code, title: "취약점 분석 및 발굴", desc: "시스템, 네트워크, 애플리케이션의 취약점 정밀 분석", color: "amber" },
        { icon: ShieldCheck, title: "침해사고 대응", desc: "침해사고 발생 시 신속한 분석 및 복구 지원", color: "yellow" },
      ],
    },
    {
      id: "quantum-cryptography",
      icon: Shield,
      title: "양자내성 암호 보안",
      description: "양자컴퓨터 시대를 대비한 포스트 양자 암호화(Post-Quantum Cryptography)로 미래의 보안 위협에 대응합니다",
      color: "from-blue-600 to-cyan-500",
      image: quantumCryptographyImage,
      features: [
        "양자 위협 대응 - 양자컴퓨터가 기존 암호를 깰 수 있는 시대를 대비한 새로운 암호 알고리즘",
        "표준 준수 - NIST 등 국제 표준 기구의 양자내성암호 표준을 준수",
        "하이브리드 방식 - 기존 암호와 양자내성암호를 결합한 안전한 전환 전략",
      ],
      detailedFeatures: [
        { icon: ShieldCheck, title: "양자 위협 대응", desc: "양자컴퓨터가 기존 암호를 깰 수 있는 시대를 대비한 새로운 암호 알고리즘", color: "green" },
        { icon: CheckCircle, title: "표준 준수", desc: "NIST 등 국제 표준 기구의 양자내성암호 표준을 준수", color: "teal" },
        { icon: Lock, title: "하이브리드 방식", desc: "기존 암호와 양자내성암호를 결합한 안전한 전환 전략", color: "cyan" },
      ],
    },
  ];

  const techStack = [
    {
      category: "AI/ML 기술",
      icon: Brain,
      items: ["Large Language Models", "Deep Learning", "Pattern Recognition", "Threat Intelligence"],
    },
    {
      category: "보안 기술",
      icon: ShieldCheck,
      items: ["Zero Trust", "Post-Quantum Crypto", "Threat Hunting", "Device Security", "Edge AI"],
    },
    {
      category: "개발 기술",
      icon: Code,
      items: ["Secure Coding", "Cryptography", "Network Security", "System Security"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3MTQwODM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Technology Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-indigo-950/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white py-8 sm:py-12 md:py-16">
            <div className="inline-block p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 transform hover:rotate-12 transition-transform">
              <Cpu className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">핵심 보안 기술</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed px-2 sm:px-4">
              최첨단 AI와 하드웨어 보안 기술의 융합
            </p>
          </div>
        </div>
      </section>

      {/* Main Technologies */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">주력 기술</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              차세대 사이버보안을 실현하는 핵심 기술
            </p>
          </div>

          <div className="space-y-16">
            {mainTechnologies.map((tech, index) => (
              <div key={index} id={tech.id} className="max-w-6xl mx-auto scroll-mt-20">
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* 3D Image Container - Left Side */}
                  <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div 
                      className="relative z-20 aspect-[4/3] transform-gpu transition-all duration-700 ease-out group-hover:scale-105"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Main Image with 3D effect */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-700">
                        <img
                          src={tech.image}
                          alt={tech.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          style={{
                            filter: 'brightness(1.05) contrast(1.1)',
                          }}
                        />
                        {/* Gradient overlay matching tech color */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Icon floating on image */}
                        <div className="absolute top-6 left-6 z-10">
                          <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                            <tech.icon className="text-white" size={32} />
                          </div>
                        </div>
                        
                        {/* Border glow on hover */}
                        <div className={`absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500`}></div>
                      </div>
                      
                      {/* 3D depth layers */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-15 rounded-2xl group-hover:opacity-25 transition-all duration-700 -z-10`}
                        style={{
                          transform: 'translateZ(-30px)',
                          filter: 'blur(20px)',
                        }}
                      ></div>
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-10 rounded-2xl -z-20`}
                        style={{
                          transform: 'translateZ(-60px)',
                          filter: 'blur(30px)',
                        }}
                      ></div>
                      
                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-ping shadow-lg"></div>
                        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white rounded-full animate-ping delay-150 shadow-lg"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-300 shadow-lg"></div>
                      </div>
                      
                      {/* Animated glow effect */}
                      <div className={`absolute -inset-8 bg-gradient-to-br ${tech.color} blur-3xl opacity-15 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 -z-30 rounded-full`}></div>
                    </div>
                  </div>

                  {/* Content - Right Side */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {tech.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      {tech.detailedFeatures.map((feature, idx) => {
                        const Icon = feature.icon;
                        const bgColorMap: Record<string, string> = {
                          purple: 'bg-purple-50',
                          blue: 'bg-blue-50',
                          green: 'bg-green-50',
                          cyan: 'bg-cyan-50',
                          teal: 'bg-teal-50',
                          emerald: 'bg-emerald-50',
                          red: 'bg-red-50',
                          orange: 'bg-orange-50',
                          amber: 'bg-amber-50',
                          yellow: 'bg-yellow-50',
                        };
                        const textColorMap: Record<string, string> = {
                          purple: 'text-purple-900',
                          blue: 'text-blue-900',
                          green: 'text-green-900',
                          cyan: 'text-cyan-900',
                          teal: 'text-teal-900',
                          emerald: 'text-emerald-900',
                          red: 'text-red-900',
                          orange: 'text-orange-900',
                          amber: 'text-amber-900',
                          yellow: 'text-yellow-900',
                        };
                        
                        return (
                          <div 
                            key={idx} 
                            className={`p-4 ${bgColorMap[feature.color]} rounded-lg group/box hover:shadow-md transition-all duration-300`}
                          >
                            <h4 className={`font-semibold ${textColorMap[feature.color]} mb-2 flex items-center`}>
                              <Icon className="mr-2" size={20} />
                              {feature.title}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {feature.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">기술 스택</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {techStack.map((category, index) => (
              <div 
                key={index} 
                className="group"
              >
                <div className="relative h-full bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden hover:shadow-lg">
                  {/* Icon Header */}
                  <div className="relative p-6 border-b border-slate-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <category.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 space-y-2">
                    {category.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center space-x-3 py-2"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
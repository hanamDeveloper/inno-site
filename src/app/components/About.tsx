import { Target, Eye, Award, Users, Briefcase, Building2, Shield,  Lock, Brain,  Server, Network, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import teamImage from "../../../public/teams.png";

export function About() {
  const values = [
    {
      icon: Target,
      title: "혁신",
      description: "최첨단 AI와 보안 기술의 융합으로 새로운 보안 패러다임을 제시합니다",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Award,
      title: "전문성",
      description: "화이트해커와 보안 전문가들의 검증된 기술력과 경험",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Users,
      title: "협력",
      description: "산학연 협력을 통한 지속적인 기술 개발과 혁신",
      gradient: "from-green-600 to-teal-500",
    },
    {
      icon: Eye,
      title: "신뢰",
      description: "고객의 디지털 자산을 완벽하게 보호하는 책임감",
      gradient: "from-orange-600 to-red-500",
    },
  ];

  const partnerships = [
    {
      category: "산업체 협력",
      icon: Building2,
      color: "from-blue-600 to-cyan-500",
      partners: [
        "주식회사 유니스소프트",
        "주식회사 위너다임",
        "주식회사 유엠로직스",
      ],
    },
    {
      category: "학계 협력",
      icon: Users,
      color: "from-purple-600 to-pink-500",
      partners: [
        "고려대학교",
        "서원대학교",
        "KAIST (한국과학기술원)",
        "POSTECH (포항공과대학교)",
        "충남대학교",
      ],
    },
    {
      category: "출연연구소",
      icon: Award,
      color: "from-green-500 to-teal-500",
      partners: [
        "ETRI (한국전자통신연구원)",
        "국가보안연구소",
      ],
    },
  ];

  const capabilities = [
    { name: "생성형AI모델개발", icon: Brain, gradient: "from-purple-500 to-pink-400" },
    { name: "AI 보안 플랫폼", icon: Shield, gradient: "from-blue-500 to-cyan-400" },
    { name: "AIoT 보안 기술", icon: Lock, gradient: "from-green-500 to-teal-400" },
    { name: "선제적 사이버보안", icon: Eye, gradient: "from-red-500 to-orange-400" },
    { name: "정보보호 컨설팅", icon: Briefcase, gradient: "from-indigo-500 to-purple-400" },
    { name: "취약점 분석 및 진단", icon: Network, gradient: "from-cyan-500 to-blue-400" },
  ];

  const teamFeatures = [
    {
      icon: Briefcase,
      title: "화이트해커 팀",
      description: "전문 화이트해커들이 사이버위협헌팅, 취약점 분석, 침해사고 대응을 수행합니다",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Users,
      title: "보안 컨설턴트",
      description: "정보보호 전문가들이 보안 정책 수립, 위험 분석, 컴플라이언스를 지원합니다",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Target,
      title: "기술 연구팀",
      description: "AI/ML 전문가와 보안 연구원들이 차세대 보안 기술을 개발합니다",
      gradient: "from-green-600 to-teal-500",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3MTQwODM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-indigo-950/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white py-8 sm:py-12 md:py-16">
            <div className="inline-block p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 transform hover:rotate-12 transition-transform">
              <Building2 className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">회사소개</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed px-2 sm:px-4">
              AI 기반 사이버보안 기술로 새로운 보안 패러다임을 제시합니다
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767628975195-e87f54e5ebb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwc21hcnQlMjBjaXR5JTIwc2t5bGluZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxNDExNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Futuristic Smart City"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4 transform hover:rotate-12 transition-transform">
              <Lightbulb className="text-blue-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">핵심 가치</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              이노앱이 추구하는 가치와 철학
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer overflow-hidden bg-white/90 backdrop-blur-sm">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}></div>
                <CardHeader className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    <value.icon className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Mission Card */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden mb-12">
              <CardContent className="p-10 space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#002855] mb-6">
                    이노앱(Inno-App) 이란 무슨 뜻인가요?
                  </h3>
                  <p className="text-lg text-gray-600 mb-12">
                    Inno-App은 혁신(Innovative)적인 접근(Approach)이라는 사명(Mission)을 가지고 있습니다.
                  </p>
                </div>

                {/* INNO + App Circles */}
                <div className="flex items-center justify-center gap-8 my-12">
                  <div className="text-center group/circle">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#0055aa] via-[#003a77] to-[#002855] rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer">
                      {/* 3D Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full opacity-60"></div>
                      {/* Inner Shadow for Depth */}
                      <div className="absolute inset-2 rounded-full shadow-inner"></div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover/circle:from-cyan-400/20 group-hover/circle:to-blue-400/20 rounded-full transition-all duration-500"></div>
                      <span className="text-white text-4xl font-bold relative z-10 transform group-hover/circle:scale-110 transition-transform duration-300">INNO</span>
                    </div>
                    <p className="mt-4 text-xl font-semibold text-[#002855] transform group-hover/circle:scale-105 transition-transform duration-300">Innovative</p>
                  </div>
                  
                  <div className="w-16 h-0.5 bg-gray-400"></div>
                  
                  <div className="text-center group/circle">
                    <div className="w-48 h-48 bg-gradient-to-br from-[#0055aa] via-[#003a77] to-[#002855] rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-rotate-6 cursor-pointer">
                      {/* 3D Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full opacity-60"></div>
                      {/* Inner Shadow for Depth */}
                      <div className="absolute inset-2 rounded-full shadow-inner"></div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover/circle:from-cyan-400/20 group-hover/circle:to-blue-400/20 rounded-full transition-all duration-500"></div>
                      <span className="text-white text-4xl font-bold relative z-10 transform group-hover/circle:scale-110 transition-transform duration-300">App</span>
                    </div>
                    <p className="mt-4 text-xl font-semibold text-[#002855] transform group-hover/circle:scale-105 transition-transform duration-300">Approach</p>
                  </div>
                </div>

                {/* Bottom Text Box */}
                <div className="bg-white rounded-2xl p-8 shadow-lg space-y-4">
                  <p className="text-gray-700 text-center leading-relaxed">
                    디지털 세상에서 발생하는 각종 사회문제들을 해결하기 위해서는
                  </p>
                  <p className="text-gray-700 text-center leading-relaxed">
                    혁신적인 방법으로 접근하여 대응하는 기술 개발이 필요합니다.
                  </p>
                  <p className="text-[#002855] font-bold text-center leading-relaxed text-lg mt-6">
                    우리 이노앱은 협력사들과 함께 사회에 공헌하는 소프트웨어를 개발하여 제공하겠습니다.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
              <CardContent className="p-10 space-y-8">
                <div className="text-left max-w-5xl mx-auto">
                  <p className="text-xl font-bold text-[#002855] mb-2">2030년</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#002855] mb-8">
                    세계적인 ICT 솔루션 전문기업으로 도약
                  </h3>
                  
                  <div className="flex justify-start gap-6 mb-12">
                    <div className="bg-white rounded-2xl px-8 py-4 shadow-lg">
                      <p className="text-cyan-600 font-bold text-xl">기업가치 : 1,000억원</p>
                    </div>
                    <div className="bg-white rounded-2xl px-8 py-4 shadow-lg">
                      <p className="text-blue-600 font-bold text-xl">매출액 : 500억원</p>
                    </div>
                  </div>
                </div>

                {/* 4 Vision Circles */}
                <div className="grid md:grid-cols-4 gap-6">
                  {/* 기술 경쟁력 확보 */}
                  <div className="text-center group/vision">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-[#4a90e2] via-[#357abd] to-[#2563a8] rounded-full flex items-center justify-center shadow-xl mb-4 border-8 border-white relative overflow-hidden transform transition-all duration-500 hover:scale-110 cursor-pointer">
                      {/* 3D Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full opacity-70"></div>
                      {/* Inner Shadow for Depth */}
                      <div className="absolute inset-2 rounded-full shadow-inner"></div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/0 to-cyan-300/0 group-hover/vision:from-cyan-300/30 group-hover/vision:to-blue-300/30 rounded-full transition-all duration-500"></div>
                      <span className="text-white text-base font-bold relative z-10 px-2 transform group-hover/vision:scale-105 transition-transform duration-300">기술 경쟁력 확보</span>
                    </div>
                    <ul className="text-left text-xs text-gray-700 space-y-1.5">
                      <li>• 사이버 보안 분야 특화 기술 확보</li>
                      <li>• 디지털융합 분야 특화 기술 확보</li>
                      <li>• 특허, 논문 등 지적재산권 확보</li>
                    </ul>
                  </div>

                  {/* 사업 경쟁력 확보 */}
                  <div className="text-center group/vision">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-[#5dd3d3] via-[#3fbaba] to-[#2a9d9d] rounded-full flex items-center justify-center shadow-xl mb-4 border-8 border-white relative overflow-hidden transform transition-all duration-500 hover:scale-110 cursor-pointer">
                      {/* 3D Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full opacity-70"></div>
                      {/* Inner Shadow for Depth */}
                      <div className="absolute inset-2 rounded-full shadow-inner"></div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-300/0 to-teal-300/0 group-hover/vision:from-teal-300/30 group-hover/vision:to-cyan-300/30 rounded-full transition-all duration-500"></div>
                      <span className="text-white text-base font-bold relative z-10 px-2 transform group-hover/vision:scale-105 transition-transform duration-300">사업 경쟁력 확보</span>
                    </div>
                    <ul className="text-left text-xs text-gray-700 space-y-1.5">
                      <li>• 고객 니즈 고려한 비즈니스 사업</li>
                      <li>• 민간 및 공공 솔루션/서비스 사업</li>
                      <li>• 협력 채널을 이용한 마케팅 사업</li>
                    </ul>
                  </div>

                  {/* 사업 다각화 */}
                  <div className="text-center group/vision">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-[#6b9fe8] via-[#4f84d1] to-[#3b6fb8] rounded-full flex items-center justify-center shadow-xl mb-4 border-8 border-white relative overflow-hidden transform transition-all duration-500 hover:scale-110 cursor-pointer">
                      {/* 3D Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full opacity-70"></div>
                      {/* Inner Shadow for Depth */}
                      <div className="absolute inset-2 rounded-full shadow-inner"></div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/0 to-blue-300/0 group-hover/vision:from-blue-300/30 group-hover/vision:to-indigo-300/30 rounded-full transition-all duration-500"></div>
                      <span className="text-white text-base font-bold relative z-10 px-2 transform group-hover/vision:scale-105 transition-transform duration-300">사업 다각화</span>
                    </div>
                    <ul className="text-left text-xs text-gray-700 space-y-1.5">
                      <li>• 원성 통신 등 수요 보안 사업 추진</li>
                      <li>• 스마트 시티 등 건설분야 사업 추진</li>
                      <li>• 건강, 의료 AI 플랫폼 서비스 사업</li>
                    </ul>
                  </div>

                  {/* 고급 인력 양성 */}
                  <div className="text-center group/vision">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-[#94a3b8] via-[#6b7a8f] to-[#475569] rounded-full flex items-center justify-center shadow-xl mb-4 border-8 border-white relative overflow-hidden transform transition-all duration-500 hover:scale-110 cursor-pointer">
                      {/* 3D Highlight Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full opacity-70"></div>
                      {/* Inner Shadow for Depth */}
                      <div className="absolute inset-2 rounded-full shadow-inner"></div>
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-300/0 to-slate-300/0 group-hover/vision:from-slate-300/30 group-hover/vision:to-gray-300/30 rounded-full transition-all duration-500"></div>
                      <span className="text-white text-base font-bold relative z-10 px-2 transform group-hover/vision:scale-105 transition-transform duration-300">고급 인력 양성</span>
                    </div>
                    <ul className="text-left text-xs text-gray-700 space-y-1.5">
                      <li>• 소수 전문인력으로 전문성 향상</li>
                      <li>• 인재양성 프로그램으로 전문성 향상</li>
                      <li>• 국제 비즈니스 협력으로 전문성 향상</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4 transform hover:rotate-12 transition-transform">
              <Server className="text-purple-600" size={40} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">보유 기술 및 서비스</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              이노앱의 핵심 역량
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all group cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${capability.gradient} rounded-lg flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                      <capability.icon className="text-white" size={20} />
                    </div>
                    <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors">{capability.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Background Image */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={teamImage}
            alt="Business Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-green-100 rounded-2xl mb-4 transform hover:rotate-12 transition-transform">
                <Users className="text-green-600" size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">전문가 팀</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                보안 전문가와 화이트해커 구성된 정예 팀
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamFeatures.map((team, index) => (
                <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all group cursor-pointer transform hover:-translate-y-2 overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${team.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}></div>
                  <CardHeader className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${team.gradient} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                      <team.icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-center text-xl group-hover:text-blue-600 transition-colors">{team.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-gray-600 leading-relaxed">
                      {team.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
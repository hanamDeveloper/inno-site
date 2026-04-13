import { Building2, Smartphone, Cloud, Database, ShoppingBag, HeartPulse, GraduationCap, Factory } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import teamImage from "../../../public/team_image.png";

export function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: "기업용 엔드포인트 보안",
      description: "대규모 기업의 모든 엔드포인트를 통합 관리하고 보호합니다",
      features: [
        "중앙 집중식 관리 콘솔",
        "정책 기반 자동 배포",
        "실시간 위협 대시보드",
        "통합 로그 및 리포팅",
      ],
      industries: ["금융", "제조", "IT", "공공기관"],
    },
    {
      icon: Smartphone,
      title: "모바일 디바이스 보안",
      description: "스마트폰과 태블릿을 위한 강력한 보안 솔루션",
      features: [
        "앱 행동 분석",
        "악성코드 실시간 차단",
        "안전한 웹 브라우징",
        "데이터 암호화",
      ],
      industries: ["통신", "유통", "물류", "서비스"],
    },
    {
      icon: Cloud,
      title: "클라우드 워크로드 보안",
      description: "클라우드 환경의 워크로드를 안전하게 보호",
      features: [
        "멀티클라우드 지원",
        "컨테이너 보안",
        "서버리스 보호",
        "자동 규정 준수",
      ],
      industries: ["클라우드 서비스", "SaaS", "핀테크"],
    },
    {
      icon: Database,
      title: "IoT 디바이스 보안",
      description: "IoT 기기들을 위한 경량화된 보안 솔루션",
      features: [
        "저전력 운영",
        "경량 AI 엔진",
        "실시간 모니터링",
        "원격 관리",
      ],
      industries: ["스마트홈", "스마트팩토리", "헬스케어"],
    },
  ];

  const industryUseCases = [
    {
      icon: ShoppingBag,
      industry: "유통/이커머스",
      challenge: "대규모 거래 데이터와 고객 정보 보호",
      solution: "POS 시스템부터 모바일 앱까지 통합 보안",
    },
    {
      icon: HeartPulse,
      industry: "헬스케어",
      challenge: "민감한 의료 정보의 안전한 관리",
      solution: "의료기기 및 EMR 시스템 보안",
    },
    {
      icon: GraduationCap,
      industry: "교육",
      challenge: "학생/교직원 개인정보 및 온라인 학습 환경 보호",
      solution: "교육용 디바이스 및 플랫폼 보안",
    },
    {
      icon: Factory,
      industry: "제조/산업",
      challenge: "스마트팩토리 시설 및 산업 제어 시스템 보호",
      solution: "산업용 IoT 및 OT 네트워크 보안",
    },
  ];

  const benefits = [
    {
      title: "통합 관리",
      description: "하나의 플랫폼으로 모든 디바이스를 관리",
    },
    {
      title: "확장성",
      description: "비즈니스 성장에 맞춰 유연하게 확장",
    },
    {
      title: "비용 절감",
      description: "효율적인 자동화로 운영 비용 최소화",
    },
    {
      title: "규정 준수",
      description: "국내외 보안 규정 자동 준수",
    },
  ];

  const deploymentOptions = [
    {
      title: "온프레미스",
      description: "고객사 내부에 직접 설치",
      suitable: "높은 수준의 데이터 통제가 필요한\n경우",
    },
    {
      title: "클라우드",
      description: "클라우드 기반 SaaS 형태",
      suitable: "빠른 도입과 유연한 확장이 필요한\n경우",
    },
    {
      title: "하이브리드",
      description: "온프레미스와 클라우드의 결합",
      suitable: "최적의 성능과 유연성이 모두 필요한\n경우",
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
            alt="Solutions Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-indigo-950/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white py-8 sm:py-12 md:py-16">
            <div className="inline-block p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 transform hover:rotate-12 transition-transform">
              <Building2 className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">보안 솔루션</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed px-2 sm:px-4">
              산업별 맞춤형 통합 보안 솔루션으로 디지털 자산을 완벽하게 보호합니다
            </p>
          </div>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">주요 솔루션</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              기업의 모든 보안 요구사항을 충족하는 통합 솔루션
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <solution.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">주요 기능</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">적용 산업</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">산업별 적용 사례</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              각 산업의 특성에 맞춘 최적의 보안 솔루션
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryUseCases.map((useCase, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="text-white" size={28} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{useCase.industry}</CardTitle>
                      <CardDescription>{useCase.challenge}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">이노앱 솔루션</p>
                    <p className="text-gray-700">{useCase.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">솔루션 도입 효과</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              이노앱 솔루션으로 얻을 수 있는 핵심 가치
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">배포 옵션</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              고객의 환경에 맞는 유연한 배포 방식 선택
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{option.title}</CardTitle>
                  <CardDescription className="text-center">{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 mb-1">적합한 경우</p>
                    <p className="text-gray-700 text-sm whitespace-pre-line">{option.suitable}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">도입 프로세스</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              체계적이고 효율적인 솔루션 도입 과정
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {[
                { step: "1단계", title: "상담 및 요구사항 분석", duration: "1주" },
                { step: "2단계", title: "시스템 설계 및 제안", duration: "1-2주" },
                { step: "3단계", title: "PoC (Proof of Concept)", duration: "2-4주" },
                { step: "4단계", title: "본 구축 및 배포", duration: "4-8주" },
                { step: "5단계", title: "교육 및 안정화", duration: "2주" },
                { step: "6단계", title: "운영 지원 및 최적화", duration: "지속적" },
              ].map((phase, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-900 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg group-hover:text-blue-700 transition-colors">{phase.title}</h4>
                    <p className="text-gray-600 text-sm">{phase.step}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600 font-medium group-hover:text-blue-700 transition-colors">{phase.duration}</span>
                  </div>
                </div>
              ))}
            </div>
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
            맞춤형 솔루션을 경험해보세요
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-lg">
            이노앱의 전문가가 귀사의 환경을 분석하고 최적 솔루션을 제안합니다
          </p>
        </div>
      </section>
    </div>
  );
}
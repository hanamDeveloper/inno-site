import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Globe, Clock, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import teamImage from "../../../public/teams.png";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 이메일 내용 구성
    const emailSubject = `[이노앱 문의] ${formData.subject} - ${formData.company}`;
    const emailBody = `
이름: ${formData.name}
회사명: ${formData.company}
이메일: ${formData.email}
연락처: ${formData.phone}
문의 유형: ${formData.subject}

문의 내용:
${formData.message}
    `.trim();
    
    // mailto 링크 생성 및 열기
    const mailtoLink = `mailto:kyh@innoapp.co.kr?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // 성공 메시지 표시
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: User,
      title: "대표이사",
      content: "김윤홍",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: MapPin,
      title: "주소",
      content: "대전광역시 동구 계족로512번길 86 2층",
      color: "from-blue-700 to-cyan-600",
    },
    {
      icon: Mail,
      title: "이메일",
      content: "kyh@innoapp.co.kr",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: Globe,
      title: "홈페이지",
      content: "www.innoapp.co.kr",
      color: "from-blue-800 to-blue-700",
    },
  ];

  const inquiryTypes = [
    "제품 문의",
    "기술 지원",
    "파트너십",
    "정보보호 컨설팅",
    "취약점 분석",
    "기타",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={teamImage}
            alt="Contact Technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-indigo-950/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white py-8 sm:py-12 md:py-16">
            <div className="inline-block p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 transform hover:rotate-12 transition-transform">
              <Mail className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6">보안 컨설팅 문의</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed px-2 sm:px-4">
              이노앱의 보안 전문가가 귀사의 사이버 보안을 책임집니다
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">상담 신청</CardTitle>
                  <CardDescription>
                    아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="text-green-600" size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">문의가 접수되었습니다</h3>
                      <p className="text-gray-600">
                        담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">이름 *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="홍길동"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">회사명 *</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="(주)이노앱"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">이메일 *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@company.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">연락처 *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="010-1234-5678"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">문의 유형 *</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange(e as any)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">선택해주세요</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">문의 내용 *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="문의하실 내용을 자세히 적어주세요"
                          rows={6}
                          required
                        />
                      </div>

                      <div className="text-sm text-gray-500">
                        * 표시된 항목은 필수 입력 사항입니다
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="mr-2" size={20} />
                        문의 보내기
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center mb-3`}>
                      <info.icon className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                  </CardContent>
                </Card>
              ))}

              <Card className="border-none shadow-lg bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Clock size={20} />
                    <CardTitle>운영 시간</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>평일</span>
                    <span className="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>점심시간</span>
                    <span className="font-semibold">12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between text-blue-200">
                    <span>주말/공휴일</span>
                    <span className="font-semibold">휴무</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-lg text-gray-600">
              고객님들이 자주 문의하시는 내용입니다
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "어떤 보안 서비스를 제공하나요?",
                answer: "LMM 기반 AI 보안, AIoT 보안 기술, 사이버위협헌팅, 정보보호 컨설팅, 취약점 분석 등을 제공합니다.",
              },
              {
                question: "무료 체험이 가능한가요?",
                answer: "네, 2주간의 무료 PoC(Proof of Concept)를 제공하여 실제 환경에서 테스트해보실 수 있습니다.",
              },
              {
                question: "화이트해커 팀은 어떤 일을 하나요?",
                answer: "전문 화이트해커 팀이 사이버위협헌팅, 모의해킹, 취약점 분석 및 발굴, 침해사고 대응 등의 업무를 수행합니다.",
              },
              {
                question: "기술 지원은 어떻게 받을 수 있나요?",
                answer: "이메일(kyh@innoapp.co.kr)로 문의하시거나 상담 신청을 통해 전문가의 지원을 받으실 수 있습니다.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
import { Link } from "react-router";
import { Mail, MapPin, Globe } from "lucide-react";
import logoImage from "../../../public/logo_vertical.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logoImage} 
                alt="INNOAPP Logo" 
                className="h-10 md:h-12 w-auto hover:opacity-80 transition-opacity brightness-0 invert"
              />
            </Link>
            <p className="text-sm">
              AI 기반 AIoT 보안 기술의 선두주자
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 md:mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-blue-400 transition-colors">
                  기술
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-blue-400 transition-colors">
                  솔루션
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-3 md:mb-4">서비스</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                AIoT 보안 기술
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                AI 위협 탐지
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                사이버위협헌팅
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                보안 컨설팅
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3 md:mb-4">연락처</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>대전광역시 동구 계족로512번길 86 2층</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>kyh@innoapp.co.kr</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe size={16} className="flex-shrink-0" />
                <span>www.innoapp.co.kr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-xs md:text-sm text-center">
          <p>&copy; 2026 (주)이노앱 INNOAPP Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Smile, ChevronRight } from 'lucide-react';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <EditableImage
            id="home_hero_bg"
            defaultSrc="https://loremflickr.com/1600/900/korea,students,class"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white z-10">
          <EditableText
            id="home_hero_title"
            defaultText="장애인과 함께하는 시민의 모임"
            as="h1"
            multiline
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md whitespace-pre-line"
          />
          
          <EditableText
            id="home_hero_desc"
            defaultText="함시모는 장애인이 차별 받지 않고 자아를 실현할 수 있도록 지원하고, 비장애인과 어우러져 살아가는데 이바지하기 위한 모임입니다."
            as="p"
            multiline
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light drop-shadow-sm leading-relaxed whitespace-pre-line"
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-primary hover:bg-green-600 text-white px-8 py-3.5 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              조합 소개
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3.5 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-secondary font-bold text-lg tracking-wider uppercase mb-2 block">Our Mission</span>
          <EditableText
            id="home_mission_title"
            defaultText="모두가 소외되지 않는 사회를 위한 변화와 화합의 동반자"
            as="h2"
            multiline
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 whitespace-pre-line"
          />
          <EditableText
            id="home_mission_desc"
            defaultText="함시모는 장애 학생과 가족, 그리고 함께 살아가는 사회를 위해 특수교육과 전문인 양성에 앞장서고자 합니다."
            as="p"
            multiline
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors border border-gray-100 group">
              <div className="w-16 h-16 bg-green-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen size={32} />
              </div>
              <EditableText id="home_mission_1_title" defaultText="통합교육 연구" as="h3" className="text-xl font-bold mb-4 block" />
              <EditableText 
                id="home_mission_1_desc" 
                defaultText="지역사회 통합교육 동향을 파악하고 정책 연구를 실행하며, 교육 현장의 변화를 이끌어냅니다." 
                as="p" 
                multiline
                className="text-gray-600 leading-relaxed" 
              />
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors border border-gray-100 group">
              <div className="w-16 h-16 bg-green-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Smile size={32} />
              </div>
              <EditableText id="home_mission_2_title" defaultText="가족 상담 및 지원" as="h3" className="text-xl font-bold mb-4 block" />
              <EditableText 
                id="home_mission_2_desc" 
                defaultText="장애학생과 가족의 심리적 안정을 위한 상담 및 가족 기능 향상 프로그램을 제공합니다." 
                as="p" 
                multiline
                className="text-gray-600 leading-relaxed" 
              />
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors border border-gray-100 group">
              <div className="w-16 h-16 bg-green-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Users size={32} />
              </div>
              <EditableText id="home_mission_3_title" defaultText="전문가 양성" as="h3" className="text-xl font-bold mb-4 block" />
              <EditableText 
                id="home_mission_3_desc" 
                defaultText="진로직업 상담 및 실무 코칭을 통해 장애인 관련 전문 인력을 체계적으로 양성합니다." 
                as="p" 
                multiline
                className="text-gray-600 leading-relaxed" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">주요 사업 (Core Services)</h2>
              <p className="text-xl text-gray-600">함시모가 실천하는 3가지 핵심 활동입니다.</p>
            </div>
            <Link to="/programs" className="hidden md:flex items-center text-primary font-bold hover:underline mt-4 md:mt-0">
              자세히 보기 <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <EditableImage 
                  id="home_prog_1_img"
                  defaultSrc="https://loremflickr.com/800/600/korean,teacher,class" 
                  alt="통합교육 연구" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <EditableText id="home_prog_1_title" defaultText="연구 및 교육 사업" as="h3" className="text-xl font-bold mb-2 block" />
                <EditableText 
                  id="home_prog_1_desc" 
                  defaultText="지역사회 통합교육 동향 파악, 의제 발굴 및 정책 연구 실행. 학교 관리자와 교사를 위한 맞춤형 통합교육 연수를 진행합니다." 
                  as="p" 
                  multiline
                  className="text-gray-600 mb-4 line-clamp-3" 
                />
                <Link to="/policy-education" className="text-primary font-semibold flex items-center hover:gap-2 transition-all">
                  더 알아보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <EditableImage 
                  id="home_prog_2_img"
                  defaultSrc="https://loremflickr.com/800/600/korean,family,happy" 
                  alt="상담 사업" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <EditableText id="home_prog_2_title" defaultText="학생 및 가족 상담" as="h3" className="text-xl font-bold mb-2 block" />
                <EditableText 
                  id="home_prog_2_desc" 
                  defaultText="상담 및 검사를 통한 특성 파악, 장애학생 심리 안정 프로그램 및 가족 기능 향상 프로그램을 지원합니다." 
                  as="p" 
                  multiline
                  className="text-gray-600 mb-4 line-clamp-3" 
                />
                <Link to="/programs" className="text-primary font-semibold flex items-center hover:gap-2 transition-all">
                  더 알아보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                 <EditableImage 
                  id="home_prog_3_img"
                  defaultSrc="https://loremflickr.com/800/600/korean,seminar,meeting" 
                  alt="전문가 양성" 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <EditableText id="home_prog_3_title" defaultText="전문가 양성 사업" as="h3" className="text-xl font-bold mb-2 block" />
                <EditableText 
                  id="home_prog_3_desc" 
                  defaultText="진로직업 상담, 진로전담인력 양성 및 활동지원 관련 연수 프로그램을 운영하여 전문가를 육성합니다." 
                  as="p" 
                  multiline
                  className="text-gray-600 mb-4 line-clamp-3" 
                />
                <Link to="/programs" className="text-primary font-semibold flex items-center hover:gap-2 transition-all">
                  더 알아보기 <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <EditableText id="home_cta_title" defaultText="함시모와 함께해 주세요" as="h2" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 block" />
          <EditableText 
            id="home_cta_desc" 
            defaultText="장애인과 함께하는 여러분의 많은 성원 부탁드립니다." 
            as="p" 
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto" 
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              to="/contact"
              className="bg-secondary hover:bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-colors"
            >
              조합원 가입하기
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-full text-lg font-bold shadow transition-colors"
            >
              문의사항 남기기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import { BookOpen, Smile, Users } from 'lucide-react';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const Programs: React.FC = () => {
  // We will iterate over this array, but use index-based IDs for editing
  const programs = [
    {
      id: 1,
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      defaultTitle: "통합교육 관련 연구 및 교육 사업",
      defaultImage: "https://loremflickr.com/800/600/korean,education,teacher",
      defaultDesc: "통합교육의 발전을 위한 정책 연구와 현장 교육 전문가를 위한 맞춤형 연수를 제공합니다.",
      details: [
        "지역사회 통합교육 동향 파악 및 의제 발굴",
        "통합교육 관련 정책연구 실행",
        "학교 관리자, 교사를 위한 맞춤형 통합교육 연수",
        "학부모 간담회 개최"
      ]
    },
    {
      id: 2,
      icon: <Smile className="w-10 h-10 text-primary" />,
      defaultTitle: "장애학생 및 가족 상담 사업",
      defaultImage: "https://loremflickr.com/800/600/korean,counseling,talking",
      defaultDesc: "장애학생의 특성을 이해하고 가족의 기능을 강화하는 심리 지원 서비스를 제공합니다.",
      details: [
        "상담 및 검사를 통한 장애학생 특성 파악",
        "장애학생 심리 안정 프로그램 제공",
        "장애학생 가족 및 보호자 상담",
        "장애학생 가족 기능 향상 프로그램 제공"
      ]
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-primary" />,
      defaultTitle: "장애인 관련 전문가 양성 사업",
      defaultImage: "https://loremflickr.com/800/600/korean,workshop,business",
      defaultDesc: "진로직업 상담 및 활동지원을 위한 전문 인력을 체계적으로 양성합니다.",
      details: [
        "장애학생 진로직업 상담 및 장애인 가족 대상 진로직업 실무 코칭",
        "장애학생 진로전담인력 양성",
        "장애인 활동지원 관련 연수 프로그램 운영"
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">주요 사업 (Core Services)</h1>
          <EditableText 
            id="programs_intro" 
            defaultText="함시모는 전문성을 바탕으로 통합교육, 상담, 전문가 양성 사업을 추진합니다." 
            as="p" 
            className="text-xl text-gray-600 max-w-2xl mx-auto" 
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-20">
          {programs.map((program, index) => (
            <div key={program.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                 <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                    <EditableImage 
                      id={`prog_list_${index}_img`}
                      defaultSrc={program.defaultImage}
                      alt="프로그램 이미지"
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
                      {program.icon}
                    </div>
                 </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <EditableText 
                  id={`prog_list_${index}_title`} 
                  defaultText={program.defaultTitle} 
                  as="h2" 
                  className="text-3xl font-bold mb-4 text-gray-800 leading-tight block" 
                />
                <EditableText 
                  id={`prog_list_${index}_desc`} 
                  defaultText={program.defaultDesc} 
                  as="p" 
                  className="text-lg text-gray-600 mb-8 leading-relaxed" 
                />
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-4 border-b pb-2">세부 활동 내용</h4>
                  <ul className="space-y-3">
                    {program.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                            <EditableText id={`prog_list_${index}_detail_${idx}`} defaultText={detail} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;

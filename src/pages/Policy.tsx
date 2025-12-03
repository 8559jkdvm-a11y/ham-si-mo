
import React from 'react';
import { FileText, Search, Users, Lightbulb } from 'lucide-react';
import EditableText from '../components/EditableText';

const Policy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <EditableText id="policy_title" defaultText="통합교육 연구 및 교육" as="h1" className="text-4xl font-bold text-gray-900 mb-4 block" />
          <EditableText 
            id="policy_desc" 
            defaultText="지역사회 통합교육의 올바른 방향을 제시하고 실천적인 정책을 연구합니다." 
            as="p" 
            className="text-xl text-gray-600 max-w-2xl mx-auto" 
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Research Areas */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
               <Search size={32} />
             </div>
             <EditableText id="policy_area_1_title" defaultText="동향 파악 및 의제 발굴" as="h3" className="text-2xl font-bold mb-4 block" />
             <EditableText 
                id="policy_area_1_desc"
                defaultText="급변하는 교육 환경 속에서 통합교육의 최신 동향을 파악하고, 지역사회 특성에 맞는 주요 의제를 발굴하여 공론화합니다."
                as="p"
                multiline
                className="text-gray-600 leading-relaxed mb-6"
             />
             <ul className="space-y-2 text-gray-700">
               <li>• <EditableText id="policy_area_1_list_1" defaultText="국내외 통합교육 우수 사례 조사" /></li>
               <li>• <EditableText id="policy_area_1_list_2" defaultText="지역 사회 장애 인식 현황 모니터링" /></li>
               <li>• <EditableText id="policy_area_1_list_3" defaultText="교육 현장 요구사항 조사 및 분석" /></li>
             </ul>
           </div>

           <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
               <FileText size={32} />
             </div>
             <EditableText id="policy_area_2_title" defaultText="정책 연구 실행" as="h3" className="text-2xl font-bold mb-4 block" />
             <EditableText 
                id="policy_area_2_desc"
                defaultText="발굴된 의제를 바탕으로 실효성 있는 정책 대안을 마련하고, 제도 개선을 위한 구체적인 연구를 수행합니다."
                as="p"
                multiline
                className="text-gray-600 leading-relaxed mb-6"
             />
             <ul className="space-y-2 text-gray-700">
               <li>• <EditableText id="policy_area_2_list_1" defaultText="통합교육 활성화 방안 정책 제언" /></li>
               <li>• <EditableText id="policy_area_2_list_2" defaultText="장애학생 인권 보호를 위한 제도 연구" /></li>
               <li>• <EditableText id="policy_area_2_list_3" defaultText="생애주기별 교육 지원 체계 모형 개발" /></li>
             </ul>
           </div>
        </div>

        {/* Education Programs */}
        <div className="mb-20">
          <EditableText id="policy_prog_title" defaultText="맞춤형 교육 프로그램" as="h2" className="text-3xl font-bold mb-8 text-center block" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl">
               <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                 <Users size={24} />
               </div>
               <div>
                 <EditableText id="policy_edu_1_title" defaultText="학교 관리자 및 교사 연수" as="h4" className="text-xl font-bold mb-2 block" />
                 <EditableText 
                    id="policy_edu_1_desc"
                    defaultText="통합학급 운영의 전문성을 높이고, 장애 학생에 대한 이해를 돕기 위한 교원 역량 강화 연수를 제공합니다."
                    as="p"
                    multiline
                    className="text-gray-600"
                 />
               </div>
            </div>
            
            <div className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl">
               <div className="bg-white p-3 rounded-full shadow-sm text-secondary">
                 <Lightbulb size={24} />
               </div>
               <div>
                 <EditableText id="policy_edu_2_title" defaultText="학부모 간담회" as="h4" className="text-xl font-bold mb-2 block" />
                 <EditableText 
                    id="policy_edu_2_desc"
                    defaultText="장애/비장애 학생 학부모가 함께 모여 통합교육에 대한 고민을 나누고 협력 방안을 모색하는 소통의 장을 마련합니다."
                    as="p"
                    multiline
                    className="text-gray-600"
                 />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;

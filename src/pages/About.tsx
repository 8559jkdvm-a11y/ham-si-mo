
import React from 'react';
import { Quote, Award, MapPin, Phone, Mail } from 'lucide-react';
import EditableText from '../components/EditableText';
import EditableImage from '../components/EditableImage';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Top Banner */}
      <div className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <EditableImage
          id="about_banner_bg"
          defaultSrc="https://loremflickr.com/1600/600/korea,teamwork"
          alt="배경"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">소개 / 안내</h1>
          <EditableText 
            id="about_banner_desc"
            defaultText="장애인과 함께하는 시민의 모임, 사회적협동조합 함시모입니다."
            as="p"
            className="text-xl max-w-2xl mx-auto text-gray-300"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Greetings */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative bg-gray-100 min-h-[400px]">
                <EditableImage 
                  id="about_chairman_img"
                  defaultSrc="/chairman.png" 
                  alt="전병운 이사장" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 pointer-events-none">
                  <div className="text-white pointer-events-auto">
                    <p className="text-lg font-medium opacity-90">이사장</p>
                    <EditableText id="about_chairman_name" defaultText="전 병 운" as="p" className="text-3xl font-bold" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
                  <Quote className="transform scale-x-[-1]" /> 대표자 인사말
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <EditableText 
                    id="about_greeting_1" 
                    defaultText="함시모는 장애 학생과 가족, 그리고 함께 살아가는 사회를 위해 특수교육과 전문인 양성에 앞장서고자 합니다."
                    as="p"
                    multiline
                  />
                  <EditableText 
                    id="about_greeting_2" 
                    defaultText="모두가 소외되지 않는 사회를 위해 변화와 화합을 이끌어가는 여러분의 동반자가 되겠습니다."
                    as="p"
                    multiline
                  />
                  <EditableText 
                    id="about_greeting_3" 
                    defaultText="장애인과 함께하는 여러분의 많은 성원 부탁드립니다."
                    as="p"
                    multiline
                  />
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="text-secondary w-5 h-5" /> 주요 약력
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    {[1, 2, 3, 4, 5].map((idx) => (
                        <li key={idx} className="flex gap-2">
                            <span className="text-primary">●</span>
                            <EditableText 
                                id={`about_career_${idx}`}
                                defaultText={
                                    idx === 1 ? "전) 한국통합교육학회 회장" :
                                    idx === 2 ? "전) 한국지적장애학회 부회장" :
                                    idx === 3 ? "전) 한국특수교육학회 회장" :
                                    idx === 4 ? "전) 공주대학교 특수교육대학원장" :
                                    "현) 공주대학교 명예 교수"
                                } 
                            />
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Chart */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">조직도 (Organization Chart)</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl overflow-x-auto">
            <div className="flex flex-col items-center min-w-[600px]">
              {/* Level 1 */}
              <div className="bg-secondary text-white px-10 py-3 rounded-full text-lg font-bold shadow-lg z-10 w-40 text-center">총회</div>
              <div className="h-8 w-0.5 bg-gray-300"></div>
              
              {/* Level 2 */}
              <div className="flex items-center gap-8 mb-0">
                   <div className="bg-blue-900 text-white w-40 py-3 rounded-xl text-center text-lg font-bold shadow-md">이사회</div>
                   <div className="w-8 h-0.5 bg-gray-300"></div>
                   <div className="bg-blue-900 text-white w-40 py-3 rounded-xl text-center text-lg font-bold shadow-md">감사</div>
              </div>

              <div className="flex flex-col items-center relative" style={{ transform: 'translateX(-6rem)' }}> {/* Offset to align under Board */}
                <div className="h-8 w-0.5 bg-gray-300"></div>
                
                {/* Level 3 */}
                <div className="bg-blue-900 text-white w-40 py-3 rounded-xl text-center text-lg font-bold shadow-md">사무국</div>
                <div className="h-8 w-0.5 bg-gray-300"></div>
                
                {/* Level 4 */}
                <div className="relative pt-4">
                  {/* Connector lines */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[18rem] border-t-2 border-gray-300"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-0.5 bg-gray-300 -mt-4"></div>
                  
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-0.5 bg-gray-300 -mt-4"></div>
                      <div className="bg-primary text-white w-24 py-2 rounded-full text-center font-bold shadow-sm">교육팀</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-0.5 bg-gray-300 -mt-4"></div>
                      <div className="bg-primary text-white w-24 py-2 rounded-full text-center font-bold shadow-sm">사업팀</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-4 w-0.5 bg-gray-300 -mt-4"></div>
                      <div className="bg-primary text-white w-24 py-2 rounded-full text-center font-bold shadow-sm">관리팀</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Members List */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">구성원</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-4xl mx-auto">
            <div className="divide-y divide-gray-100">
              {[
                { id: "m1", role: "이사장", name: "전병운", detail: "공주대학교 명예교수" },
                { id: "m2", role: "사무국장", name: "박동환", detail: "충북대학교 강사" },
                { id: "m3", role: "유아교육", name: "이미애", detail: "특수교육학 박사" },
                { id: "m4", role: "초등교육", name: "김정기, 장효미", detail: "특수교육학 박사" },
                { id: "m5", role: "중등교육", name: "권혜진", detail: "중등교사, 음악치료사" },
                { id: "m6", role: "언어치료", name: "권회연, 서지원", detail: "임상심리상담사, 언어치료실 실장" },
                { id: "m7", role: "행동지원", name: "이윤숙", detail: "특수교육학 박사" },
              ].map((member, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 p-5 hover:bg-green-50/50 transition-colors">
                  <div className="md:col-span-1 flex items-center mb-2 md:mb-0">
                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg text-sm font-bold w-full md:w-auto text-center md:text-left">
                      <EditableText id={`member_role_${idx}`} defaultText={member.role} />
                    </span>
                  </div>
                  <div className="md:col-span-3 flex items-center text-gray-800">
                    <span className="font-bold mr-2"><EditableText id={`member_name_${idx}`} defaultText={member.name} /></span>
                    <span className="text-gray-500 text-sm">(<EditableText id={`member_detail_${idx}`} defaultText={member.detail} />)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">오시는 길</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 relative">
               <EditableImage 
                 id="about_map_img"
                 defaultSrc="https://loremflickr.com/800/600/sejong,city,map" 
                 alt="지도 위치" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-primary shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">주소</h4>
                  <EditableText id="contact_address" defaultText="세종특별자치시 금남면 성덕1길 113-13, 1층" as="p" className="text-gray-600" />
                  <EditableText id="contact_address_detail" defaultText="* 정부청사 남세종IC 인근 / NH주유소 근처" as="p" className="text-sm text-gray-500 mt-2" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-secondary shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">연락처</h4>
                  <EditableText id="contact_phone" defaultText="010-3732-1295" as="p" className="text-gray-600" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full text-blue-500 shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">이메일</h4>
                  <EditableText id="contact_email" defaultText="jeonun@kongju.ac.kr" as="p" className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import EditableText from '../components/EditableText';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'join'>('join');

  return (
    <div className="animate-fade-in">
       <div className="bg-gray-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <EditableText id="contact_hero_title" defaultText="문의 / 지원" as="h1" className="text-4xl font-bold mb-4 block" />
          <EditableText 
            id="contact_hero_desc" 
            defaultText="함시모는 여러분의 동반자가 되겠습니다." 
            as="p" 
            className="text-xl opacity-90 max-w-2xl mx-auto" 
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Information */}
          <div className="w-full md:w-1/3 space-y-8">
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                연락처 안내
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><Phone size={14} /> 모바일</p>
                  <EditableText id="contact_sidebar_phone" defaultText="010-3732-1295" as="p" className="text-xl font-bold text-gray-800" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><Mail size={14} /> 이메일</p>
                  <EditableText id="contact_sidebar_email" defaultText="jeonun@kongju.ac.kr" as="p" className="text-lg font-bold text-gray-800" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><MapPin size={14} /> 주소</p>
                  <EditableText id="contact_sidebar_address" defaultText="세종시 금남면 성덕1길 113-13, 1층" as="p" className="text-gray-800" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <EditableText id="contact_join_title" defaultText="가입 안내" as="h3" className="text-xl font-bold text-gray-900 mb-4 block" />
              <EditableText 
                id="contact_join_desc"
                defaultText="함시모는 장애인이 차별 받지 않고 자아를 실현할 수 있도록 지원하는 모임입니다. 뜻을 함께하실 분들의 참여를 기다립니다."
                as="p"
                multiline
                className="text-gray-600 mb-4"
              />
              <ul className="space-y-3 mt-6">
                <li className="flex items-center justify-between text-gray-600 hover:text-primary cursor-pointer border-b pb-2">
                  <span>조합 가입 신청서</span>
                  <Download size={18} />
                </li>
              </ul>
            </div>
          </div>

          {/* Forms Section */}
          <div className="w-full md:w-2/3">
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`pb-4 px-6 text-lg font-medium transition-colors ${
                  activeTab === 'join' 
                    ? 'border-b-2 border-primary text-primary' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('join')}
              >
                조합원 가입 신청
              </button>
              <button
                className={`pb-4 px-6 text-lg font-medium transition-colors ${
                  activeTab === 'inquiry' 
                    ? 'border-b-2 border-primary text-primary' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('inquiry')}
              >
                문의하기
              </button>
            </div>

            {activeTab === 'join' ? (
              <form className="space-y-6 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
                <div className="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800 mb-6">
                  * 제출해주신 정보는 가입 상담 목적으로만 사용됩니다.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">가입 동기</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="함시모와 함께하게 된 계기를 자유롭게 적어주세요."></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-primary hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-md transition-colors text-lg">
                    가입 신청하기
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-6 animate-fade-in" onSubmit={(e) => e.preventDefault()}>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                   <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                  <textarea rows={6} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"></textarea>
                </div>
                 <div className="pt-4">
                  <button type="submit" className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-lg shadow-md transition-colors text-lg">
                    문의 발송하기
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

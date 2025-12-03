
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, MapPin, Mail, Lock, LogOut } from 'lucide-react';
import { NAV_ITEMS } from '../types';
import { useAdmin } from '../context/AdminContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [adminId, setAdminId] = useState('');
  const [adminPw, setAdminPw] = useState('');
  const location = useLocation();
  const { isAdmin, login, logout } = useAdmin();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(adminId, adminPw)) {
      setIsLoginModalOpen(false);
      setAdminId('');
      setAdminPw('');
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-background relative">
      {/* Admin Mode Indicator */}
      {isAdmin && (
        <div className="bg-gray-900 text-white px-4 py-2 text-sm flex justify-between items-center sticky top-0 z-[60]">
          <span className="font-bold flex items-center gap-2">
            <Lock size={14} className="text-green-400" />
            관리자 모드 활성화됨 (텍스트와 이미지를 클릭하여 수정하세요)
          </span>
          <button 
            onClick={logout} 
            className="text-gray-300 hover:text-white flex items-center gap-1 text-xs uppercase tracking-wider font-bold"
          >
            <LogOut size={14} /> 로그아웃
          </button>
        </div>
      )}

      {/* Header */}
      <header className={`sticky ${isAdmin ? 'top-[36px]' : 'top-0'} z-50 bg-white shadow-sm border-b border-gray-100 transition-all`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <Heart className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-gray-900 leading-none group-hover:text-primary transition-colors">
                  함시모
                </span>
                <span className="text-xs text-gray-500 font-medium">사회적협동조합</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary font-bold'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-primary hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-green-200"
              >
                참여하기
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-green-50 text-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  참여하기
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Heart className="w-6 h-6 text-secondary fill-current" />
                <span className="text-xl font-bold">사회적협동조합 함시모</span>
              </div>
              <p className="mb-6 leading-relaxed text-gray-400 max-w-sm">
                장애인이 차별 받지 않고 자아를 실현할 수 있도록 지원하고<br />
                비장애인과 어우러져 살아가는데 이바지하기 위한 모임입니다.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">바로가기</h3>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-secondary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">문의하기</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>세종특별자치시 금남면 성덕1길 113-13, 1층</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>010-3732-1295</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>jeonun@kongju.ac.kr</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <span>&copy; {new Date().getFullYear()} Social Cooperative Hamsimo. All rights reserved.</span>
            {!isAdmin && (
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="flex items-center gap-2 bg-gray-700 hover:bg-primary text-gray-300 hover:text-white px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md group"
                title="관리자 로그인 (ID: admin / PW: 1234)"
              >
                <Lock size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xs tracking-wider">ADMIN</span>
              </button>
            )}
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">관리자 로그인</h2>
              <p className="text-gray-500 mt-2">홈페이지 수정을 위해 로그인하세요.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">아이디</label>
                <input 
                  type="text" 
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="admin"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                <input 
                  type="password" 
                  value={adminPw}
                  onChange={(e) => setAdminPw(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="****"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

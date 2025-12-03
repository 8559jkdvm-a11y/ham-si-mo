export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: string[];
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: '소개/안내', path: '/about' },
  { label: '상세 정보(정책)', path: '/policy-education' },
  { label: '기능/서비스', path: '/programs' },
  { label: '문의/지원', path: '/contact' },
];
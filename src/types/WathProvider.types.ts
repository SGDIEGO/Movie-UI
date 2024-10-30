export interface IWatchProvider {
  id: number;
  results: Results;
}

export interface Results {
  AU: Au;
  DE: De;
  DK: Dk;
  EE: Ee;
  ES: Es;
  FI: Fi;
  GH: Gh;
  HK: Hk;
  IN: In;
  IT: It;
  LT: Lt;
  LV: Lv;
  NL: Nl;
  NZ: Nz;
  PT: Pt;
}

export interface Au {
  link: string;
  buy: Buy[];
  rent: Rent[];
}

export interface Buy {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Rent {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface De {
  link: string;
  buy: Buy2[];
}

export interface Buy2 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Dk {
  link: string;
  buy: Buy3[];
}

export interface Buy3 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Ee {
  link: string;
  buy: Buy4[];
}

export interface Buy4 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Es {
  link: string;
  buy: Buy5[];
}

export interface Buy5 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Fi {
  link: string;
  buy: Buy6[];
}

export interface Buy6 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Gh {
  link: string;
  buy: Buy7[];
}

export interface Buy7 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Hk {
  link: string;
  buy: Buy8[];
}

export interface Buy8 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface In {
  link: string;
  buy: Buy9[];
}

export interface Buy9 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface It {
  link: string;
  buy: Buy10[];
}

export interface Buy10 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Lt {
  link: string;
  buy: Buy11[];
}

export interface Buy11 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Lv {
  link: string;
  buy: Buy12[];
}

export interface Buy12 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Nl {
  link: string;
  buy: Buy13[];
}

export interface Buy13 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Nz {
  link: string;
  buy: Buy14[];
}

export interface Buy14 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export interface Pt {
  link: string;
  buy: Buy15[];
}

export interface Buy15 {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

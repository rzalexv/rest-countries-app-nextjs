export interface Country {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  ZAR?: TartuGecko;
  NOK?: TartuGecko;
  WST?: TartuGecko;
  GMD?: TartuGecko;
  XCD?: TartuGecko;
  EUR?: TartuGecko;
  AWG?: TartuGecko;
  XOF?: TartuGecko;
  KPW?: TartuGecko;
  PYG?: TartuGecko;
  BMD?: TartuGecko;
  XAF?: TartuGecko;
  USD?: TartuGecko;
  GBP?: TartuGecko;
  MZN?: TartuGecko;
  SOS?: TartuGecko;
  SGD?: TartuGecko;
  NIO?: TartuGecko;
  AUD?: TartuGecko;
  PEN?: TartuGecko;
  MXN?: TartuGecko;
  BAM?: BAM;
  BHD?: TartuGecko;
  MOP?: TartuGecko;
  BBD?: TartuGecko;
  UZS?: TartuGecko;
  CNY?: TartuGecko;
  MWK?: TartuGecko;
  ZWL?: TartuGecko;
  KES?: TartuGecko;
  PKR?: TartuGecko;
  FJD?: TartuGecko;
  SZL?: TartuGecko;
  JEP?: TartuGecko;
  TWD?: TartuGecko;
  LKR?: TartuGecko;
  BYN?: TartuGecko;
  AED?: TartuGecko;
  ANG?: TartuGecko;
  CRC?: TartuGecko;
  AOA?: TartuGecko;
  UYU?: TartuGecko;
  CDF?: TartuGecko;
  KWD?: TartuGecko;
  TRY?: TartuGecko;
  MRU?: TartuGecko;
  TVD?: TartuGecko;
  PAB?: TartuGecko;
  EGP?: TartuGecko;
  AZN?: TartuGecko;
  RWF?: TartuGecko;
  INR?: TartuGecko;
  ISK?: TartuGecko;
  SRD?: TartuGecko;
  BGN?: TartuGecko;
  SLL?: TartuGecko;
  TND?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  TTD?: TartuGecko;
  KMF?: TartuGecko;
  SHP?: TartuGecko;
  RON?: TartuGecko;
  NPR?: TartuGecko;
  SAR?: TartuGecko;
  DOP?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  KID?: TartuGecko;
  VUV?: TartuGecko;
  HUF?: TartuGecko;
  YER?: TartuGecko;
  SCR?: TartuGecko;
  LYD?: TartuGecko;
  ILS?: TartuGecko;
  VND?: TartuGecko;
  IRR?: TartuGecko;
  NAD?: TartuGecko;
  LBP?: TartuGecko;
  MYR?: TartuGecko;
  MNT?: TartuGecko;
  GEL?: TartuGecko;
  TJS?: TartuGecko;
  ALL?: TartuGecko;
  TMT?: TartuGecko;
  COP?: TartuGecko;
  VES?: TartuGecko;
  GNF?: TartuGecko;
  SSP?: TartuGecko;
  UAH?: TartuGecko;
  FKP?: TartuGecko;
  HNL?: TartuGecko;
  BRL?: TartuGecko;
  MUR?: TartuGecko;
  THB?: TartuGecko;
  BOB?: TartuGecko;
  SEK?: TartuGecko;
  GGP?: TartuGecko;
  ZMW?: TartuGecko;
  ERN?: TartuGecko;
  KZT?: TartuGecko;
  MAD?: TartuGecko;
  JOD?: TartuGecko;
  MMK?: TartuGecko;
  CZK?: TartuGecko;
  JMD?: TartuGecko;
  KGS?: TartuGecko;
  SDG?: BAM;
  STN?: TartuGecko;
  GIP?: TartuGecko;
  LSL?: TartuGecko;
  PLN?: TartuGecko;
  JPY?: TartuGecko;
  LRD?: TartuGecko;
  CVE?: TartuGecko;
  IMP?: TartuGecko;
  BIF?: TartuGecko;
  PGK?: TartuGecko;
  UGX?: TartuGecko;
  AFN?: TartuGecko;
  XPF?: TartuGecko;
  BWP?: TartuGecko;
  LAK?: TartuGecko;
  GTQ?: TartuGecko;
  CHF?: TartuGecko;
  SBD?: TartuGecko;
  SYP?: TartuGecko;
  BDT?: TartuGecko;
  DJF?: TartuGecko;
  GHS?: TartuGecko;
  OMR?: TartuGecko;
  BSD?: TartuGecko;
  DZD?: TartuGecko;
  HTG?: TartuGecko;
  PHP?: TartuGecko;
  CKD?: TartuGecko;
  NZD?: TartuGecko;
  TOP?: TartuGecko;
  MGA?: TartuGecko;
  CAD?: TartuGecko;
  AMD?: TartuGecko;
  NGN?: TartuGecko;
  BZD?: TartuGecko;
  RUB?: TartuGecko;
  KYD?: TartuGecko;
  MDL?: TartuGecko;
  RSD?: TartuGecko;
  CLP?: TartuGecko;
  IDR?: TartuGecko;
  MVR?: TartuGecko;
  BND?: TartuGecko;
  GYD?: TartuGecko;
  TZS?: TartuGecko;
  KHR?: TartuGecko;
  QAR?: TartuGecko;
  ARS?: TartuGecko;
  IQD?: TartuGecko;
  BTN?: TartuGecko;
  KRW?: TartuGecko;
  HKD?: TartuGecko;
  MKD?: TartuGecko;
  ETB?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}

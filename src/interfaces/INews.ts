import SearchResults from "../views/SearchResults";

export interface Response {
  currentPage: number;
  orderBy: string;
  pageSize: number;
  pages: number;
  startIndex: number;
  status: string;
  total: number;
  userTier: string;
}

export interface NewsResults {
  apiUrl: string;
  fields: Fields;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

export interface Fields {
  body: string;
  bodyText: string;
  byline: string;
  bylineHtml: string;
  charCount: string;
  firstPublicationDate: string;
  headline: string;
  isInappropriateForSponsorship: string;
  isLive: string;
  isPremoderated: string;
  lang: string;
  lastModified: string;
  legallySensitive: string;
  liveBloggingNow: string;
  main: string;
  productionOffice: string;
  publication: string;
  shortUrl: string;
  shouldHideAdverts: string;
  shouldHideReaderRevenue: string;
  showAffiliateLinks: string;
  showInRelatedContent: string;
  standfirst: string;
  thumbnail: string;
  trailText: string;
  wordcount: string;
}

export interface SearchResults {
  apiUrl: string;
  blocks: Blocks;
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

export interface Blocks {
  body: BodyContent[];
  main: Main;
  totalBodyBlocks: number;
}

export interface Main {
  attributes: {};
  bodyHtml: string;
  bodyTextSummary: string;
  contributors: [];
  createdDate: string;
  elements: Elements[];
  firstPublishedDate: string;
  id: string;
  lastModifiedDate: string;
  published: boolean;
  publishedDate: string;
}

export interface Assets {
  type: string;
  mimeType: string;
  file: string;
  typeData: TypeData;
}

export interface TypeData {
  aspectRatio: string;
  width: number;
  height: number;
}

export interface BodyContent {
  attributes: {};
  bodyHtml: string;
  bodyTextSummary: string;
  contributors: [];
  createdDate: string;
  elements:[];
  firstPublishedDate: string;
  id: string;
  lastModifiedDate:string;
  published: boolean;
  publishedDate: string;
}

export interface Elements {
  assets: Assets[];
  imageTypeData: ImageTypeData;
  type: "";
}

export interface ImageTypeData {
  alt: string;
  caption: string;
  copyright: string;
  credit: string;
  displayCredit: boolean;
  imageType: string;
  mediaApiUri: string;
  mediaId: string;
  photographer: string;
  source: string;
  suppliersReference: string;
}

export interface News extends Response {
  results: NewsResults[];
}

export interface Search extends Response {
  results: SearchResults[];
}

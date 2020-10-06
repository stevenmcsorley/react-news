import SearchResults from "../views/SearchResults";

export interface Response {
    currentPage: number
    orderBy: string
    pageSize: number
    pages: number
    startIndex: number
    status: string
    total: number
    userTier: string
  }

  export interface NewsResults {
    apiUrl: string
    fields: Fields
    id: string
    isHosted: boolean
    pillarId: string
    pillarName: string
    sectionId: string
    sectionName: string
    type: string
    webPublicationDate: string
    webTitle: string
    webUrl: string
  }
  
  export interface Fields{
  body: string
  bodyText: string
  byline: string
  bylineHtml: string
  charCount: string
  firstPublicationDate: string
  headline: string
  isInappropriateForSponsorship: string
  isLive: string
  isPremoderated: string
  lang: string
  lastModified: string
  legallySensitive: string
  liveBloggingNow: string
  main: string
  productionOffice: string
  publication: string
  shortUrl: string
  shouldHideAdverts: string
  shouldHideReaderRevenue: string
  showAffiliateLinks: string
  showInRelatedContent: string
  standfirst: string
  thumbnail: string
  trailText: string
  wordcount: string
  }


  export interface SearchResults{
    id:string
    type:string
    sectionId:string
    sectionName:string
    webPublicationDate:string
    webTitle:string
    webUrl:string
    apiUrl:string
    blocks: Blocks
    isHosted:boolean,
    pillarId:string,
    pillarName:string
  }

  export interface Blocks{
    main: Main
    body: BodyContent
    totalBodyBlocks: boolean
  }


  export interface Main{
    id:string
    bodyHtml:string
    bodyTextSummary:string
    attributes:{}
    published: string
    createdDate:string
    firstPublishedDate: string
    publishedDate: string
    lastModifiedDate:string
    contributors:[]
    elements:Elements[]
  }

  export interface Elements{
    type: string
    assets:Assets[]
  }

  export interface Assets{
    type:string
    mimeType:string
    file:string
    typeData: TypeData

  }

  export interface TypeData{
    aspectRatio: string
    width:string
    height: string
  }


  export interface BodyContent{
    id:string,
    bodyHtml:string
    bodyTextSummary: string
    attributes:{},
    published:boolean,
    createdDate:string,
    firstPublishedDate:string,
    publishedDate:string,
    lastModifiedDate:string,
    contributors:[]
    elements:[]
  }

  export interface News extends Response{
    results: NewsResults[]
  }

  export interface Search extends Response{
    results: SearchResults[]
  }
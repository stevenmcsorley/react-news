export interface Response {
    currentPage: number
    orderBy: string
    pageSize: number
    pages: number
    results: Results[]
    startIndex: number
    status: string
    total: number
    userTier: string
  }

  export interface Results {
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
export interface Image {
    href: Links[];
  }
  
  export interface Links {
    links: string;
  }
  
  export interface Single {
    response: SingleResponse;
  }
  
  export interface SingleResponse {
    content: Content;
    relatedContent: RelatedContent[];
    status: string;
    total: number;
    userTier: string;
  }
  
  export interface Content {
    apiUrl?: string;
    fields: SingleFields;
    id?: string;
    isHosted?: boolean;
    pillarId?: string;
    pillarName?: string;
    sectionId?: string;
    sectionName?: string;
    type?: string;
    webPublicationDate?: string;
    webTitle?: string;
    webUrl?: string;
  }
  
  export interface SingleFields {
    body: string;
    bodyText?: string;
    byline?: string;
    bylineHtml?: string;
    charCount?: string;
    firstPublicationDate?: string;
    headline?: string;
    isInappropriateForSponsorship?: string;
    isLive?: string;
    isPremoderated?: string;
    lang?: string;
    lastModified?: string;
    legallySensitive?: string;
    liveBloggingNow?: string;
    main?: string;
    productionOffice?: string;
    publication?: string;
    shortUrl?: string;
    shouldHideAdverts?: string;
    shouldHideReaderRevenue?: string;
    showAffiliateLinks?: string;
    showInRelatedContent?: string;
    standfirst?: string;
    thumbnail?: string;
    trailText?: string;
    wordcount?: string;
  }
  
  export interface RelatedContent {
    apiUrl: string;
    fields: SingleFields;
    id: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    references: [];
    sectionId: string;
    sectionName: string;
    tags: [];
    type: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
  }
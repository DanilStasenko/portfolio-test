export interface ICases {
    data: ICase[];
    meta: Meta;
}

export interface ICase {
    id:         number;
    attributes: CaseAttributes;
}

export interface CaseAttributes {
    title:     string;
    desc:      string;
    createdAt: Date;
    updatedAt: Date;
    niche:     string;
    client:    string;
    path:      string;
    image:     Image;
}

export interface Image {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Medium;
    small?:    Medium;
    medium?:   Medium;
}

export interface Medium {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
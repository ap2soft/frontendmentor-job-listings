export interface IsJob {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export type IsJobList = IsJob[];

export interface IsFilters {
  roles: string[];
  levels: string[];
  languages: string[];
  tools: string[];
}

export type IsFilter = keyof IsFilters;

export interface IsFilterData {
  type: IsFilter;
  value: string;
}

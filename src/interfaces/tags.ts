export interface TagDescriptive {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

export interface TagList {
  items: TagDescriptive[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
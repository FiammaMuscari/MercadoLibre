export interface Product {
  id: string;
  site_id: string;
  title: string;
  subtitle: null;
  seller_id: number;
  category_id: string;
  official_store_id: null;
  price: number;
  base_price: number;
  original_price: null;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: any[];
  buying_mode: string;
  listing_type_id: string;
  start_time: string;
  stop_time: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: Picture[];
  video_id: null;
  descriptions: Description[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: Shipping;
  international_delivery_mode: string;
  seller_address: SellerAddress;
  seller_contact: null;
  location: Location;
  coverage_areas: any[];
  attributes: Attribute[];
  warnings: any[];
  listing_source: string;
  variations: any[];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: null;
  catalog_product_id: null;
  domain_id: string;
  parent_item_id: null;
  differential_pricing: null;
  deal_ids: any[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number;
  catalog_listing: boolean;
  channels: string[];
  sellerRecomendations: Recomendations[];
}

export interface Recomendations {
  image: string;
  text: string;
  price: number;
}
export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  value_struct: Struct | null;
  values: Value[];
  attribute_group_id: string;
  attribute_group_name: string;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Value {
  id: null | string;
  name: string;
  struct: Struct | null;
}

export interface Description {
  id: string;
}

export interface Location {}

export interface Picture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

export interface SellerAddress {
  city: City;
  state: City;
  country: City;
  search_location: SearchLocation;
  id: number;
}

export interface City {
  id: string;
  name: string;
}

export interface SearchLocation {
  neighborhood: City;
  city: City;
  state: City;
}

export interface Shipping {
  mode: string;
  free_methods: FreeMethod[];
  tags: string[];
  dimensions: null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface FreeMethod {
  id: number;
  rule: Rule;
}

export interface Rule {
  default: boolean;
  free_mode: string;
  free_shipping_flag: boolean;
  value: null;
}

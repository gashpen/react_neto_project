/* eslint-disable @typescript-eslint/no-explicit-any */
export type Root = {
    items : Root2[]
}

export interface Root2 {
  listing_id: number
  state: string
  user_id?: number
  category_id?: number
  title?: string
  description?: string
  creation_tsz?: number
  ending_tsz?: number
  original_creation_tsz?: number
  last_modified_tsz?: number
  price?: string
  currency_code?: string
  quantity?: number
  sku: string[]
  tags?: string[]
  category_path?: string[]
  category_path_ids?: number[]
  materials?: string[]
  shop_section_id?: number
  featured_rank?: number
  state_tsz?: number
  url?: string
  views?: number
  num_favorers?: number
  shipping_template_id?: number
  processing_min?: number
  processing_max?: number
  who_made?: string
  is_supply?: string
  when_made?: string
  item_weight: any
  item_weight_unit?: string
  item_length: any
  item_width: any
  item_height: any
  item_dimensions_unit?: string
  is_private?: boolean
  recipient?: string
  occasion: any
  style?: string[]
  non_taxable?: boolean
  is_customizable?: boolean
  is_digital?: boolean
  file_data?: string
  should_auto_renew?: boolean
  language?: string
  has_variations?: boolean
  taxonomy_id?: number
  taxonomy_path?: string[]
  used_manufacturer?: boolean
  MainImage: MainImage
  error_messages?: string[]
}

export interface MainImage {
  listing_image_id: number
  hex_code: any
  red: any
  green: any
  blue: any
  hue: any
  saturation: any
  brightness: any
  is_black_and_white: any
  creation_tsz: any
  listing_id: number
  rank: any
  url_75x75: string
  url_170x135: string
  url_570xN: string
  url_fullxfull: string
  full_height: any
  full_width: any
}

export default function Listing({items}:Root){
 console.log()
    return (
        <>
            {items?.map((elem,index) =>
            <div key={index} className="item-list">
                <div className="item">
                    <div className="item-image">
                    <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                        <img src={elem.MainImage.url_570xN}/>
                    </a>
                    </div>
                    <div className="item-details">
                    <p className="item-title">Woodland Fairy</p>
                    <p className="item-price">{elem.price}</p>
                    <p className="item-quantity level-medium">12 left</p>
                    </div>
                </div>
            </div>)}
        </>
    )
}
import { ItemStatus } from '../items-status.enum';

// TODO: use input instead
export class CreateItemDto {
  id: number;
  name: string;
  upload_date: Date;
  description: string;
  price: number;
  seller_name: string;
  image_url: string;
  status: ItemStatus;
}

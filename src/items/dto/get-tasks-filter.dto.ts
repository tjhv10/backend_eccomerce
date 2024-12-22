import { ItemStatus } from '../item-status.enum';

export class GetTasksFilterDto {
  status?: ItemStatus;
  search?: string;
}

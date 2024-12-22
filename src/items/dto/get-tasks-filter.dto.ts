import { ItemStatus } from '../items-status.enum';

export class GetTasksFilterDto {
  status?: ItemStatus;
  search?: string;
}

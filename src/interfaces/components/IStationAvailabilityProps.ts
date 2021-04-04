import { IStyledComponent } from "../IStyledComponent"
import { TrueFalse } from "../../types/true-false"

export interface IStationAvailabilityProps extends IStyledComponent {
  availability: TrueFalse
}

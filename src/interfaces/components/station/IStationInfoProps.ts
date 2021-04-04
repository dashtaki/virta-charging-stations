import { IStyledComponent } from '../../IStyledComponent'
import { IStationDetail } from '../../IStationDetail'

export interface IStationInfoProps extends IStyledComponent {
    station: IStationDetail
    lastConnect: string
}

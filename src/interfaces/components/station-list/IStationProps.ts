import { IStation } from '../../IStation'
import { IStyledComponent } from '../../IStyledComponent'

export interface IStationProps extends IStyledComponent {
    station: IStation
    style: any
    scrolling?: boolean
}

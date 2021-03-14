import styled from 'styled-components'
import Station from './station'

export const StyledStation = styled(Station)`
    width: 50%;

    .back-button {
        width: 4rem;
        margin-right: 2rem;
        cursor: pointer;
    }

    .station-detail__header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .station-detail {
        background-color: white;
        padding: 1rem;
        border-radius: 0.375rem;
    }

    .station-detail__name {
        font-size: 2.5rem;
    }

    .station-detail .station-detail__label {
        color: #5f5f5f;
        margin-bottom: 1.5rem;
    }

    .station-detail .station-detail__value {
        font-weight: 500;
    }

    .station-detail .station-detail__label,
    .station-detail .station-detail__value {
        display: inline-flex;
        width: 33.333%;
        justify-content: center;
        align-items: center;
    }
`

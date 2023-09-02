
export interface IHosBookingSchedule {
    page: number
    limit: number
    hoscode: string
    depcode: string
}

export interface IScheduleList {
    hoscode: string
    depcode: string
    workDate: string
}

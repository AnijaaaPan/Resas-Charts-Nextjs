export type PrefecturesData = {
  prefCode: number
  prefName: string
}

export type PrefPopulationData = {
  data: PopulationData[]
  prefName: string
}

export type PopulationData = {
  data: PopulationDataDetail[]
  label: string
}

export type PopulationDataDetail = {
  rate?: number
  value: number
  year: number
}
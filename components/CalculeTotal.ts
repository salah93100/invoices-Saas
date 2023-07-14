
export const CalculeTotal = (vatRate:number,excludingTotal:number):number=> {
  const TotalTTC=vatRate*excludingTotal+excludingTotal
  return  Math.round(TotalTTC)
}

export const CalculeTotalVTA = (vatRate:number,excludingTotal:number):number=> {
    const TotalVTA=vatRate*excludingTotal
    return Math.round(TotalVTA)
}
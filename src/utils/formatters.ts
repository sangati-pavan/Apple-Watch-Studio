export function formatMaterial(material: string): string {
  return material.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function formatBandType(type: string): string {
  return type.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function calculateTotalPrice(casePrice: number = 0, bandPrice: number = 0): number {
  return casePrice + bandPrice;
}